"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/i18n/config";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/en";
  const current = pathname.split("/")[1];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {locales.map((locale) => {
        const rest = pathname.slice(current.length + 1) || "";
        const href = `/${locale}${rest}`;
        const active = locale === current;

        return (
          <Link
            key={locale}
            href={href}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            style={{
              fontFamily: "'Inter Tight', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#024E46",
              opacity: active ? 1 : 0.45,
              padding: "4px 2px",
            }}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
