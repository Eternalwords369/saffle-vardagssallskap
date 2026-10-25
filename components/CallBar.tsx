import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

// Fast åtgärdsrad längst ned på mobilen så att det alltid är ett tryck bort
// att ringa eller skicka en förfrågan.
export function CallBar() {
  return (
    <aside aria-label="Snabbkontakt" className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phone.href}
          className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-spruce font-bold text-paper no-underline"
        >
          <PhoneIcon />
          Ring oss
        </a>
        <Link
          href="/kontakt#forfragan"
          className="inline-flex min-h-13 items-center justify-center rounded-xl border-2 border-spruce bg-paper font-bold text-spruce no-underline"
        >
          Skicka förfrågan
        </Link>
      </div>
    </aside>
  );
}
