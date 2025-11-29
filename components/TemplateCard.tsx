"use client";

import { useState } from "react";

type Template = {
  id: string;
  theme: string;
  goal: string;
  hook: string;
  structure: string[];
  body: string[];
  hashtags: string[];
  cta: string;
};

export function TemplateCard({ template }: { template: Template }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const content = [
      `Goal: ${template.goal}`,
      "",
      `Hook: ${template.hook}`,
      "",
      ...template.body.map((line) => line),
      "",
      `CTA: ${template.cta}`,
      "",
      `#${template.hashtags.join(" #")}`
    ].join("\n");

    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-accent/80 hover:bg-white/[0.08]">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            {template.theme}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{template.goal}</h3>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-accent/90 hover:bg-accent/20"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </header>
      <p className="mt-4 text-sm font-medium text-accent">Hook</p>
      <p className="mt-1 text-base text-white/90">{template.hook}</p>
      <p className="mt-4 text-sm font-medium text-accent">Narrative Rhythm</p>
      <ul className="mt-2 space-y-2 text-sm text-white/70">
        {template.structure.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-3 text-sm leading-relaxed text-white/80">
        {template.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="mt-6 text-sm font-medium text-accent">CTA</p>
      <p className="mt-1 text-sm text-white/80">{template.cta}</p>
      <footer className="mt-6 flex flex-wrap gap-2">
        {template.hashtags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/70"
          >
            #{tag}
          </span>
        ))}
      </footer>
    </article>
  );
}
