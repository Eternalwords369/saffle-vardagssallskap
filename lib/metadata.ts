import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "sv_SE", siteName: site.name, title, description, url: path },
  };
}
