import Link from "next/link";
import {
  BarChart3,
  Camera,
  Heart,
  MessageCircle,
  Play,
  Share2,
} from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Arrow } from "@/components/arrow";

const outerChips = [
  { icon: Heart, angle: -60 },
  { icon: MessageCircle, angle: 20 },
  { icon: Play, angle: 110 },
  { icon: BarChart3, angle: 200 },
];

const innerChips = [
  { icon: Camera, angle: 60 },
  { icon: Share2, angle: 250 },
];

function polar(radius: number, angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.cos(rad)}%`,
    top: `${50 + radius * Math.sin(rad)}%`,
  };
}

export function Hero({ content }: Readonly<{ content: Dictionary["hero"] }>) {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40"
    >
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-cream px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest animate-rise">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
            {content.eyebrow}
          </p>

          <h1
            className="mt-7 max-w-[13ch] text-[clamp(2.75rem,6.4vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] animate-rise"
            style={{ animationDelay: "80ms" }}
          >
            {content.titleLead}{" "}
            <em className="font-serif font-normal italic text-forest pr-[0.14em]">
              {content.titleEmphasis}
            </em>{" "}
            {content.titleTail}
          </h1>

          <p
            className="mt-8 max-w-[46ch] text-base leading-relaxed text-slate animate-rise"
            style={{ animationDelay: "160ms" }}
          >
            {content.intro}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5"
            >
              {content.primaryCta}
              <Arrow />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-forest/5"
            >
              {content.secondaryCta}
            </Link>
          </div>

          <dl
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-7 animate-rise"
            style={{ animationDelay: "320ms" }}
          >
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="m-0">
                  <span className="block text-2xl font-semibold tracking-tight md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] uppercase leading-tight tracking-[0.12em] text-slate">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-forest/15"
          />
          <span
            aria-hidden="true"
            className="absolute inset-[16%] rounded-full border border-dashed border-forest/25"
          />

          <div
            aria-label={content.orbitLabel}
            role="img"
            className="absolute inset-0 animate-spin-slow [--spin-duration:52s]"
          >
            {outerChips.map(({ icon: Icon, angle }, index) => (
              <span
                key={`outer-${index}`}
                className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-forest/10 bg-cream shadow-[0_8px_24px_rgba(2,78,70,0.10)]"
                style={polar(46, angle)}
              >
                <Icon
                  className="h-4 w-4 animate-spin-reverse text-forest [--spin-duration:52s]"
                  strokeWidth={1.75}
                />
              </span>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-0 animate-spin-reverse [--spin-duration:38s]"
          >
            {innerChips.map(({ icon: Icon, angle }, index) => (
              <span
                key={`inner-${index}`}
                className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-forest/10 bg-mint/15"
                style={polar(28, angle)}
              >
                <Icon
                  className="h-3.5 w-3.5 animate-spin-slow text-forest [--spin-duration:38s]"
                  strokeWidth={1.75}
                />
              </span>
            ))}
          </div>

          <div className="absolute inset-[27%] flex flex-col items-center justify-center rounded-full bg-forest text-cream">
            <span className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] leading-none">
              onda
              <span className="text-mint">.</span>
            </span>
            <span className="mt-2 text-[9px] uppercase tracking-[0.28em] text-cream/60">
              social
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
