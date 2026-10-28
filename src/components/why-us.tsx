import { Compass, LineChart, Sparkles, Users } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";

const icons = [Compass, Sparkles, LineChart, Users];

export function WhyUs({ content }: Readonly<{ content: Dictionary["why"] }>) {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
          {content.eyebrow}
        </p>
        <h2 className="mt-5 max-w-[22ch] text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
          {content.title}
        </h2>

        <ul className="mt-12 grid list-none gap-5 p-0 md:grid-cols-2">
          {content.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <li
                key={item.title}
                className="rounded-[28px] border border-ink/8 bg-cream p-7 md:p-9"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mint/15 text-forest">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-slate">{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
