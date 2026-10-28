import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { Arrow } from "@/components/arrow";

export function Footer({
  content,
  locale,
}: Readonly<{
  content: Dictionary["footer"];
  locale: Locale;
}>) {
  return (
    <footer
      id="contact"
      className="mt-8 rounded-t-[40px] bg-forest px-6 pb-8 pt-16 text-cream md:rounded-t-[60px] md:px-10 md:pt-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-mint">
          {content.eyebrow}
        </p>

        <h2 className="mt-6 max-w-[18ch] font-serif text-[clamp(2.25rem,6vw,5rem)] font-normal leading-[0.98]">
          {content.title}
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${content.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-4 text-sm font-semibold text-forest transition-transform duration-200 hover:-translate-y-0.5"
          >
            {content.email}
            <Arrow />
          </a>
          <span className="text-sm text-cream/60">{content.locations}</span>
        </div>

        <div className="mt-16 grid gap-10 border-t border-cream/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href={`/${locale}`}
            className="text-xl font-semibold tracking-tight text-cream"
          >
            {content.brand}
            <span className="text-mint">.</span>
          </Link>

          {content.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50">
                {column.title}
              </h3>
              <ul className="mt-4 flex list-none flex-col gap-2.5 p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/80 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label={content.socials.map((social) => social.label).join(", ")}>
            <h3 className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50">
              Social
            </h3>
            <ul className="mt-4 flex list-none flex-col gap-2.5 p-0">
              {content.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-[11px] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">{content.copyright}</p>
          <p className="m-0">{content.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
