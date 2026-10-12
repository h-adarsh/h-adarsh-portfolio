import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand logo */}
        <a
          href="#about"
          className="font-mono text-sm sm:text-base font-semibold tracking-tight text-foreground hover:opacity-70 transition-opacity flex items-center"
          aria-label="Back to top"
        >
          <span className="text-muted-foreground">/</span>
          <span>{personalInfo.monogram.replace(/^\//, "")}</span>
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
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
              className={`px-2 py-1 rounded-md transition-colors ${
                activeSection === item.id
                  ? "text-foreground font-semibold bg-secondary/80"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              {item.label}
            </a>
          ))}

          <span className="w-px h-4 bg-border mx-1" aria-hidden="true" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors border border-transparent hover:border-border"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="h-4 w-4 transition-transform rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 transition-transform rotate-0 hover:-rotate-12" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
