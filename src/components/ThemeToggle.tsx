import React, { useEffect, useState, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

export interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isTransitioningRef = useRef<boolean>(false);

  // Sync HTML dark class with state
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioningRef.current) return;

    const nextDark = !isDark;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Fallback for browsers lacking View Transitions API or when reduced motion is preferred
    const startViewTransition = (document as unknown as { startViewTransition?: (cb: () => void) => { ready: Promise<void>; finished: Promise<void> } }).startViewTransition;

    if (!startViewTransition || prefersReducedMotion) {
      setIsDark(nextDark);
      if (nextDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return;
    }

    // 2. Modern Circular Radial Reveal via View Transitions API
    isTransitioningRef.current = true;

    // Calculate exact click coordinates (x, y)
    let x: number;
    let y: number;
    if (
      event &&
      typeof event.clientX === "number" &&
      (event.clientX !== 0 || event.clientY !== 0)
    ) {
      x = event.clientX;
      y = event.clientY;
    } else if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    } else {
      x = window.innerWidth / 2;
      y = window.innerHeight / 2;
    }

    // Calculate distance to farthest screen corner
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Suppress CSS transitions temporarily while capturing snapshot
    document.documentElement.classList.add("view-transition-active");

    const transition = startViewTransition.call(document, () => {
      flushSync(() => {
        setIsDark(nextDark);
        if (nextDark) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      });
    });

    transition.ready
      .then(() => {
        // Animate circular clip-path expanding outward from toggle button across viewport
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 400,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch((err) => {
        console.warn("View transition animation failed:", err);
      });

    transition.finished.finally(() => {
      document.documentElement.classList.remove("view-transition-active");
      isTransitioningRef.current = false;
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      type="button"
      className={`relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors border border-transparent hover:border-border shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="relative flex items-center justify-center w-4 h-4">
        {/* Sun Icon: smoothly rotates 90° and scales between scale-100 and scale-0 with opacity cross-fade */}
        <Sun
          className={`h-4 w-4 transition-all duration-300 ease-in-out ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-amber-400 dark:text-amber-300"
              : "-rotate-90 scale-0 opacity-0"
          }`}
          aria-hidden="true"
        />
        {/* Moon Icon: smoothly rotates 90° and scales between scale-100 and scale-0 with opacity cross-fade */}
        <Moon
          className={`absolute h-4 w-4 transition-all duration-300 ease-in-out ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-foreground"
          }`}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
