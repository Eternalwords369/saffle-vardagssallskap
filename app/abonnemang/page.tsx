import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { PlanCard } from "@/components/PlanCard";
import { PriceNote } from "@/components/PriceNote";
import { PhoneIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";
import { afterRut, formatPrice, plans, pricing, site, type Plan } from "@/lib/site";
import { buttonPrimary, buttonSecondary, container, textLink } from "@/lib/ui";

export const metadata: Metadata = pageMetadata(
  "/abonnemang",
  "Abonnemang och priser",
  `Månadspaket för sällskap och vardagshjälp i Säffle: 4, 8 eller 12 timmar i månaden. Priser inklusive moms, RUT-avdrag där det gäller. Social aktivitet ${pricing.social.hourly} kr/timme.`,
);

const rows = [
  { label: "Timmar per månad", value: (p: Plan) => `${p.hoursPerMonth} h` },
  { label: "Besök per månad", value: (p: Plan) => `${p.visitsPerMonth} à ${pricing.visitHours} h` },
  { label: "Pris inkl. moms", value: (p: Plan) => formatPrice(p.price) },
  { label: "Efter RUT, om all tid ger RUT", value: (p: Plan) => formatPrice(afterRut(p.price)) },
  { label: "Per timme efter RUT", value: (p: Plan) => formatPrice(afterRut(p.price) / p.hoursPerMonth) },
];

export default function PlansPage() {
  const { social } = pricing;

  return (
    <>
      <PageIntro title="Abonnemang">
        <p>
          Välj hur många timmar du vill ha i månaden. Besöken är normalt {pricing.visitHours} timmar, på samma dag
          och tid. Vad ni gör bestämmer du.
        </p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <section aria-labelledby="social-rubrik" className="mt-8 rounded-2xl border-2 border-line bg-paper p-6 sm:p-8">
          <h2 id="social-rubrik" className="text-2xl font-semibold">
            {social.name} – sällskap utan RUT
          </h2>
          <p className="mt-3">
            <span className="font-serif text-3xl font-semibold">{formatPrice(social.hourly)}</span>
            <span className="text-ink-soft"> / timme inkl. moms, minst {social.minHours} timmar</span>
          </p>
          <p className="mt-3 max-w-2xl text-ink-soft">
            För dig som vill ha sällskap till kyrkkaffet, en konsert eller en loppisrunda, utan fast abonnemang. Ger
            inte RUT-avdrag. Biljetter och fika betalar du själv.
          </p>
          <Link href={`/kontakt?paket=${social.id}#forfragan`} className={`${buttonSecondary} mt-6`}>
            Fråga om {social.name.toLowerCase()}
          </Link>
        </section>

        <section aria-labelledby="jamfor-rubrik" className="mt-14">
          <h2 id="jamfor-rubrik" className="text-3xl font-semibold">
            Jämför paketen
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-paper" tabIndex={0} role="region" aria-labelledby="jamfor-rubrik">
            <table className="w-full min-w-[34rem] text-left">
              <thead>
                <tr className="border-b border-line">
                  <td className="p-4" />
                  {plans.map((plan) => (
                    <th key={plan.id} scope="col" className="p-4 font-serif text-xl font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="p-4 font-bold">
                      {row.label}
                    </th>
                    {plans.map((plan) => (
                      <td key={plan.id} className="p-4 whitespace-nowrap">
                        {row.value(plan)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10">
          <PriceNote />
        </div>

        <section aria-labelledby="valja-rubrik" className="mt-14">
          <h2 id="valja-rubrik" className="text-2xl font-semibold">
            Osäker på vilket paket som passar?
          </h2>
          <p className="mt-2 text-ink-soft">
            Ring eller skicka ett sms, så hjälper vi dig att välja. Det går bra att börja i det minsta och byta senare.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={site.phone.href} className={buttonPrimary}>
              <PhoneIcon />
              Ring {site.phone.display}
            </a>
            <a href={site.phone.sms} className={buttonSecondary}>
              Skicka sms
            </a>
            <Link href="/kontakt#forfragan" className={buttonSecondary}>
              Skicka en förfrågan
            </Link>
          </div>
          <p className="mt-6">
            Se även <Link href="/villkor" className={textLink}>villkoren</Link> och{" "}
            <Link href="/#vanliga-fragor" className={textLink}>vanliga frågor</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
