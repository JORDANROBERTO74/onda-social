import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { isLocale, locales } from "@/i18n/config";
import { site } from "@/config/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#034f46",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
