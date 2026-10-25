"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Huvudmeny" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="rounded-lg px-3 py-2 font-bold text-ink no-underline hover:bg-sage aria-[current=page]:text-spruce aria-[current=page]:underline aria-[current=page]:decoration-clay aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
