import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Arrow, Check } from "@/components/arrow";

export function Pricing({ content }: Readonly<{ content: Dictionary["pricing"] }>) {
  return (
    <section id="pricing" className="px-6 py-16 md:px-10 md:py-24">
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
          <p className="m-0 max-w-[36ch] text-sm leading-relaxed text-slate">{content.aside}</p>
        </div>

        <ul className="mt-12 grid list-none gap-5 p-0 md:grid-cols-3">
          {content.plans.map((plan) => (
            <li
              key={plan.name}
              className={`flex flex-col rounded-[32px] p-7 md:p-9 ${
                plan.featured
                  ? "bg-forest text-cream"
                  : "border border-ink/10 bg-cream text-ink"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="m-0 text-lg font-semibold">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-mint px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-forest">
                    Popular
                  </span>
                )}
              </div>

              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.featured ? "text-cream/70" : "text-slate"
                }`}
              >
                {plan.description}
              </p>

              <p className="mt-7 flex items-baseline gap-1.5">
                <span className="text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-none tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`text-xs ${plan.featured ? "text-cream/60" : "text-slate"}`}
                >
                  {plan.period}
                </span>
              </p>

              <ul className="mt-7 flex list-none flex-col gap-3 p-0">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.featured ? "bg-mint text-forest" : "bg-mint/15 text-forest"
                      }`}
                    >
                      <Check />
                    </span>
                    <span className={plan.featured ? "text-cream/85" : "text-ink/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
                  plan.featured ? "bg-cream text-forest" : "bg-forest text-cream"
                }`}
              >
                {plan.cta}
                <Arrow />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[11px] text-slate">{content.note}</p>
      </div>
    </section>
  );
}
