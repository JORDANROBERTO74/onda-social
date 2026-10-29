import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { CopyProvider } from "@/i18n/copy-context";
import { constructMetadata } from "@/lib/seo";
import { buildJsonLd } from "@/lib/json-ld";
import Header from "@/components/sections/header";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import CaseStudy from "@/components/sections/case-studies";
import Whychooseus from "@/components/sections/why-us";
import Process from "@/components/sections/process";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale as Locale);
  return constructMetadata({
    locale: locale as Locale,
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);

  return (
    <CopyProvider dict={dict}>
      <main className="min-h-screen overflow-x-hidden bg-[#f6f5f2] text-[#20221f]">
        <Header />
        <About />
        <Services />
        <CaseStudy />
        <Whychooseus />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale as Locale, dict)) }}
        />
      </main>
    </CopyProvider>
  );
}
