import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { constructMetadata } from "@/lib/seo";
import { buildJsonLd } from "@/lib/json-ld";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { WhyUs } from "@/components/why-us";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

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
    <main className="overflow-x-hidden">
      <Header content={dict.navigation} locale={locale as Locale} />
      <Hero content={dict.hero} />
      <About content={dict.about} />
      <Services content={dict.services} />
      <CaseStudies content={dict.work} />
      <WhyUs content={dict.why} />
      <Process content={dict.process} />
      <Pricing content={dict.pricing} />
      <Testimonials content={dict.testimonials} />
      <Faq content={dict.faq} />
      <Footer content={dict.footer} locale={locale as Locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale as Locale, dict)) }}
      />
    </main>
  );
}
