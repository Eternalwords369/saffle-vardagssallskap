import type { Metadata } from "next";
import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { PageIntro } from "@/components/PageIntro";
import { PendingTerms } from "@/components/PendingTerms";
import { PlanCard } from "@/components/PlanCard";
import { plans } from "@/lib/site";
import { container, textLink } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Abonnemang och priser",
  description:
    "Tre abonnemang för sällskap och vardagshjälp i Säffle: Lilla stunden, Vardagssällskap och Aktiv vardag. Fast tid varje vecka och fast månadspris.",
  alternates: { canonical: "/abonnemang" },
};

const faq = [
  {
    q: "Varför abonnemang?",
    a: "För att det blir en vana. Samma dag och tid varje vecka gör det lättare att planera, och besöken blir något att se fram emot.",
  },
  {
    q: "Kan vi dela upp timmarna?",
    a: "Ja, i paketen med två och tre timmar kan tiden delas på flera besök i veckan. Vi bestämmer upplägget tillsammans.",
  },
  {
    q: "Kan en anhörig beställa?",
    a: "Ja, det går bra att ett barn, barnbarn eller en vän hör av sig. Vi vill alltid träffa och prata med den som ska få besöken, så att hen själv vill ha dem.",
  },
  {
    q: "Kan jag byta paket?",
    a: "Tanken är att du ska kunna byta när behoven ändras. Hur och när det kan ske står i villkoren du får innan avtal.",
  },
];

export default function PlansPage() {
  return (
    <>
      <PageIntro title="Abonnemang">
        <p>Välj hur mycket tid du vill ha varje vecka. Innehållet i besöken bestämmer du.</p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-10">
          <PendingTerms />
        </div>

        <section aria-labelledby="fragor-rubrik" className="mt-14">
          <h2 id="fragor-rubrik" className="text-3xl font-semibold">
            Vanliga frågor
          </h2>
          <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-paper">
            {faq.map((item) => (
              <details key={item.q} className="group p-5 sm:p-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="text-2xl text-spruce transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6">
            Se även <Link href="/om-oss#sa-fungerar-det" className={textLink}>hur det fungerar</Link>.
          </p>
        </section>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold">Osäker på vilket paket som passar?</h2>
          <p className="mt-2 text-ink-soft">Ring, så hjälper vi dig att välja. Det är helt okej att börja i det mindre.</p>
          <ContactActions className="mt-6" />
        </div>
      </div>
    </>
  );
}
