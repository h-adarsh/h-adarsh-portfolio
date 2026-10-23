import React, { useState } from "react";
import { Calendar, MapPin, Award, CheckCircle2, Download, ExternalLink, Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section id="work" className="py-12 sm:py-16 border-b border-border/50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-sans flex items-center gap-2.5">
            <Briefcase className="h-6 w-6 text-foreground/80" />
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">
            // enterprise security engineering & production systems
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={exp.company + idx}
            className="relative pl-6 sm:pl-8 before:absolute before:left-2 before:top-2.5 before:bottom-0 before:w-px before:bg-border/80 group"
          >
            {/* Timeline node */}
            <span className="absolute left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground transition-transform group-hover:scale-125" />

            <div className="rounded-xl border border-border/80 bg-card p-5 sm:p-6 transition-all duration-200 hover:border-foreground/30 shadow-sm">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <Badge variant="status" className="py-0 px-2 text-[10px]">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  </div>

                  <p className="text-sm font-medium text-foreground/90 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                {/* Duration & Certificate Trigger */}
                <div className="flex flex-col sm:items-end gap-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-foreground/80">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>

                    {exp.hasCertificate && (
                      <>
                        <span className="text-border">•</span>
                        <button
                          onClick={() => setShowCertificate(true)}
                          className="inline-flex items-center gap-1 text-xs font-mono text-foreground hover:underline decoration-1 underline-offset-4 cursor-pointer"
                          title="View official completion certificate"
                        >
                          <Award className="h-3 w-3 text-amber-500" />
                          <span>Certificate</span>
                          <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="space-y-3 mb-5">
                {exp.achievements.map((item) => (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-lg bg-muted/20 border border-border/40 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                  >
                    <span className="font-semibold text-foreground block sm:inline font-mono sm:mr-2">
                      [{item.title}]
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="mono">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      <Dialog open={showCertificate} onOpenChange={setShowCertificate}>
        <DialogContent onClose={() => setShowCertificate(false)} className="max-w-2xl">
          <DialogHeader className="pr-12">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground mb-1">
              <span>Titan Company Limited</span>
              <span className="text-border">•</span>
              <Badge variant="status" className="py-0 px-2 text-[10px]">
                Verified Credential
              </Badge>
            </div>
            <DialogTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500 shrink-0" />
              Internship Completion Certificate
            </DialogTitle>
            <DialogDescription className="text-xs font-mono">
              Duration: 12 January 2026 — 10 August 2026 (7 Months)
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-1">
            {/* Certificate Preview Image Frame */}
            <div className="rounded-xl border border-border overflow-hidden bg-white p-2 sm:p-4 shadow-lg">
              <img
                src="/titan_internship_certificate.png"
                alt="Titan Company Limited Internship Certificate for Adarsh Singh"
                className="w-full h-auto max-h-[55vh] object-contain mx-auto rounded"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                href="/titan_internship_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="gap-2 font-mono text-xs"
              >
                <Download className="h-3.5 w-3.5" />
                Download Original PDF
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
