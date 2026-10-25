import type { Metadata } from "next";
import { ContactActions } from "@/components/ContactActions";
import { PageIntro } from "@/components/PageIntro";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Tjänster – samtal, promenader och vardagshjälp",
  description:
    "Sällskap och lättare vardagshjälp i Säffle: samtal, promenader, aktiviteter, lättare hushållshjälp och vardagsplanering.",
  alternates: { canonical: "/tjanster" },
};

const services = [
  {
    id: "samtal",
    title: "Samtal och sällskap",
    lead: "Att ha någon att prata med gör skillnad för hela veckan.",
    examples: ["Fika och prata om stort och smått", "Läsa tidningen eller en bok tillsammans", "Spela kort, lösa korsord eller titta i fotoalbum"],
  },
  {
    id: "promenader",
    title: "Promenader",
    lead: "Frisk luft och rörelse i den takt som känns bra – med någon vid sidan.",
    examples: ["Promenad i närområdet eller längs Byälven", "Sällskap till torget eller parken", "Kortare rundor när vädret eller orken inte räcker till mer"],
  },
  {
    id: "aktiviteter",
    title: "Aktiviteter",
    lead: "Det är lättare att komma iväg när man inte behöver gå ensam.",
    examples: ["Sällskap till bibliotek, kyrka, föreningsträff eller loppis", "Handla tillsammans", "Ärenden på stan, till exempel posten eller banken"],
  },
  {
    id: "hushall",
    title: "Lättare hushållshjälp",
    lead: "Små sysslor som annars blir liggande.",
    examples: ["Vattna blommor och plocka undan", "Bära in varor och fylla på kylskåpet", "Diska, byta lakan eller byta en glödlampa"],
  },
  {
    id: "planering",
    title: "Vardagsplanering",
    lead: "Lite struktur gör det enklare att få vardagen att gå ihop.",
    examples: ["Skriva inköpslistor och veckoschema", "Påminna om och förbereda inför bokade tider", "Hjälp att komma igång med post, papper och mobil"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro title="Tjänster">
        <p>
          Besöken utgår från vad du vill göra. Samma timme kan rymma en promenad, en fika och ett ärende – vi
          anpassar innehållet efter dagsformen.
        </p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        <nav aria-label="Tjänster på sidan" className="mb-10">
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href={`#${service.id}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 font-bold text-spruce no-underline hover:bg-sage"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-rubrik`}
              className="rounded-2xl border border-line bg-paper p-6 sm:p-8"
            >
              <h2 id={`${service.id}-rubrik`} className="text-2xl font-semibold sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-2 text-lg">{service.lead}</p>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-ink-soft">
                {service.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section aria-labelledby="inte-rubrik" className="mt-12 rounded-2xl bg-sage p-6 sm:p-8">
          <h2 id="inte-rubrik" className="text-2xl font-semibold">
            Det här ingår inte
          </h2>
          <p className="mt-3">
            Säffle Vardagssällskap är en privat tjänst för sällskap och lättare vardagshjälp. Vi är inte kommunal
            hemtjänst och ersätter inte den. Vi utför ingen vård, personlig omvårdnad eller medicinsk hjälp, och vi
            hanterar inte läkemedel. Behöver du sådant stöd kan du vända dig till Säffle kommun eller vården.
          </p>
        </section>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Undrar du om något passar?</h2>
          <p className="mt-2 text-ink-soft">Fråga hellre en gång för mycket. Vi svarar ärligt om det är något vi kan hjälpa till med.</p>
          <ContactActions className="mt-6" />
        </div>
      </div>
    </>
  );
}
