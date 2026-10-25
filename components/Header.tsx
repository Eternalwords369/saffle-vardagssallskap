import Link from "next/link";
import { site } from "@/lib/site";
import { container } from "@/lib/ui";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { PhoneIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className={`${container} relative flex min-h-18 items-center justify-between gap-4 py-2`}>
        <Link href="/" className="flex flex-col leading-tight text-ink no-underline">
          <span className="font-serif text-xl font-semibold">Säffle Vardagssällskap</span>
          <span className="text-sm text-ink-soft">Sällskap och vardagshjälp</span>
        </Link>

        <div className="flex items-center gap-3">
          <DesktopNav />
          <a
            href={site.phone.href}
            className="hidden min-h-12 items-center gap-2 rounded-xl bg-spruce px-4 font-bold text-paper no-underline hover:bg-spruce-dark lg:inline-flex"
          >
            <PhoneIcon />
            {site.phone.display}
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
