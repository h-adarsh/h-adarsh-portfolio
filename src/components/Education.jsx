import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, Users, Sparkles, Code2 } from "lucide-react";
import { education } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 border-b border-border/50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-sans flex items-center gap-2.5">
            <GraduationCap className="h-6 w-6 text-foreground/80" />
            Education
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">
            // academic background, engineering degree & schooling
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div
            key={edu.institution + edu.field + idx}
            className="relative pl-6 sm:pl-8 before:absolute before:left-2 before:top-2.5 before:bottom-0 before:w-px before:bg-border/80 group"
          >
            {/* Timeline node */}
            <span className="absolute left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground transition-transform group-hover:scale-125" />

            <div className="rounded-xl border border-border/80 bg-card p-5 sm:p-6 transition-all duration-200 hover:border-foreground/30 shadow-sm">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {edu.degree}
                      {edu.field && edu.field !== edu.degree && (
                        <span className="text-muted-foreground font-normal">
                          {" "}— {edu.field}
                        </span>
                      )}
                    </h3>

                    {edu.status === "Completed" ? (
                      <Badge variant="status" className="py-0 px-2 text-[10px]">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    ) : (
                      <Badge variant="mono" className="py-0 px-2 text-[10px]">
                        {edu.badge || "2022 – 2026"}
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm font-medium text-foreground/90 mt-1">
                    {edu.institution}
                  </p>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-muted-foreground shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 shrink-0" />
                    <span>{edu.period || edu.year}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Activities & Societies */}
              {edu.activities && (
                <div className="mt-3 text-xs text-muted-foreground flex items-start gap-2 bg-muted/20 border border-border/40 p-2.5 sm:p-3 rounded-lg leading-relaxed">
                  <Users className="h-3.5 w-3.5 text-foreground/70 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground/90 font-mono text-[11px] uppercase tracking-wider block sm:inline sm:mr-1.5">
                      Activities & societies:
                    </span>
                    <span>{edu.activities}</span>
                  </div>
                </div>
              )}

              {/* Secondary School Description */}
              {edu.description && (
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3">
                  {edu.description}
                </p>
              )}

              {/* Structured Coursework & Engineering Focus (for University) */}
              {(edu.coursework || edu.focus) && (
                <div className="space-y-3 mt-3 pt-3 border-t border-border/50">
                  {edu.coursework && (
                    <div className="p-3.5 rounded-lg bg-muted/20 border border-border/40 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <div className="flex items-center gap-2 mb-2 font-semibold text-foreground text-xs sm:text-sm">
                        <BookOpen className="h-3.5 w-3.5 text-foreground/80 shrink-0" />
                        <span>Relevant Coursework</span>
                      </div>
                      <ul className="space-y-1 list-disc list-inside text-xs sm:text-sm pl-1 text-foreground/85">
                        {edu.coursework.map((course, cIdx) => (
                          <li key={cIdx}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.focus && (
                    <div className="p-3.5 rounded-lg bg-muted/20 border border-border/40 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <div className="flex items-center gap-2 mb-2 font-semibold text-foreground text-xs sm:text-sm">
                        <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                        <span>Academic & Engineering Focus</span>
                      </div>
                      <ul className="space-y-1 list-disc list-inside text-xs sm:text-sm pl-1 text-foreground/85">
                        {edu.focus.map((fItem, fIdx) => (
                          <li key={fIdx}>{fItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Skills Tags */}
              {edu.skills && edu.skills.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-3 mt-3 border-t border-border/40">
                  <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1 mr-1">
                    <Code2 className="h-3 w-3 text-muted-foreground shrink-0" />
                    Skills:
                  </span>
                  {edu.skills.map((skill) => (
                    <Badge key={skill} variant="mono" className="text-[10px] py-0 px-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
