import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function NotFound() {
  const dict = getDictionary(defaultLocale).notFound;

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        textAlign: "center",
        fontFamily: "'Inter Tight', Arial, sans-serif",
        color: "#024E46",
      }}
    >
      <span style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "0.04em" }}>
        Onda Social
      </span>
      <h1
        style={{
          marginTop: "32px",
          maxWidth: "720px",
          fontFamily: "'Goudy Bookletter 1911', serif",
          fontSize: "clamp(2.75rem, 8vw, 6rem)",
          lineHeight: 0.95,
          fontWeight: 400,
        }}
      >
        {dict.title}
      </h1>
      <p style={{ marginTop: "24px", maxWidth: "420px", fontSize: "15px", lineHeight: 1.6, opacity: 0.75 }}>
        {dict.body}
      </p>
      <Link
        href={`/${defaultLocale}`}
        style={{
          marginTop: "40px",
          display: "inline-flex",
          alignItems: "center",
          padding: "16px 28px",
          borderRadius: "999px",
          backgroundColor: "#024E46",
          color: "#FBFBDC",
          fontSize: "13px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        {dict.cta}
      </Link>
    </main>
  );
}
