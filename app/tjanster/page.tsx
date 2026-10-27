import type { Metadata } from "next";
import { ContactActions } from "@/components/ContactActions";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";
import { notIncluded, otherProviders, services } from "@/lib/site";
import { container } from "@/lib/ui";

export const metadata: Metadata = pageMetadata(
  "/tjanster",
  "Tjänster – vardagsstöd, sällskap och promenader",
  "Vardagsstöd och sällskap i Säffle: ärenden, lättare hushållshjälp, teknikstöd, promenader, fika och högläsning. Ingen vård eller omsorg.",
);

export default function ServicesPage() {
  return (
    <>
      <PageIntro title="Tjänster">
        <p>
          Ett besök kan rymma en promenad, ett ärende och en kopp kaffe. Vi gör det du vill, inom gränserna
          nedan.
        </p>
      </PageIntro>

      <div className={`${container} py-12 sm:py-16`}>
        {services.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-rubrik`} className="mb-14">
            <h2 id={`${group.id}-rubrik`} className="text-3xl font-semibold">
              {group.category}
            </h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {group.items.map((item) => (
                <li key={item.title} className="rounded-2xl border border-line bg-paper p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 inline-block rounded-full bg-sage px-3 py-1 text-sm font-bold text-spruce">{item.rut}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-6 text-ink-soft">
                    {item.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="inte-rubrik" className="rounded-2xl bg-sage p-6 sm:p-8">
          <h2 id="inte-rubrik" className="text-2xl font-semibold">
            Det här gör vi inte
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {notIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="andra-rubrik" className="mt-8 rounded-2xl border-2 border-clay/40 bg-clay-soft p-6 sm:p-8">
          <h2 id="andra-rubrik" className="text-2xl font-semibold">
            Behöver du något annat?
          </h2>
          <p className="mt-3">Det här kan vi inte hjälpa till med. Här vänder du dig i stället:</p>
          <dl className="mt-4 space-y-4">
            {otherProviders.map((item) => (
              <div key={item.need}>
                <dt className="font-bold">{item.need}</dt>
                <dd className="text-ink-soft">{item.who}</dd>
              </div>
            ))}
          </dl>
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
