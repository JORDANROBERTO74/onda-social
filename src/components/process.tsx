"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Process({ content }: Readonly<{ content: Dictionary["process"] }>) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const steps = content.steps;

  useEffect(() => {
    const elements = refs.current.filter(Boolean) as HTMLDivElement[];
    if (!elements.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index ?? 0));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section id="process" className="px-6 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="rounded-[40px] border border-ink/8 bg-cream px-7 py-14 md:rounded-[60px] md:px-16 md:py-20">
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            {content.title}
          </h2>

          <div className="mt-12 grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div className="hidden h-fit md:sticky md:top-28 md:block">
              <p className="m-0 font-serif text-[clamp(3.5rem,7vw,5.5rem)] leading-none text-forest">
                {String(active + 1).padStart(2, "0")}
                <span className="ml-2 align-top text-sm font-sans text-slate">
                  / {String(steps.length).padStart(2, "0")}
                </span>
              </p>
              <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-ink/10">
                <span
                  className="block h-full rounded-full bg-forest transition-[width] duration-500"
                  style={{ width: `${((active + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>

            <ol className="m-0 list-none p-0">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <div
                    ref={(element) => {
                      refs.current[index] = element;
                    }}
                    data-index={index}
                    className="border-t border-ink/10 py-9 first:border-t-0 first:pt-0"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold tracking-[-0.01em]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-slate">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
