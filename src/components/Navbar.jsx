import React, { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "work", "projects", "kit", "notes", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/85 border-b border-border/50 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand logo */}
        <a
          href="#about"
          className="font-mono text-sm sm:text-base font-semibold tracking-tight text-foreground hover:opacity-70 transition-opacity flex items-center shrink-0 mr-2 sm:mr-4"
          aria-label="Back to top"
        >
          <span className="text-muted-foreground">/</span>
          <span>{personalInfo.monogram.replace(/^\//, "")}</span>
        </a>

        {/* Navigation Links & Theme Toggle */}
        <div className="flex items-center gap-1 sm:gap-2 min-w-0 justify-end">
          <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium overflow-x-auto no-scrollbar py-1">
            {[
              { id: "about", label: "about" },
              { id: "work", label: "work" },
              { id: "projects", label: "projects" },
              { id: "kit", label: "kit" },
              { id: "notes", label: "notes" },
              { id: "contact", label: "contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-2 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeSection === item.id
                    ? "text-foreground font-semibold bg-secondary/80"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <span className="w-px h-4 bg-border mx-1 shrink-0" aria-hidden="true" />

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}
