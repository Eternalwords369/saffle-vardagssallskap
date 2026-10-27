import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";
import { site, terms } from "@/lib/site";
import { container, textLink } from "@/lib/ui";

export const metadata: Metadata = pageMetadata(
  "/integritet",
  "Integritet",
  "Så hanterar Säffle Vardagssällskap personuppgifter: vilka uppgifter vi behöver, hur länge de sparas och hur du får dem raderade.",
);

// TODO: Låt någon kunnig granska texten mot GDPR, särskilt överföring via Gmail och lagringstider.
export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="Integritet">
        <p>Vi tar bara emot de uppgifter vi behöver för att svara dig och planera besök.</p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        <div className="max-w-3xl space-y-10 text-lg">
          <section aria-labelledby="ansvarig" className="space-y-3">
            <h2 id="ansvarig" className="text-2xl font-semibold">
              Personuppgiftsansvarig
            </h2>
            <p>
              {site.legalName}, organisationsnummer {site.orgNumber}, som driver {site.name}. Nås på{" "}
              <a href={site.phone.href} className={textLink}>
                {site.phone.display}
              </a>{" "}
              eller{" "}
              <a href={`mailto:${site.email}`} className={`${textLink} break-all`}>
                {site.email}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="webbplatsen" className="space-y-3">
            <h2 id="webbplatsen" className="text-2xl font-semibold">
              Webbplatsen
            </h2>
            <p>
              Webbplatsen har ingen inloggning, inga kundkonton och ingen databas. Vi använder inga kakor för spårning
              eller marknadsföring och inga analysverktyg. Driftsleverantören kan, som alla webbservrar, tillfälligt
              registrera tekniska uppgifter som IP-adress för att leverera sidorna och skydda mot missbruk.
            </p>
            <p>
              Förfrågningsformuläret skickar ingenting själv. Det öppnar din egen e-postapp med ett färdigt meddelande,
              och vi får uppgifterna först när du skickar mejlet.
            </p>
          </section>

          <section aria-labelledby="uppgifter" className="space-y-3">
            <h2 id="uppgifter" className="text-2xl font-semibold">
              Vilka uppgifter vi behöver
            </h2>
            <p>När du hör av dig:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>namn</li>
              <li>telefonnummer eller e-postadress</li>
              <li>vad du vill ha hjälp med och vilka dagar som passar</li>
            </ul>
            <p>Om du blir kund behöver vi dessutom:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>adress, så att vi hittar hem till dig</li>
              <li>personnummer för den som ska ha RUT-avdrag, eftersom Skatteverket kräver det</li>
              <li>namn och telefonnummer till en kontaktperson, om du vill att vi ska kunna nå någon</li>
            </ul>
            <p>
              Vi använder uppgifterna för att svara dig, planera besök, fakturera och ansöka om RUT. Den rättsliga
              grunden är avtalet med dig, åtgärder inför ett avtal och bokföringslagen.
            </p>
          </section>

          <section aria-labelledby="kansliga" className="space-y-3 rounded-2xl border-2 border-clay/40 bg-clay-soft p-5 sm:p-6">
            <h2 id="kansliga" className="text-2xl font-semibold">
              Skicka inga hälsouppgifter
            </h2>
            <p>
              Skriv inte hälsouppgifter, diagnoser eller mediciner i e-post, sms eller formuläret. Vanlig e-post är inte
              skyddad, och vi behöver inte sådana uppgifter för att erbjuda sällskap och vardagshjälp. Finns det något
              vi bör känna till för att besöket ska bli bra, till exempel att du hör dåligt, tar vi det när vi ses.
            </p>
          </section>

          <section aria-labelledby="dela" className="space-y-3">
            <h2 id="dela" className="text-2xl font-semibold">
              Vem som får del av uppgifterna
            </h2>
            {/* TODO: Bekräfta om Gmail är rätt e-posttjänst och om personuppgiftsbiträdesavtal behövs. */}
            <p>
              Vi säljer aldrig uppgifter. De lämnas bara till Skatteverket för RUT-avdrag, till vår redovisningskonsult
              för bokföringen och till den kontaktperson du själv har sagt ja till. E-post hanteras i Gmail (Google).
            </p>
          </section>

          <section aria-labelledby="lagring" className="space-y-3">
            <h2 id="lagring" className="text-2xl font-semibold">
              Hur länge uppgifterna sparas
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Förfrågningar som inte leder till avtal raderas senast {terms.retentionMonths} månader efter vår senaste
                kontakt.
              </li>
              <li>Kunduppgifter sparas så länge avtalet gäller och raderas när det har upphört.</li>
              <li>Fakturor och underlag för RUT sparas i sju år efter årets slut, eftersom bokföringslagen kräver det.</li>
            </ul>
            <p>
              Varje månad går vi igenom mejl, sms och samtalslistor och raderar det som har passerat tiderna ovan.
            </p>
          </section>

          <section aria-labelledby="rattigheter" className="space-y-3">
            <h2 id="rattigheter" className="text-2xl font-semibold">
              Dina rättigheter
            </h2>
            <p>
              Du har rätt att få veta vilka uppgifter vi har om dig, att få fel rättade och att få uppgifterna raderade
              om vi inte måste spara dem enligt lag. Hör av dig på telefon eller e-post så ordnar vi det inom en månad.
              Är du missnöjd med hur vi hanterar dina uppgifter kan du vända dig till Integritetsskyddsmyndigheten
              (IMY).
            </p>
          </section>

          <p className="text-base text-ink-soft">
            Se även våra <Link href="/villkor" className={textLink}>villkor</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
