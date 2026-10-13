import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Download, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showToast?.("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pt-10 sm:pt-16 pb-12 sm:pb-16 border-b border-border/50">
      {/* Top Profile */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <img
              src="/adarshpp.jpg"
              alt={personalInfo.name}
              className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border border-border shadow-sm group-hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-sans">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-mono text-muted-foreground mt-0.5">
              {personalInfo.role}
            </p>
            <p className="text-xs text-muted-foreground/80 mt-0.5">
              📍 {personalInfo.location}
            </p>
          </div>
        </div>
      </div>

      {/* Main Narrative */}
      <div className="space-y-4 text-base sm:text-lg text-foreground/90 leading-relaxed font-sans mb-8">
        <p>
          Hi, I&apos;m Adarsh. I build software that connects application security, robust backend infrastructure, and modern AI. I&apos;m drawn to first-principles thinking, clean abstractions, and systems that hold up reliably under pressure.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          To counterbalance the intensity of screen time, I&apos;m an avid runner and committed to physical fitness. Whether it&apos;s pushing through an early morning run or lifting, staying physically challenged fuels the clarity, discipline, and endurance I bring back to the craft of engineering.
        </p>
      </div>

      {/* Action Buttons Row */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
        <Button
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="gap-2 font-mono text-xs h-9 w-full sm:w-auto"
        >
          <Download className="h-3.5 w-3.5" />
          Resume PDF
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyEmail}
          className="gap-2 font-mono text-xs h-9 w-full sm:w-auto"
          title="Click to copy email address"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-500" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span>{copied ? "Copied!" : "Copy Email"}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-1.5 font-mono text-xs h-9 text-muted-foreground hover:text-foreground w-full sm:w-auto justify-center"
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
          <ArrowUpRight className="h-3 w-3 opacity-60" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-1.5 font-mono text-xs h-9 text-muted-foreground hover:text-foreground w-full sm:w-auto justify-center"
        >
          <Linkedin className="h-3.5 w-3.5" />
          LinkedIn
          <ArrowUpRight className="h-3 w-3 opacity-60" />
        </Button>
      </div>

      {/* Philosophy Quote Pill */}
      <div className="p-4 sm:p-5 rounded-xl border border-border/60 bg-muted/20">
        <p className="font-serif italic text-base sm:text-lg text-foreground/90 leading-relaxed">
          “{personalInfo.quote.text}”
        </p>
        <p className="text-xs font-mono text-muted-foreground mt-1.5">
          — {personalInfo.quote.author}
        </p>
      </div>
    </section>
  );
}