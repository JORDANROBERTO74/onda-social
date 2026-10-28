import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Arrow } from "@/components/arrow";

export default function NotFound() {
  const dict = getDictionary(defaultLocale).notFound;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="text-xl font-semibold tracking-tight">
        Onda<span className="text-mint">.</span>
      </span>
      <h1 className="mt-8 max-w-2xl font-serif text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]">
        {dict.title}
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-slate">{dict.body}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-4 text-xs font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5"
      >
        {dict.cta}
        <Arrow />
      </Link>
    </main>
  );
}
