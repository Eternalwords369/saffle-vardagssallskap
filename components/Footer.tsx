import Link from "next/link";
import { nav, site } from "@/lib/site";
import { container } from "@/lib/ui";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-spruce-dark text-paper">
      <div className={`${container} grid gap-10 py-12 sm:grid-cols-3`}>
        <div>
          <p className="font-serif text-xl font-semibold">{site.name}</p>
          <p className="mt-2 text-paper/85">
            Sällskap och lättare vardagshjälp i {site.area}.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-base font-bold">Kontakt</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={site.phone.href} className="text-paper underline underline-offset-4 hover:decoration-clay-soft">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-paper underline underline-offset-4 hover:decoration-clay-soft">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-base font-bold">Sidor</h2>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper underline underline-offset-4 hover:decoration-clay-soft">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/integritet" className="text-paper underline underline-offset-4 hover:decoration-clay-soft">
                Integritet
              </Link>
            </li>
            <li>
              <Link href="/villkor" className="text-paper underline underline-offset-4 hover:decoration-clay-soft">
                Villkor
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/20">
        <p className={`${container} py-5 text-sm text-paper/85`}>
          Säffle Vardagssällskap är en privat tjänst för sällskap och vardagshjälp. Vi är inte kommunal
          hemtjänst och utför ingen vård eller medicinsk behandling.
        </p>
      </div>
    </footer>
  );
}
