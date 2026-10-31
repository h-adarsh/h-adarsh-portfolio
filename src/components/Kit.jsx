import React from "react";
import { techKit, certifications } from "@/data/portfolioData";
import { Award, ExternalLink, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Kit() {
  return (
    <section id="kit" className="py-12 sm:py-16 border-b border-border/50">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-sans flex items-center gap-2.5">
          <Wrench className="h-6 w-6 text-foreground/80" />
          The Kit & Arsenal
        </h2>
        <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">
          // languages, frameworks, AI engineering, security & infrastructure
        </p>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {techKit.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border/70 bg-card/60 p-5 transition-colors hover:border-foreground/30"
          >
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-md bg-muted/40 border border-border/50 text-foreground/90 hover:border-foreground/40 hover:bg-muted/70 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Verified Certifications */}
      <div className="rounded-xl border border-border/70 bg-card/40 p-5">
        <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
          <Award className="h-4 w-4 text-amber-500" />
          Industry Certifications & Credentials
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-3.5 rounded-lg bg-card/60 border border-border/70 flex items-start justify-between gap-3 group hover:border-foreground/30 hover:bg-muted/30 transition-all duration-200",
                cert.fullWidth && "sm:col-span-2"
              )}
            >
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                  <span>{cert.title}</span>{" "}
                  <ExternalLink className="inline-block h-3 w-3 align-[-1px] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-[11px] font-mono text-muted-foreground mt-1">
                  {cert.issuer} • {cert.date}
                </p>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 font-medium">
                {cert.badge}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
