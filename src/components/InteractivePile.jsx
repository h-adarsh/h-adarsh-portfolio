import React, { useState, useEffect, useRef } from "react";
import { PILE_ITEMS } from "@/data/pileItems";
import { playSound } from "@/lib/sound";

// Default curated layout on the desk ledge matching Krishna Gupta's composition
const DEFAULT_LAYOUT = {
  duck: { x: 10, y: -2, rotate: -2, zIndex: 3 },
  nautilus: { x: 62, y: -2, rotate: 6, zIndex: 2 },
  watch: { x: 118, y: -2, rotate: 2, zIndex: 4 },
  flute: { x: 92, y: -16, rotate: -28, zIndex: 6 },
  book: { x: 185, y: -2, rotate: -3, zIndex: 2 },
  hourglass: { x: 205, y: -2, rotate: 4, zIndex: 5 },
  feather: { x: 235, y: -6, rotate: 14, zIndex: 1 },
  nokia: { x: 270, y: -2, rotate: -5, zIndex: 4 },
  chai: { x: 280, y: -2, rotate: 3, zIndex: 3 },
  camera: { x: 310, y: -2, rotate: 0, zIndex: 3 },
  magnifier: { x: 405, y: -14, rotate: -22, zIndex: 7 },
  cassette: { x: 360, y: -2, rotate: 2, zIndex: 5 },
  tripod: { x: 155, y: -2, rotate: -8, zIndex: 1 },
};

