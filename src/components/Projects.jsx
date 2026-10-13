import React, { useState } from "react";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { projects } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 border-b border-border/50">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-sans">
            Featured Projects
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">
            // enterprise tooling, browser automation & open-source builds
          </p>
        </div>

        {/* shadcn Tabs filter */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto max-w-full">
          <TabsList className="max-w-full overflow-x-auto no-scrollbar">
            <TabsTrigger value="all">all ({projects.length})</TabsTrigger>
            <TabsTrigger value="enterprise">enterprise</TabsTrigger>
            <TabsTrigger value="opensource">open source</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer text-left"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
          >
            <Card className="h-full flex flex-col justify-between hover:border-foreground/30 hover:bg-muted/10 transition-all duration-200">
              <CardHeader className="p-5 pb-3">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-2">
                  <span>{project.date}</span>
                  <div className="flex items-center gap-1.5">
                    {project.isEnterprise ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/90">
                        <Lock className="h-3 w-3" />
                        Enterprise
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/90">
                        <Github className="h-3 w-3" />
                        OSS
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base font-semibold group-hover:text-foreground transition-colors">
                    {project.title}
                  </CardTitle>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground shrink-0" />
                </div>
                <CardDescription className="text-xs font-mono text-muted-foreground mt-0.5">
                  {project.categoryLabel}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-5 pt-0">
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>
              </CardContent>

              <CardFooter className="p-5 pt-0 flex flex-wrap gap-1.5 mt-auto">
                {project.techStack.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="mono">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-[10px] font-mono text-muted-foreground self-center">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      {/* Project Deep Dive Dialog Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent onClose={() => setSelectedProject(null)}>
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                <span>{selectedProject.date}</span>
                <span className="text-border">•</span>
                <Badge variant={selectedProject.isEnterprise ? "outline" : "default"}>
                  {selectedProject.categoryLabel}
                </Badge>
                {selectedProject.company && (
                  <>
                    <span className="text-border">•</span>
                    <span className="text-foreground/80 font-medium">{selectedProject.company}</span>
                  </>
                )}
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-sm pt-1">
                {selectedProject.summary}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 pt-1">
              {/* Measurable Result / Impact */}
              {selectedProject.result && (
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    // Measured Result & Impact
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed bg-muted/20 p-3.5 rounded-xl border border-border/50">
                    {selectedProject.result}
                  </p>
                </div>
              )}

              {/* The Problem / Mentor Context */}
              {selectedProject.problem && (
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    // Problem Context
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed bg-muted/20 p-3.5 rounded-xl border border-border/50">
                    {selectedProject.problem}
                  </p>
                </div>
              )}

              {/* What I Built & Key Engineering Decisions */}
              {selectedProject.highlights ? (
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    // What I Built & Engineering Highlights
                  </h4>
                  {selectedProject.whatIBuilt && (
                    <p className="text-xs sm:text-sm text-foreground/90 mb-2.5 font-medium leading-relaxed">
                      {selectedProject.whatIBuilt}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2 bg-muted/10 p-2.5 rounded-lg border border-border/40"
                      >
                        <span className="text-foreground/70 font-mono text-xs select-none shrink-0 mt-0.5">→</span>
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : selectedProject.detailedDescription ? (
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    // System Architecture & Implementation
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed bg-muted/20 p-4 rounded-xl border border-border/50 whitespace-pre-line">
                    {selectedProject.detailedDescription}
                  </p>
                </div>
              ) : null}

              {/* Operations & Cadence */}
              {selectedProject.operations && (
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/20 px-3 py-2 rounded-lg border border-border/40">
                  <span className="text-foreground/80 font-semibold">
                    {selectedProject.operationsLabel || "Usage / Status:"}
                  </span>
                  <span>{selectedProject.operations}</span>
                </div>
              )}

              {/* Technologies Utilized */}
              <div>
                <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  // Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} variant="mono" className="text-xs py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {selectedProject.isEnterprise ? (
                <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-2">
                  <Lock className="h-4 w-4 shrink-0" />
                  <span>
                    Proprietary Enterprise Software for Titan Company Ltd. Architecture overview & demos available on request.
                  </span>
                </div>
              ) : selectedProject.github ? (
                <div className="pt-2 flex gap-3">
                  <Button
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="gap-2 font-mono text-xs"
                  >
                    <Github className="h-4 w-4" />
                    View Repository
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ) : null}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
