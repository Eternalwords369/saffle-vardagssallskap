import type { Metadata } from "next";
import Image from "next/image";
import { ContactActions } from "@/components/ContactActions";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";
import { owner, site } from "@/lib/site";
import { container } from "@/lib/ui";

export const metadata: Metadata = pageMetadata(
  "/om-oss",
  "Om oss och hur det fungerar",
  "Säffle Vardagssällskap drivs av en person som bor i Säffle. Så fungerar det från första samtalet till fasta besök, och de gränser vi alltid håller.",
);

const steps = [
  {
    title: "Första kontakten",
    text: "Du ringer eller skickar en förfrågan. Vi pratar en stund om vad du eller din anhörige önskar och vilka dagar som passar.",
  },
  {
    title: "Vi träffas",
    text: "Jag kommer hem till dig så att vi kan lära känna varandra innan något bestäms. Det är du som ska känna dig trygg och vilja ha besöken.",
  },
  {
    title: "Pris och villkor skriftligt",
    text: "Du får paket, pris inklusive moms och vilken tid som ger RUT skriftligt. Inget gäller förrän du har sagt ja.",
  },
  {
    title: "Fasta besök",
    text: "Samma dag och tid. Innehållet följer dagsformen – en promenad ena gången, ett ärende och en tvätt nästa.",
  },
  {
    title: "Vi stämmer av",
    text: "Efter första månaden frågar jag hur det går och om något ska ändras. Behoven förändras, och upplägget ska följa med.",
  },
];

const boundaries = [
  "Du bestämmer. Du kan säga nej till ett förslag, ett besök eller hela tjänsten, utan att förklara varför.",
  "Jag kommer på avtalad tid och hör av mig i god tid om något ändras.",
  "Jag rör aldrig pengar, kort, koder eller BankID och har inga nycklar till ditt hem.",
  "Det du berättar stannar mellan oss. Anhöriga får bara veta det du har sagt ja till.",
  "Jag gör inget som inte går att göra säkert för oss båda, som lyft eller att stå på stegar.",
  "Ser jag att du behöver mer hjälp än jag kan ge säger jag det rakt, och tipsar om vart du kan vända dig.",
];

export default function AboutPage() {
  return (
    <>
      <PageIntro title="Om oss">
        <p>En lokal tjänst i Säffle, för de stunder i veckan som blir lite för tysta.</p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        <section aria-labelledby="vem-rubrik" className="grid gap-8 md:grid-cols-[16rem_1fr] md:items-start">
          {owner.photo ? (
            <Image
              src={owner.photo}
              alt={`Porträtt av ${owner.name}`}
              width={480}
              height={600}
              className="aspect-[4/5] w-full max-w-64 rounded-2xl object-cover"
            />
          ) : (
            <div className="flex aspect-[4/5] w-full max-w-64 items-center justify-center rounded-2xl border-2 border-dashed border-line bg-paper p-6 text-center text-ink-soft">
              Här kommer ett foto
            </div>
          )}
          <div className="max-w-2xl space-y-4 text-lg">
            <h2 id="vem-rubrik" className="text-3xl font-semibold">
              Hej, jag heter {owner.name}
            </h2>
            <p>{owner.background}</p>
            <p>
              Jag driver {site.name} själv. Det betyder att det är jag som kommer till dig varje gång, och jag som svarar
              när du ringer.
            </p>
          </div>
        </section>

        <section aria-labelledby="varfor-rubrik" className="mt-14 max-w-3xl">
          <h2 id="varfor-rubrik" className="text-3xl font-semibold">
            Varför tjänsten finns
          </h2>
          <div className="mt-4 space-y-4 text-lg">
            <p>{owner.why}</p>
            <p>
              Många klarar sig bra hemma men saknar någon att dela vardagen med. Barnen bor i en annan stad, vännerna har
              blivit färre och promenaden blir inte av när man ska gå ensam. Hemtjänsten hjälper till med det som måste
              göras. Att stanna på en kopp kaffe och gå en extra runda är det jag gör.
            </p>
          </div>
        </section>

        <section aria-labelledby="sa-fungerar-det" className="mt-14">
          <h2 id="sa-fungerar-det" className="text-3xl font-semibold">
            Så fungerar det
          </h2>
          <ol className="mt-8">
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-spruce font-serif text-xl font-semibold text-paper"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  {index < steps.length - 1 && <span className="mt-2 w-0.5 flex-1 bg-line" aria-hidden="true" />}
                </div>
                <div className="pb-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-1 max-w-2xl text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="granser-rubrik" className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <h2 id="granser-rubrik" className="text-2xl font-semibold">
              Trygghet, respekt och tydliga gränser
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {boundaries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-sage p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Det här är vi inte</h2>
            <p className="mt-4">
              {site.name} är en privat tjänst och inte kommunal hemtjänst. Vi utför ingen vård, personlig omvårdnad
              eller medicinsk hjälp. Behöver du sådant stöd kan du kontakta Säffle kommun eller vårdcentralen – vi är
              gärna ett komplement vid sidan av.
            </p>
          </div>
        </section>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold">Hör av dig</h2>
          <p className="mt-2 text-ink-soft">Ett samtal förpliktar inte till något.</p>
          <ContactActions className="mt-6" />
        </div>
      </div>
    </>
  );
}
