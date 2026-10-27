import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";
import { formatPrice, notIncluded, pricing, site, terms } from "@/lib/site";
import { container, textLink } from "@/lib/ui";

export const metadata: Metadata = pageMetadata(
  "/villkor",
  "Villkor",
  "Villkor för abonnemang och sällskap hos Säffle Vardagssällskap: pris, RUT, avbokning, uppsägning, ångerrätt och ansvar.",
);

// TODO: Låt en jurist eller Konsumentverkets vägledning granska hela texten innan första avtal.
const sections = [
  {
    id: "parter",
    title: "1. Vilka avtalet gäller",
    body: (
      <>
        {/* TODO: Fyll i juridiskt namn och organisationsnummer i lib/site.ts när företaget är registrerat. */}
        <p>
          Villkoren gäller mellan dig som kund och {site.legalName}, organisationsnummer {site.orgNumber}, som driver{" "}
          {site.name}. Kunden är den som får besöken, även när en anhörig har hjälpt till att beställa.
        </p>
        <p>Inget avtal gäller förrän du har fått pris och villkor skriftligt och tackat ja.</p>
      </>
    ),
  },
  {
    id: "tjansten",
    title: "2. Tjänsten och vad den inte omfattar",
    body: (
      <>
        <p>
          Tjänsten är sällskap och lättare vardagshjälp, till exempel promenader, enklare ärenden, lättare
          hushållssysslor, teknikstöd och samtal. Tjänsten är inte kommunal hemtjänst och omfattar inte:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          {notIncluded.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Du kan alltid säga nej till något under ett besök, och vi kan säga nej till uppgifter som ligger utanför tjänsten.</p>
      </>
    ),
  },
  {
    id: "pris",
    title: "3. Pris och moms",
    body: (
      <>
        <p>
          Alla priser till privatpersoner anges inklusive moms. Paketens månadspris och timpriset för social aktivitet
          (<Link href="/abonnemang" className={textLink}>se abonnemang</Link>) gäller för det antal timmar som ingår.
          Tid som inte ger RUT räknas som social tid, {formatPrice(pricing.social.hourly)} per timme. Du betalar aldrig
          mer än paketets pris före RUT.
        </p>
        <p>
          Vi får ändra priset med minst en månads skriftligt varsel. Du har då rätt att säga upp avtalet så att det
          upphör innan det nya priset börjar gälla.
        </p>
      </>
    ),
  },
  {
    id: "rut",
    title: "4. RUT-avdrag",
    body: (
      <>
        {/* TODO: Bekräfta med Skatteverket och redovisningskonsult vilka moment som ger RUT och hur fakturan ska delas upp. */}
        <p>
          RUT-avdrag gäller bara för arbetsmoment som ger rätt till avdrag, till exempel städning, promenader, enklare
          ärenden och högläsning, och bara om du har rätt till avdraget och har utrymme kvar för året. Fika, samtal,
          nöjesaktiviteter, resor och material ger inte RUT.
        </p>
        <p>
          Vi drar av RUT direkt på fakturan och ansöker om utbetalning från Skatteverket. Om Skatteverket helt eller
          delvis nekar avdraget, till exempel för att ditt utrymme är slut, behöver du betala den delen till oss. Vi
          skickar då en ny faktura och förklarar varför.
        </p>
      </>
    ),
  },
  {
    id: "omrade",
    title: "5. Område och resor",
    body: (
      <>
        {/* TODO: Bestäm reseavgift utanför tätorten och om den ska vara fast eller per kilometer. */}
        <p>
          Resor inom {terms.travelIncluded} ingår i priset. Utanför tätorten kan en reseavgift tillkomma. Den står i så
          fall i offerten och ingår inte i underlaget för RUT-avdrag. Vi skjutsar inte kunder i egen bil. Behöver ni
          åka buss betalar du din egen biljett.
        </p>
      </>
    ),
  },
  {
    id: "besok",
    title: "6. Besöken",
    body: (
      <>
        <p>
          Ett besök är minst {pricing.minVisitMinutes} minuter och normalt {pricing.visitHours} timmar. Besöken sker på
          en fast veckodag och tid som vi kommer överens om. Samma person kommer varje gång.
        </p>
        <p>
          Avbokade besök som går att flytta görs om inom samma eller nästa månad. Timmar som inte används och inte går
          att flytta sparas inte längre än så.
        </p>
      </>
    ),
  },
  {
    id: "betalning",
    title: "7. Fakturering och betalning",
    body: (
      <>
        {/* TODO: Bekräfta fakturarutin med redovisningskonsult (efterskott, RUT-uppgifter på fakturan). */}
        <p>
          Du får en faktura i slutet av varje månad för de besök som har gjorts. Fakturan visar arbetstid, vilken del
          som ger RUT, eventuella reseavgifter och moms. Betalningstiden är {terms.paymentDays} dagar. Vid sen
          betalning kan dröjsmålsränta enligt räntelagen tillkomma.
        </p>
        <p>En anhörig kan få fakturan om du vill det, men RUT-avdraget gäller den som betalar och har rätt till det.</p>
      </>
    ),
  },
  {
    id: "avbokning",
    title: "8. Avbokning och uteblivet besök",
    body: (
      <>
        <p>
          Avbokar du senast {terms.cancelHours} timmar före besöket kostar det ingenting. Avbokar du senare, eller är
          du inte hemma när vi kommer, tar vi ut {formatPrice(terms.lateCancelFee)} inklusive moms. Avgiften ger inte RUT eftersom
          inget arbete har utförts.
        </p>
        <p>
          Om du inte öppnar väntar vi en stund och ringer dig. Får vi inte kontakt ringer vi den kontaktperson du har
          angett, om du har sagt ja till det. Vi har inget tillsynsansvar. Är det akut ringer vi 112.
        </p>
      </>
    ),
  },
  {
    id: "sjukdom",
    title: "9. Sjukdom och inställda besök",
    body: (
      <p>
        Blir du plötsligt sjuk tar vi ingen avgift, även om avbokningen kommer sent. Är vi sjuka, även lindrigt
        förkylda, ställer vi in för att inte smitta. Vi hör av oss så tidigt vi kan och erbjuder en ny tid. Går det
        inte dras besöket av från fakturan.
      </p>
    ),
  },
  {
    id: "uppsagning",
    title: "10. Avtalstid, byte av paket och uppsägning",
    body: (
      <>
        <p>
          Under piloten finns ingen bindningstid. Avtalet gäller tills vidare och kan sägas upp av båda parter med{" "}
          {terms.noticePeriod}s varsel. Byte av paket gäller från nästa månad.
        </p>
        <p>
          Vi får avsluta avtalet direkt om besöken inte kan genomföras tryggt för någon av oss, till exempel vid hot
          eller om behoven har blivit sådana som tjänsten inte omfattar. Då betalar du bara för gjorda besök.
        </p>
      </>
    ),
  },
  {
    id: "anger",
    title: "11. Ångerrätt",
    body: (
      <>
        {/* TODO: Bifoga standardformulär för utövande av ångerrätt och kontrollera texten mot lagen (2005:59). */}
        <p>
          Om avtalet ingås på distans eller hemma hos dig har du 14 dagars ångerrätt från den dag avtalet ingås. Säg
          till oss per telefon, sms eller e-post. Om du har bett oss börja innan ångerfristen gått ut betalar du för
          den del av tjänsten som redan har utförts.
        </p>
      </>
    ),
  },
  {
    id: "reklamation",
    title: "12. Om något blir fel",
    body: (
      <>
        <p>
          Säg till så snart som möjligt om du är missnöjd med ett besök. Vi gör om det som gick fel eller sätter ned
          priset. Kommer vi inte överens kan du vända dig till Allmänna reklamationsnämnden (ARN) eller få råd
          från Konsumentverkets Hallå konsument.
        </p>
      </>
    ),
  },
  {
    id: "ansvar",
    title: "13. Ansvar",
    body: (
      <>
        {/* TODO: Kontrollera ansvarsförsäkring med försäkringsbolag och skriv först därefter något om försäkring. */}
        <p>
          Vi ansvarar för skador som vi orsakar genom vårdslöshet, enligt allmänna skadeståndsregler. Vi tar inte hand
          om värdesaker, pengar, kort eller koder och ansvarar inte för sådant vi inte har fått i uppdrag att hantera.
        </p>
      </>
    ),
  },
  {
    id: "personuppgifter",
    title: "14. Personuppgifter och kontakt med anhöriga",
    body: (
      <>
        <p>
          Vi behandlar dina personuppgifter enligt vår <Link href="/integritet" className={textLink}>integritetstext</Link>.
        </p>
        <p>
          Vi berättar bara om besöken för en anhörig eller annan kontaktperson om du har sagt ja till det. Du väljer
          vem, och du kan ta tillbaka ditt ja när du vill.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageIntro title="Villkor">
        <p>Det här gäller när du har besök av oss. Du får villkoren skriftligt innan något avtal börjar gälla.</p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        <nav aria-label="Innehåll" className="max-w-3xl rounded-2xl border border-line bg-paper p-5 sm:p-6">
          <h2 className="font-sans text-lg font-bold">Innehåll</h2>
          <ol className="mt-2 grid gap-1 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={textLink}>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 max-w-3xl space-y-10 text-lg">
          {sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-rubrik`} className="scroll-mt-24 space-y-3">
              <h2 id={`${section.id}-rubrik`} className="text-2xl font-semibold">
                {section.title}
              </h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
