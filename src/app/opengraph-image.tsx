import { ImageResponse } from "next/og";

export const alt = "Alejandro Orihuela — Software Engineer & HCI Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tiles = [
  { code: "RES.01", label: "Andean Transit HCI Research" },
  { code: "PRJ.04", label: "Record Organizer · Live" },
  { code: "PRJ.01", label: "PKI Digital Signature" },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f4f5",
          padding: 56,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#ffffff",
            border: "1px solid #e4e4e7",
            borderRadius: 32,
            padding: 48,
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 20,
              color: "#71717a",
              letterSpacing: 3,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 12, height: 12, background: "#ea580c", borderRadius: 3 }} />
              SYS.01
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#15803d" }}>
              <div style={{ width: 12, height: 12, background: "#16a34a", borderRadius: 999 }} />
              SEEKING SUMMER 2027 INTERNSHIPS
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 48,
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -3,
              color: "#111113",
              lineHeight: 1.02,
            }}
          >
            Alejandro Orihuela
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 34, color: "#52525b" }}>
            Software Engineer & HCI Researcher · University of Chicago
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: "auto" }}>
            {tiles.map((t) => (
              <div
                key={t.code}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e4e4e7",
                  background: "#f4f4f5",
                  borderRadius: 18,
                  padding: "16px 22px",
                }}
              >
                <div style={{ display: "flex", fontSize: 16, color: "#c2410c", letterSpacing: 2 }}>
                  {t.code}
                </div>
                <div style={{ display: "flex", fontSize: 22, color: "#111113", marginTop: 4 }}>
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
