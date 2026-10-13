import React, { useState } from "react";
import { Copy, Check, ArrowUpRight, Github, Linkedin, Phone, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { useToast } from "@/components/ui/toast";
import InteractivePile from "@/components/InteractivePile";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showToast?.("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-sans">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">
          // open for security engineering, appsec & full-stack opportunities
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 mb-12 shadow-sm">
        <p className="text-sm sm:text-base text-muted-foreground mb-4">
          Whether you have a question about security automation, want to discuss systems architecture, or have an engineering role to discuss—drop me a line.
        </p>

        {/* Big Editorial Email Row (Krishna Gupta style) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-border/50 my-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground hover:opacity-80 transition-opacity tracking-tight break-all"
          >
            {personalInfo.email}
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-background hover:bg-secondary text-xs font-mono text-foreground transition-all duration-200 active:scale-95 shrink-0 self-start sm:self-auto"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                <span>copy email</span>
              </>
            )}
          </button>
        </div>

        {/* Social and Quick Actions */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 hover:border-foreground/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            github.com/h-adarsh
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 hover:border-foreground/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
            linkedin.com/in/h-adarsh
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 hover:border-foreground/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {personalInfo.phone}
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 hover:border-foreground/40 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </div>

      {/* Interactive "maybe I'll use this someday" Pile & Krishna Gupta style Colophon */}
      <InteractivePile />
    </section>
  );
}
