import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";
import { container, textLink } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Integritet",
  description: "Så hanterar Säffle Vardagssällskap personuppgifter när du kontaktar oss.",
  alternates: { canonical: "/integritet" },
};

// BEKRÄFTA: Texten är ett utkast. Komplettera med personuppgiftsansvarig
// (firmanamn och organisationsnummer) innan lansering.

export default function PrivacyPage() {
  return (
    <>
      <PageIntro title="Integritet">
        <p>Kort och begripligt om vilka uppgifter vi tar emot och vad vi gör med dem.</p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        <div className="max-w-3xl space-y-10 text-lg">
          <section aria-labelledby="webbplatsen">
            <h2 id="webbplatsen" className="text-2xl font-semibold">
              Webbplatsen
            </h2>
            <p className="mt-3">
              Webbplatsen har ingen inloggning, inga kundkonton och ingen databas. Vi använder inga kakor för
              spårning eller marknadsföring och inga analysverktyg. Vår driftsleverantör kan som alla webbservrar
              tillfälligt registrera tekniska uppgifter, till exempel IP-adress, för att leverera sidorna och skydda
              mot missbruk.
            </p>
          </section>

          <section aria-labelledby="forfragningar">
            <h2 id="forfragningar" className="text-2xl font-semibold">
              När du kontaktar oss
            </h2>
            <p className="mt-3">
              Förfrågningsformuläret skickar ingenting själv. Det öppnar din egen e-postapp med ett färdigt
              meddelande, och det är först när du skickar mejlet som vi får uppgifterna. Detsamma gäller när du
              ringer eller mejlar oss direkt.
            </p>
            <p className="mt-3">Vi tar emot de uppgifter du själv lämnar, vanligtvis:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>namn</li>
              <li>telefonnummer eller e-postadress</li>
              <li>vad du vill ha hjälp med och vilka dagar som passar</li>
            </ul>
            <p className="mt-3">
              Vi använder uppgifterna för att svara dig och, om du vill, planera besök. Den rättsliga grunden är
              att du själv har bett oss om kontakt och att vi vidtar åtgärder inför ett eventuellt avtal.
            </p>
          </section>

          <section aria-labelledby="kansliga">
            <h2 id="kansliga" className="text-2xl font-semibold">
              Skicka inga känsliga uppgifter
            </h2>
            <p className="mt-3">
              Skriv inte om hälsa, diagnoser, mediciner eller andra känsliga uppgifter i mejl eller sms. Vi behöver
              inte sådana uppgifter för att erbjuda sällskap och vardagshjälp.
            </p>
          </section>

          <section aria-labelledby="lagring">
            <h2 id="lagring" className="text-2xl font-semibold">
              Hur länge sparas uppgifterna?
            </h2>
            <p className="mt-3">
              Leder förfrågan inte till ett avtal raderar vi uppgifterna senast tolv månader efter vår senaste
              kontakt. Blir du kund sparar vi dem så länge avtalet gäller och därefter så länge lagen kräver, till
              exempel bokföringslagen.
            </p>
          </section>

          <section aria-labelledby="rattigheter">
            <h2 id="rattigheter" className="text-2xl font-semibold">
              Dina rättigheter
            </h2>
            <p className="mt-3">
              Du har rätt att få veta vilka uppgifter vi har om dig, att få fel rättade och att få uppgifterna
              raderade. Kontakta oss på{" "}
              <a href={`mailto:${site.email}`} className={`${textLink} break-all`}>
                {site.email}
              </a>{" "}
              eller{" "}
              <a href={site.phone.href} className={textLink}>
                {site.phone.display}
              </a>
              . Är du missnöjd med hur vi hanterar dina uppgifter kan du vända dig till Integritetsskyddsmyndigheten
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