export default function InteractivePile() {
  const [greeting, setGreeting] = useState("done for the day? go do something fun :)");
  const [kolkataTime, setKolkataTime] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [offsets, setOffsets] = useState({});
  const [isTidying, setIsTidying] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [containerWidth, setContainerWidth] = useState(600);

  const containerRef = useRef(null);
  const dragRef = useRef({ id: null, startX: 0, startY: 0, origX: 0, origY: 0 });

  // Measure container width for responsive item placement
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // 1. Live Kolkata Time & Dynamic Greeting
  useEffect(() => {
    const updateTimeAndGreeting = () => {
      const now = new Date();
      // Formatter for Kolkata / Asia/Kolkata timezone
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setKolkataTime(timeStr);

      // Extract hour in Kolkata timezone
      const hourPart = parseInt(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "numeric",
        }),
        10
      );

      if (hourPart >= 5 && hourPart < 12) {
        setGreeting("have breakfast first :)");
      } else if (hourPart >= 12 && hourPart < 17) {
        setGreeting("shouldn’t you be working right now? :)");
      } else if (hourPart >= 17 && hourPart < 21) {
        setGreeting("done for the day? go do something fun :)");
      } else {
        setGreeting("up this late? go get some sleep :)");
      }
    };

    updateTimeAndGreeting();
    const timer = setInterval(updateTimeAndGreeting, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Tidy up action
  const handleTidyUp = React.useCallback(() => {
    playSound("tidy", soundEnabled);
    setIsTidying(true);
    setOffsets({});
    setTimeout(() => setIsTidying(false), 600);
  }, [soundEnabled]);

  // Keyboard shortcut: 'r' to tidy up
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "r" || e.key === "R") {
        handleTidyUp();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleTidyUp]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) playSound("pop", true);
  };

  // 3. Pointer Drag handling
  const handlePointerDown = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    playSound("pop", soundEnabled);

    const currentOffset = offsets[id] || { x: 0, y: 0 };
    dragRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      origX: currentOffset.x,
      origY: currentOffset.y,
    };
    setActiveItem(id);

    const handlePointerMove = (ev) => {
      if (dragRef.current.id !== id) return;
      const dx = ev.clientX - dragRef.current.startX;
      const dy = ev.clientY - dragRef.current.startY;
      setOffsets((prev) => ({
        ...prev,
        [id]: {
          x: dragRef.current.origX + dx,
          y: dragRef.current.origY + dy,
        },
      }));
    };

    const handlePointerUp = () => {
      playSound("click", soundEnabled);
      setActiveItem(null);
      dragRef.current.id = null;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  return (
    <div className="pt-10 sm:pt-14 select-none">
      {/* 1. Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
        <h3 className="font-serif italic text-2xl sm:text-3xl text-foreground tracking-tight">
          {greeting}
        </h3>
        <a
          href="#notes"
          className="text-xs sm:text-sm font-sans text-muted-foreground hover:text-foreground inline-flex items-center gap-1 group transition-colors"
        >
          <span>read the human side</span>
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>

      {/* 2. Sub-bar: Pile description and tidy control */}
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pb-4 border-b border-border/30">
        <span>my &ldquo;maybe i&rsquo;ll use this someday&rdquo; pile</span>
        <div>
          <span className="hidden sm:inline">drag it, throw it, </span>
          <button
            onClick={handleTidyUp}
            className="text-foreground hover:underline underline-offset-4 decoration-1 font-semibold cursor-pointer transition-colors"
          >
            tidy up
          </button>
        </div>
      </div>

      {/* 3. The Interactive Pile Desk Viewport */}
      <div
        ref={containerRef}
        className="relative w-full h-[260px] sm:h-[300px] overflow-hidden my-2 border-b border-border/40"
      >
        {/* Background desk subtle baseline */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-border/60" />

        {/* Character Illustration Seated on the Right */}
        <div
          className="absolute right-0 bottom-0 pointer-events-none select-none z-10 w-[140px] sm:w-[230px]"
          title="sitting behind the pile, looking thoughtfully"
        >
          {/* Light Mode Drawing */}
          <img
            src="/me-drawing.webp"
            alt="Adarsh sitting at desk"
            className="w-full h-auto object-contain dark:hidden pointer-events-none"
            loading="lazy"
          />
          {/* Dark Mode Vector Drawing */}
          <img
            src="/me-drawing-dark.svg"
            alt="Adarsh sitting at desk"
            className="w-full h-auto object-contain hidden dark:block pointer-events-none"
            loading="lazy"
          />
        </div>

        {/* Interactive Draggable Items */}
        <div className="absolute inset-0 pointer-events-none">
          {PILE_ITEMS.map((item) => {
            const layout = DEFAULT_LAYOUT[item.id] || { x: 50, y: -2, rotate: 0, zIndex: 2 };
            const offset = offsets[item.id] || { x: 0, y: 0 };
            const isHeld = activeItem === item.id;

            // Scale desk items dynamically on smaller mobile viewports
            const pileScale = containerWidth < 600 ? Math.max(0.55, Math.min(1, (containerWidth - 140) / 360)) : 1;
            const currentX = (layout.x * pileScale) + offset.x;
            const currentY = layout.y + offset.y;
            const rotate = isHeld ? layout.rotate + 4 : layout.rotate;

            return (
              <div
                key={item.id}
                onPointerDown={(e) => handlePointerDown(item.id, e)}
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  transform: `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotate}deg) scale(${isHeld ? 1.08 : 1})`,
                  transformOrigin: "center bottom",
                  zIndex: isHeld ? 50 : layout.zIndex,
                  touchAction: "none",
                  cursor: isHeld ? "grabbing" : "grab",
                }}
                className={`pointer-events-auto transition-transform ${
                  isTidying ? "duration-500 ease-out" : isHeld ? "duration-75" : "duration-200"
                } ${isHeld ? "drop-shadow-xl" : "drop-shadow-sm hover:drop-shadow-md"}`}
                title={`Drag ${item.id}`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                  className="transition-opacity duration-200"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom Colophon with Dotted Line & Live Kolkata Clock */}
      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-muted-foreground border-t border-dotted border-border/80">
        <div className="space-y-1">
          <p className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <span>&copy; {new Date().getFullYear()} adarsh singh</span>
            <span>&middot;</span>
            <span>
              kolkata <span className="text-foreground font-semibold">{kolkataTime}</span>
            </span>
          </p>
          <p className="text-[11px] text-muted-foreground/80">
            psst, this is an ai &amp; security engineer&apos;s site. press{" "}
            <kbd className="px-1.5 py-0.5 rounded border border-border/80 bg-muted/60 text-[10px] font-mono text-foreground shadow-xs">
              r
            </kbd>{" "}
            to tidy
          </p>
        </div>

        {/* Sound toggle */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={toggleSound}
            className="hover:text-foreground transition-colors cursor-pointer"
            title="Toggle interactive audio synthesized via Web Audio API"
          >
            sound{" "}
            <span className="underline underline-offset-4 font-semibold text-foreground">
              {soundEnabled ? "on" : "off"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
