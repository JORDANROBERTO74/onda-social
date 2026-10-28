import type { Dictionary } from "@/i18n/dictionaries/en";

export function Testimonials({
  content,
}: Readonly<{ content: Dictionary["testimonials"] }>) {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
          {content.eyebrow}
        </p>
        <h2 className="mt-5 max-w-[22ch] text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
          {content.title}
        </h2>

        <ul className="mt-12 grid list-none gap-5 p-0 md:grid-cols-3">
          {content.items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col justify-between rounded-[28px] bg-cream p-7 md:p-8"
            >
              <blockquote className="m-0 font-serif text-[clamp(1.15rem,1.7vw,1.4rem)] leading-[1.35]">
                “{item.quote}”
              </blockquote>
              <div className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-5">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-[11px] font-semibold text-forest"
                >
                  {item.initials}
                </span>
                <div>
                  <p className="m-0 text-sm font-semibold">{item.name}</p>
                  <p className="m-0 text-[11px] text-slate">{item.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
