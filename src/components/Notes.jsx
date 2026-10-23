import React, { useState } from "react";
import { ArrowUpRight, PenLine } from "lucide-react";
import { writings } from "@/data/portfolioData";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function Notes() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="notes" className="py-12 sm:py-16 border-b border-border/50">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-sans flex items-center gap-2.5">
          <PenLine className="h-6 w-6 text-foreground/80" />
          Technical Notes & Writing
        </h2>
        <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">
          // essays on cloud systems, cryptography & application architecture
        </p>
      </div>

      <div className="divide-y divide-border/60">
        {writings.map((article) => (
          <article
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="py-5 first:pt-0 last:pb-0 group cursor-pointer transition-colors"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedArticle(article);
              }
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:underline decoration-1 underline-offset-4 flex items-center gap-1.5">
                <span>{article.title}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" />
              </h3>

              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground shrink-0">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {article.summary}
            </p>
          </article>
        ))}
      </div>

      {/* Reader Dialog */}
      <Dialog open={!!selectedArticle} onOpenChange={(open) => !open && setSelectedArticle(null)}>
        {selectedArticle && (
          <DialogContent onClose={() => setSelectedArticle(null)} className="max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold">
                {selectedArticle.title}
              </DialogTitle>
              <DialogDescription className="text-sm pt-1">
                {selectedArticle.summary}
              </DialogDescription>
            </DialogHeader>

            <div className="pt-4 border-t border-border/50 space-y-3 font-sans">
              {renderArticleContent(selectedArticle.content)}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

function renderArticleContent(content) {
  if (!content) return null;
  const lines = content.split("\n");
  const elements = [];
  let currentList = [];
  let currentParagraph = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) {
        elements.push(
          <p
            key={`p-${elements.length}`}
            className="text-sm leading-relaxed text-foreground/85"
            dangerouslySetInnerHTML={{ __html: formatInline(text) }}
          />
        );
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="space-y-1.5 list-disc list-inside text-sm text-foreground/85 pl-1 my-2"
        >
          {currentList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      elements.push(
        <h4 key={`h-${elements.length}`} className="text-base font-semibold text-foreground pt-3 pb-1">
          {trimmed.replace(/^###\s+/, "")}
        </h4>
      );
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      currentList.push(trimmed.replace(/^-\s+/, ""));
      continue;
    }

    flushList();
    currentParagraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return elements;
}

function formatInline(str) {
  if (!str) return "";
  return str
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-muted font-mono text-xs text-foreground">$1</code>');
}
