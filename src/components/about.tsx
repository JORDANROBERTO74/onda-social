import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function About({ content }: Readonly<{ content: Dictionary["about"] }>) {
  return (
    <section id="about" className="px-6 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="rounded-[40px] bg-forest px-7 py-14 text-cream md:rounded-[60px] md:px-16 md:py-20">
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-mint">
            {content.eyebrow}
          </p>

          <h2 className="mt-7 max-w-[20ch] font-serif text-[clamp(2rem,4.4vw,3.75rem)] font-normal leading-[1.05]">
            {content.statement}
          </h2>

          <div className="mt-12 grid gap-8 border-t border-cream/15 pt-10 md:grid-cols-2 md:gap-16">
            <p className="m-0 text-base leading-relaxed text-cream/85">{content.body}</p>
            <p className="m-0 text-base leading-relaxed text-cream/60">{content.secondary}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6">
            {content.images.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-forest/60"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 30vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
