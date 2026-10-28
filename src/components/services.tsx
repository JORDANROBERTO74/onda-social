import { Layers, Target } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";

const tones: Record<string, string> = {
  pink: "bg-pink text-ink",
  violet: "bg-violet text-ink",
  magenta: "bg-magenta text-ink",
  forest: "bg-forest text-cream",
};

const badgeTones: Record<string, string> = {
  pink: "bg-ink/10 text-ink",
  violet: "bg-ink/10 text-ink",
  magenta: "bg-ink/10 text-ink",
  forest: "bg-cream/15 text-cream",
};

export function Services({ content }: Readonly<{ content: Dictionary["services"] }>) {
  return (
    <section id="services" className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
              {content.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[18ch] text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
              {content.title}
            </h2>
          </div>
          <p className="m-0 max-w-[38ch] text-sm leading-relaxed text-slate">{content.intro}</p>
        </div>

        <div className="mt-12 space-y-5">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className={`md:sticky rounded-[28px] p-7 md:rounded-[36px] md:p-12 ${tones[item.tone] ?? tones.forest}`}
              style={{ top: `${92 + index * 16}px` }}
            >
              <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 max-w-[18ch] text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-[46ch] text-sm leading-relaxed opacity-80">
                    {item.desc}
                  </p>
                  <ul className="mt-7 flex list-none flex-wrap gap-2 p-0">
                    {item.badges.map((badge) => (
                      <li
                        key={badge}
                        className={`rounded-full px-3 py-1.5 text-[11px] font-medium ${
                          badgeTones[item.tone] ?? badgeTones.forest
                        }`}
                      >
                        {badge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div aria-hidden="true" className="relative hidden h-[220px] md:block">
                  <div className="absolute inset-0 rounded-[24px] border border-current/20" />
                  <div className="absolute inset-[12%] rounded-[20px] border border-current/15" />
                  <div className="absolute inset-[26%] rounded-[16px] border border-current/10" />
                  <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-current/15">
                    {index % 2 === 0 ? (
                      <Target className="h-6 w-6" strokeWidth={1.5} />
                    ) : (
                      <Layers className="h-6 w-6" strokeWidth={1.5} />
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
