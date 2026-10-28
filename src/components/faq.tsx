"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Faq({ content }: Readonly<{ content: Dictionary["faq"] }>) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div>
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[16ch] text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            {content.title}
          </h2>
        </div>

        <ul className="m-0 list-none p-0">
          {content.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <li key={item.question} className="border-t border-ink/10 last:border-b">
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium md:text-base">{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="relative flex h-6 w-6 shrink-0 items-center justify-center"
                    >
                      <span className="absolute h-0.5 w-3.5 rounded bg-forest" />
                      <span
                        className={`absolute h-3.5 w-0.5 rounded bg-forest transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!isOpen}
                  className="pb-6 pr-10 text-sm leading-relaxed text-slate"
                >
                  {item.answer}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
