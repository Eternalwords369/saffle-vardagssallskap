import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { PlanCard } from "@/components/PlanCard";
import { faq, notIncluded, plans, services, site, trust } from "@/lib/site";
import { container, textLink } from "@/lib/ui";

const steps = [
  { title: "Ring eller skicka en förfrågan", text: "Berätta kort vad du eller din anhörige vill ha hjälp med." },
  { title: "Vi träffas hemma hos dig", text: "Vi går igenom önskemål, dagar och tider och ser om vi passar ihop." },
  { title: "Fasta besök", text: "Du väljer paket och får en återkommande tid att se fram emot." },
];

export default function Home() {
  return (
    <>
      <section className="bg-paper">
        <div className={`${container} grid gap-10 py-12 sm:py-16 md:grid-cols-[1.2fr_1fr] md:items-center`}>
          <div>
            <p className="font-bold text-clay">{site.area}</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl md:text-6xl">
              Någon som kommer på bestämd tid – och har tid att stanna.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">
              Promenader, ärenden, fika och lättare sysslor hemma, med samma person varje gång. För dig som bor hemma i
              Säffle, eller för dig som vill att din förälder ska få det.
            </p>
            <ContactActions className="mt-8" />
          </div>

          <figure className="rounded-2xl border border-line bg-linen p-6 sm:p-8" aria-labelledby="exempel-manad">
            <figcaption id="exempel-manad" className="font-bold">
              Så kan två besök se ut
            </figcaption>
            <ol className="mt-4 divide-y divide-line">
              <li className="py-4">
                <p className="text-sm font-bold text-clay">Tisdag 10.00–12.00</p>
                <p className="mt-1 font-serif text-xl">Promenad längs Byälven och handla på vägen hem</p>
              </li>
              <li className="py-4">
                <p className="text-sm font-bold text-clay">Tisdagen efter, 10.00–12.00</p>
                <p className="mt-1 font-serif text-xl">Byta lakan, sätta på en tvätt och fika vid köksbordet</p>
              </li>
            </ol>
            <p className="mt-2 text-sm text-ink-soft">Exempel ur paketet Vardag: fyra besök à två timmar i månaden.</p>
          </figure>
        </div>
      </section>

      <section className={`${container} py-14 sm:py-20`} aria-labelledby="trygghet-rubrik">
        <h2 id="trygghet-rubrik" className="text-3xl font-semibold sm:text-4xl">
          Det här kan du räkna med
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sage" aria-labelledby="gor-rubrik">
        <div className={`${container} py-14 sm:py-20`}>
          <h2 id="gor-rubrik" className="text-3xl font-semibold sm:text-4xl">
            Det här gör vi – och det här gör vi inte
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-paper p-6 sm:p-8">
              <h3 className="text-2xl font-semibold">Det gör vi</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {services.flatMap((group) => group.items).map((item) => (
                  <li key={item.title}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-clay/40 bg-clay-soft p-6 sm:p-8">
              <h3 className="text-2xl font-semibold">Det gör vi inte</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {notIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6">
            <Link href="/tjanster" className={textLink}>
              Se exempel och vart du vänder dig för annat
            </Link>
          </p>
        </div>
      </section>

      <section className={`${container} py-14 sm:py-20`} aria-labelledby="sa-fungerar-rubrik">
        <h2 id="sa-fungerar-rubrik" className="text-3xl font-semibold sm:text-4xl">
          Så kommer du igång
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-spruce font-serif text-xl font-semibold text-paper"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-1 text-ink-soft">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper" aria-labelledby="paket-rubrik">
        <div className={`${container} py-14 sm:py-20`}>
          <h2 id="paket-rubrik" className="text-3xl font-semibold sm:text-4xl">
            Tre månadspaket
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Samma dag och tid, ett fast månadspris inklusive moms. RUT-avdrag gäller bara för den tid som ger rätt till
            det.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} headingLevel="h3" />
            ))}
          </div>
          <p className="mt-6">
            <Link href="/abonnemang" className={textLink}>
              Jämför paketen och läs om RUT
            </Link>
          </p>
        </div>
      </section>

      <section id="vanliga-fragor" className={`${container} scroll-mt-24 py-14 sm:py-20`} aria-labelledby="fragor-rubrik">
        <h2 id="fragor-rubrik" className="text-3xl font-semibold sm:text-4xl">
          Vanliga frågor
        </h2>
        <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-paper">
          {faq.map((item) => (
            <details key={item.q} className="group p-5 sm:p-6">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="text-2xl text-spruce transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-spruce text-paper" aria-labelledby="kontakt-rubrik">
        <div className={`${container} py-14 sm:py-16`}>
          <h2 id="kontakt-rubrik" className="text-3xl font-semibold sm:text-4xl">
            Vill du veta mer?
          </h2>
          <p className="mt-3 max-w-xl text-lg text-paper/90">
            Ring och prata en stund, så berättar vi hur det fungerar. Du förbinder dig inte till något genom att höra av
            dig.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phone.href}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-paper px-6 py-3 font-bold text-spruce no-underline hover:bg-clay-soft"
            >
              Ring {site.phone.display}
            </a>
            <Link
              href="/kontakt#forfragan"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-paper px-6 py-3 font-bold text-paper no-underline hover:bg-spruce-dark"
            >
              Skicka förfrågan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
