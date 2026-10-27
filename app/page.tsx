import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { PlanCard } from "@/components/PlanCard";
import { plans, site } from "@/lib/site";
import { container, textLink } from "@/lib/ui";

const services = [
  { title: "Samtal och fika", text: "Någon att prata med över en kopp kaffe, läsa tidningen med eller spela ett parti kort." },
  { title: "Promenader", text: "En runda i den takt som passar – längs Byälven, till torget eller bara runt kvarteret." },
  { title: "Aktiviteter", text: "Sällskap till biblioteket, kyrkkaffet, en loppis eller ett ärende på stan." },
  { title: "Lättare hushållshjälp", text: "Vattna blommor, bära in varor, byta en glödlampa eller hjälpa till med disken." },
  { title: "Vardagsplanering", text: "Skriva inköpslista, hålla ordning på veckans tider och komma igång med det som skjutits upp." },
];

const steps = [
  { title: "Ring eller skicka en förfrågan", text: "Berätta kort vad du eller din anhörige vill ha hjälp med." },
  { title: "Vi pratar och träffas", text: "Vi går igenom önskemål, dagar och tider och ser om vi passar ihop." },
  { title: "Fasta besök varje vecka", text: "Du väljer paket och får en återkommande tid att se fram emot." },
];

export default function Home() {
  return (
    <>
      <section className="bg-paper">
        <div className={`${container} grid gap-10 py-12 sm:py-16 md:grid-cols-[1.2fr_1fr] md:items-center`}>
          <div>
            <p className="font-bold text-clay">Säffle med omnejd</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl md:text-6xl">
              Ett fast besök i veckan. Någon som kommer, och stannar en stund.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">
              Säffle Vardagssällskap erbjuder sällskap och lättare vardagshjälp som abonnemang – för dig som
              bor hemma och vill ha mer liv i veckan, eller för dig som vill att din förälder får det.
            </p>
            <ContactActions className="mt-8" />
          </div>

          <figure className="rounded-2xl border border-line bg-linen p-6 sm:p-8" aria-labelledby="exempel-vecka">
            <figcaption id="exempel-vecka" className="font-bold">
              Så kan en vecka se ut
            </figcaption>
            <ol className="mt-4 divide-y divide-line">
              <li className="py-4">
                <p className="text-sm font-bold text-clay">Tisdag 10.00</p>
                <p className="mt-1 font-serif text-xl">Promenad längs Byälven och fika efteråt</p>
              </li>
              <li className="py-4">
                <p className="text-sm font-bold text-clay">Fredag 14.00</p>
                <p className="mt-1 font-serif text-xl">Handla till helgen och skriva veckans lista</p>
              </li>
            </ol>
            <p className="mt-2 text-sm text-ink-soft">Exempel ur paketet Vardagssällskap, två timmar per vecka.</p>
          </figure>
        </div>
      </section>

      <section className={`${container} py-14 sm:py-20`} aria-labelledby="tjanster-rubrik">
        <h2 id="tjanster-rubrik" className="text-3xl font-semibold sm:text-4xl">
          Det här kan vi göra tillsammans
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-ink-soft">{service.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/tjanster" className={textLink}>
            Läs mer om tjänsterna
          </Link>
        </p>
      </section>

      <section className="bg-sage" aria-labelledby="sa-fungerar-rubrik">
        <div className={`${container} py-14 sm:py-20`}>
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
        </div>
      </section>

      <section className={`${container} py-14 sm:py-20`} aria-labelledby="paket-rubrik">
        <h2 id="paket-rubrik" className="text-3xl font-semibold sm:text-4xl">
          Tre abonnemang
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">
          Samma dag och tid, ett fast månadspris inklusive moms. RUT-avdrag för den tid som ger rätt till det.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} headingLevel="h3" />
          ))}
        </div>
        <p className="mt-6">
          <Link href="/abonnemang" className={textLink}>
            Jämför paketen och läs om villkoren
          </Link>
        </p>
      </section>

      <section className="bg-spruce text-paper" aria-labelledby="kontakt-rubrik">
        <div className={`${container} py-14 sm:py-16`}>
          <h2 id="kontakt-rubrik" className="text-3xl font-semibold sm:text-4xl">
            Vill du veta mer?
          </h2>
          <p className="mt-3 max-w-xl text-lg text-paper/90">
            Ring och prata en stund, så berättar vi hur det fungerar. Du förbinder dig inte till något genom att
            höra av dig.
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
              Skicka en förfrågan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
