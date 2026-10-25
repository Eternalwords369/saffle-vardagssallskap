import type { Metadata } from "next";
import { ContactActions } from "@/components/ContactActions";
import { PageIntro } from "@/components/PageIntro";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Om oss och hur det fungerar",
  description:
    "Säffle Vardagssällskap är en lokal tjänst för sällskap och vardagshjälp. Så fungerar det från första samtalet till fasta besök varje vecka.",
  alternates: { canonical: "/om-oss" },
};

const steps = [
  {
    title: "Första kontakten",
    text: "Du ringer eller skickar en förfrågan. Vi pratar en stund i telefon om vad du eller din anhörige önskar och vilka dagar som passar.",
  },
  {
    title: "Vi träffas",
    text: "Vi ses och lär känna varandra innan något bestäms. Det är viktigt att den som får besöken själv känner sig trygg och vill ha dem.",
  },
  {
    title: "Ni väljer paket",
    text: "Du väljer hur många timmar i veckan du vill ha. Du får villkor och pris skriftligt innan något avtal gäller.",
  },
  {
    title: "Fasta besök",
    text: "Besöken sker på en fast tid varje vecka. Innehållet styrs av dagsformen – en promenad ena veckan, ett ärende på stan nästa.",
  },
  {
    title: "Vi stämmer av",
    text: "Med jämna mellanrum frågar vi hur det går och om något ska ändras. Behoven förändras, och upplägget ska följa med.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro title="Om oss">
        <p>En lokal tjänst i Säffle, för de stunder i veckan som blir lite för tysta.</p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        <section aria-labelledby="varfor-rubrik" className="max-w-3xl">
          <h2 id="varfor-rubrik" className="text-3xl font-semibold">
            Varför vi finns
          </h2>
          <div className="mt-4 space-y-4 text-lg">
            <p>
              Många klarar sig bra hemma men saknar någon att dela vardagen med. Barnen bor kanske i en annan stad,
              vännerna har blivit färre och promenaden blir inte av när man ska gå ensam.
            </p>
            <p>
              Säffle Vardagssällskap startades för att erbjuda något enkelt: en person som kommer på bestämd tid,
              har tid att prata och kan hjälpa till med det som behövs i stunden. Vi känner orten och tycker att det
              är självklart att man ska kunna bo kvar hemma och ha ett socialt liv.
            </p>
          </div>
        </section>

        <section aria-labelledby="sa-fungerar-det" className="mt-14">
          <h2 id="sa-fungerar-det" className="text-3xl font-semibold">
            Så fungerar det
          </h2>
          <ol className="mt-8 space-y-0">
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

        <section aria-labelledby="loften-rubrik" className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <h2 id="loften-rubrik" className="text-2xl font-semibold">
              Det här kan du räkna med
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Fasta tider som hålls, och besked i god tid om något ändras.</li>
              <li>Att vi lyssnar på vad du vill – inte på vad vi tror att du behöver.</li>
              <li>Tydliga priser och villkor innan du bestämmer dig.</li>
              <li>Att det du berättar stannar mellan oss.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-sage p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Det här är vi inte</h2>
            <p className="mt-4">
              Vi är en privat tjänst och inte kommunal hemtjänst. Vi utför ingen vård, personlig omvårdnad eller
              medicinsk hjälp. Om du har behov av sådant stöd kan du kontakta Säffle kommun eller vården – vi är
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
