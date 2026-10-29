import { ImageResponse } from "next/og";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? (locale as Locale) : "en";
  const dict = getDictionary(currentLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#FBFBDC",
          color: "#024E46",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "28px",
              height: "26px",
              background: "#024E46",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          />
          <span style={{ fontSize: "26px", fontWeight: 500, letterSpacing: "-0.01em" }}>
            Onda Social
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontFamily: "serif",
              fontSize: "76px",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.02,
              maxWidth: "940px",
            }}
          >
            {dict.header.heroTitle}
          </div>
          <div style={{ fontSize: "22px", color: "#3F6B61", maxWidth: "780px", lineHeight: 1.45 }}>
            {dict.meta.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(2, 78, 70, 0.25)",
            paddingTop: "24px",
            fontSize: "15px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#3F6B61",
          }}
        >
          <span>{site.domain}</span>
          <span>{dict.footer.address}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
