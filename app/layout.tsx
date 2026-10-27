import type { Metadata, Viewport } from "next";
import { Literata, Source_Sans_3 } from "next/font/google";
import { CallBar } from "@/components/CallBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const heading = Literata({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – sällskap och vardagshjälp i Säffle`,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  keywords: [
    "sällskap Säffle",
    "vardagshjälp Säffle",
    "promenadsällskap Säffle",
    "hushållshjälp Säffle",
    "RUT Säffle",
    "sällskap äldre Värmland",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    title: `${site.name} – sällskap och vardagshjälp i Säffle`,
    description: site.shortDescription,
    url: "/",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#2e4a3d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${body.variable} ${heading.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-20 md:pb-0">
        <a
          href="#innehall"
          className="sr-only z-50 rounded-xl bg-spruce px-5 py-3 font-bold text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Hoppa till innehållet
        </a>
        <Header />
        <main id="innehall" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <CallBar />
        <JsonLd />
      </body>
    </html>
  );
}
