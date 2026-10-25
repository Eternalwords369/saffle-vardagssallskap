import Link from "next/link";
import { site } from "@/lib/site";
import { buttonPrimary, buttonSecondary } from "@/lib/ui";
import { PhoneIcon } from "./icons";

export function ContactActions({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a href={site.phone.href} className={buttonPrimary}>
        <PhoneIcon />
        Ring {site.phone.display}
      </a>
      <Link href="/kontakt#forfragan" className={buttonSecondary}>
        Skicka en förfrågan
      </Link>
    </div>
  );
}
