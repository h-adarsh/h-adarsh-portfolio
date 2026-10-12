import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Download, Github, Linkedin, Award } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
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
      {/* Top Profile & Live Status */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <img
              src="/adarshpp.jpg"
              alt={personalInfo.name}
              className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border border-border shadow-sm group-hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
            <span
              className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-emerald-500 border-2 border-background ring-2 ring-emerald-500/20 animate-pulse-subtle"
              title="Active & Available"
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

        {/* Live Status Pill */}
        <div className="flex items-center">
          <Badge variant="status" className="py-1 px-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping mr-1" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mr-1.5" />
            {personalInfo.status.text}
          </Badge>
        </div>
      </div>

      {/* Main Narrative */}
      <div className="space-y-4 text-base sm:text-lg text-foreground/90 leading-relaxed font-sans mb-8">
        <p>
          I bridge application security and full-stack software engineering. Recently completed a 7-month internship (12 Jan – 10 Aug 2026) at{" "}
          <span className="font-medium text-foreground underline decoration-border decoration-1 underline-offset-4">
            Titan Company Limited
          </span>
          , where I built headless browser automations (170+ WAF domains), vulnerability diffing dashboards for 300K+ records, and internal LLM gateways.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Currently engineering autonomous AI assistants with human-in-the-loop verification, container sandboxing, and defense-in-depth isolation pipelines with{" "}
          <span className="font-mono text-xs bg-muted/60 px-1.5 py-0.5 rounded text-foreground">TypeScript</span>,{" "}
          <span className="font-mono text-xs bg-muted/60 px-1.5 py-0.5 rounded text-foreground">Node.js / Bun</span>,{" "}
          <span className="font-mono text-xs bg-muted/60 px-1.5 py-0.5 rounded text-foreground">Vercel AI SDK</span>, and{" "}
          <span className="font-mono text-xs bg-muted/60 px-1.5 py-0.5 rounded text-foreground">Docker</span>.
        </p>
      </div>

      {/* Action Buttons Row */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
        <Button
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="gap-2 font-mono text-xs h-9"
        >
          <Download className="h-3.5 w-3.5" />
          Resume PDF
        </Button>

        <Button
          variant="outline"
          size="sm"
          href={personalInfo.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-1.5 font-mono text-xs h-9"
          title="View Titan Company Ltd Internship Certificate"
        >
          <Award className="h-3.5 w-3.5 text-amber-500" />
          Titan Certificate
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyEmail}
          className="gap-2 font-mono text-xs h-9"
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
          className="gap-1.5 font-mono text-xs h-9 text-muted-foreground hover:text-foreground"
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
          className="gap-1.5 font-mono text-xs h-9 text-muted-foreground hover:text-foreground"
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