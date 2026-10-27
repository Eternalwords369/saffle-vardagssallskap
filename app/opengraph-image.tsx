import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – sällskap och vardagshjälp i Säffle`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f7f3ec",
          color: "#23201c",
        }}
      >
        <div style={{ fontSize: 36, color: "#a14f30", fontWeight: 700 }}>{site.area}</div>
        <div style={{ fontSize: 84, fontWeight: 700, color: "#2e4a3d", marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 24 }}>Promenader, ärenden, fika och lättare sysslor hemma.</div>
        <div style={{ fontSize: 44, fontWeight: 700, marginTop: 48 }}>{`Ring ${site.phone.display}`}</div>
      </div>
    ),
    size,
  );
}
