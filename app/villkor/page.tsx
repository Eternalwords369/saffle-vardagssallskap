import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { PriceNote } from "@/components/PriceNote";
import { container, textLink } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Villkor",
  description: "Preliminära villkor för abonnemang hos Säffle Vardagssällskap.",
  alternates: { canonical: "/villkor" },
};

// BEKRÄFTA: Hela sidan är ett utkast. Fastställ moms, resekostnader,
// avtalsperiod, uppsägning och avbokning och ersätt texten innan lansering.

export default function TermsPage() {
  return (
    <>
      <PageIntro title="Villkor">
        <p>Villkoren är under arbete. Här är det som gäller redan nu och det som återstår att bestämma.</p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        <div className="max-w-3xl space-y-10 text-lg">
          <PriceNote />

          <section aria-labelledby="redan-nu">
            <h2 id="redan-nu" className="text-2xl font-semibold">
              Det här gäller redan nu
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Det kostar ingenting att ringa eller skicka en förfrågan, och du förbinder dig inte till något.</li>
              <li>Inget avtal gäller förrän du har fått pris och villkor skriftligt och tackat ja.</li>
              <li>
                Tjänsten omfattar sällskap och lättare vardagshjälp. Den omfattar inte vård, personlig omvårdnad,
                medicinsk hjälp eller hantering av läkemedel, och den är inte kommunal hemtjänst.
              </li>
            </ul>
          </section>

          <section aria-labelledby="konsument">
            <h2 id="konsument" className="text-2xl font-semibold">
              Dina rättigheter som konsument
            </h2>
            <p className="mt-3">
              Som privatperson har du alltid de rättigheter som följer av konsumentlagstiftningen. Om ett avtal ingås
              på distans eller utanför vår affärslokal har du normalt 14 dagars ångerrätt enligt lagen om
              distansavtal och avtal utanför affärslokaler.
            </p>
          </section>

          <p className="text-base text-ink-soft">
            Läs också hur vi hanterar <Link href="/integritet" className={textLink}>personuppgifter</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
