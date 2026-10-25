import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { buttonPrimary, buttonSecondary, container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Sidan finns inte",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className={`${container} py-16 sm:py-24`}>
      <h1 className="text-4xl font-semibold">Sidan finns inte</h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">
        Länken kan vara felskriven eller gammal. Gå till startsidan eller ring oss, så hjälper vi dig.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonPrimary}>
          Till startsidan
        </Link>
        <a href={site.phone.href} className={buttonSecondary}>
          Ring {site.phone.display}
        </a>
      </div>
    </div>
  );
}
