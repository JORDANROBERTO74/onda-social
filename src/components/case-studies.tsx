"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

function parseMetric(value: string) {
  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const numeric = Number(match[2].replace(/\./g, "").replace(",", "."));
  return { prefix: match[1], number: Number.isFinite(numeric) ? numeric : 0, suffix: match[3] };
}

function Metric({ value }: Readonly<{ value: string }>) {
  const { prefix, number, suffix } = parseMetric(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(number * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [number]);

  return (
    <span className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function CaseStudies({ content }: Readonly<{ content: Dictionary["work"] }>) {
  const [active, setActive] = useState(0);
  const study = content.items[active];

  return (
    <section id="work" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
              {content.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
              {content.title}
            </h2>
          </div>
          <p className="m-0 max-w-[40ch] text-sm leading-relaxed text-slate">{content.aside}</p>
        </div>

        <div
          role="tablist"
          aria-label={content.eyebrow}
          className="mt-10 -mx-1 flex gap-2 overflow-x-auto px-1 pb-2"
        >
          {content.items.map((item, index) => (
            <button
              key={item.client}
              role="tab"
              id={`tab-${index}`}
              aria-selected={active === index}
              aria-controls={`panel-${index}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                event.preventDefault();
                const next =
                  event.key === "ArrowRight"
                    ? (active + 1) % content.items.length
                    : (active - 1 + content.items.length) % content.items.length;
                setActive(next);
                document.getElementById(`tab-${next}`)?.focus();
              }}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-medium transition-colors ${
                active === index
                  ? "border-forest bg-forest text-cream"
                  : "border-forest/20 text-forest hover:bg-forest/5"
              }`}
            >
              {item.client}
            </button>
          ))}
        </div>

        <div
          key={study.client}
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className="mt-8 grid gap-8 rounded-[32px] border border-ink/8 bg-cream p-6 md:grid-cols-[1fr_1.1fr] md:gap-12 md:rounded-[40px] md:p-8"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-forest/10">
            <Image
              src={study.image}
              alt={study.alt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mint">
              {study.sector}
            </span>
            <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              {study.client}
            </h3>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-slate">
              {study.description}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="m-0 text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-none tracking-tight text-forest">
                    <Metric value={metric.value} />
                  </dd>
                  <dt className="mt-2 text-[10px] uppercase leading-tight tracking-[0.12em] text-slate">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mt-5 text-[11px] text-slate">{content.disclaimer}</p>
      </div>
    </section>
  );
}
