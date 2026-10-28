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
          background: "#fbfbdc",
          color: "#101826",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "26px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            Onda
          </span>
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#109d75",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "920px",
            }}
          >
            {`${dict.hero.titleLead} ${dict.hero.titleEmphasis} ${dict.hero.titleTail}`}
          </div>
          <div style={{ fontSize: "22px", color: "#6a7381", maxWidth: "760px", lineHeight: 1.45 }}>
            {dict.meta.ogTagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #d8d8b8",
            paddingTop: "24px",
            fontSize: "15px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6a7381",
          }}
        >
          <span>{site.domain}</span>
          <span>{dict.footer.locations}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
