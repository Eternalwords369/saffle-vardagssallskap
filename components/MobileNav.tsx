"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import { buttonPrimary } from "@/lib/ui";
import { PhoneIcon } from "./icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-spruce px-4 font-bold text-spruce hover:bg-sage"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>Meny</span>
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <nav
        id={menuId}
        aria-label="Huvudmeny"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-paper shadow-lg"
      >
        <ul className="mx-auto flex max-w-5xl flex-col px-4 py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-lg font-bold text-ink no-underline hover:bg-sage aria-[current=page]:text-spruce aria-[current=page]:underline aria-[current=page]:decoration-clay aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 pb-2">
            <a href={site.phone.href} className={`${buttonPrimary} w-full`}>
              <PhoneIcon />
              Ring {site.phone.display}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
