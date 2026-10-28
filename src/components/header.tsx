"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { Arrow } from "@/components/arrow";
import { LocaleSwitcher } from "@/components/locale-switcher";

export function Header({
  content,
  locale,
}: Readonly<{
  content: Dictionary["navigation"];
  locale: Locale;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const links = [
    { label: content.links.services, href: "#services" },
    { label: content.links.work, href: "#work" },
    { label: content.links.process, href: "#process" },
    { label: content.links.pricing, href: "#pricing" },
    { label: content.links.faq, href: "#faq" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isOpen
          ? "border-b border-ink/10 bg-cream"
          : scrolled
            ? "border-b border-ink/10 bg-cream/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link href={`/${locale}`} className="text-xl font-semibold tracking-tight">
          {content.brand}
          <span className="text-mint">.</span>
        </Link>

        <nav aria-label={content.links.services} className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-ink/80 transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-forest px-5 py-2.5 text-[13px] font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5"
          >
            {content.cta}
            <Arrow />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? content.closeMenu : content.openMenu}
          className="-mr-2 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span aria-hidden="true" className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-transform duration-300 ${
                isOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-ink transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-transform duration-300 ${
                isOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-ink/10 px-6 pb-8 pt-6 lg:hidden"
        >
          <nav aria-label={content.links.services} className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-7 flex items-center justify-between border-t border-ink/10 pt-5">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-full bg-forest px-5 py-2.5 text-[13px] font-semibold text-cream"
            >
              {content.cta}
              <Arrow />
            </Link>
            <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          </div>
        </div>
      )}
    </header>
  );
}
