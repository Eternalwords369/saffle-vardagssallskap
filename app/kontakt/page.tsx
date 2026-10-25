import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import { InquiryFormFromUrl } from "@/components/InquiryFormFromUrl";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Ring ${site.phone.display} eller skicka en förfrågan till Säffle Vardagssällskap. Vi hjälper till i ${site.area}.`,
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Kontakt">
        <p>Det enklaste är att ringa. Du kan också skicka en förfrågan, så hör vi av oss.</p>
      </PageIntro>

      <div className={`${container} grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.4fr]`}>
        <section aria-labelledby="direkt-rubrik">
          <h2 id="direkt-rubrik" className="text-2xl font-semibold">
            Kontakta oss direkt
          </h2>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={site.phone.href}
                className="flex min-h-16 items-center gap-4 rounded-2xl border-2 border-spruce bg-paper p-5 text-ink no-underline hover:bg-sage"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-spruce text-paper">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-soft">Ring</span>
                  <span className="block text-xl font-bold">{site.phone.display}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-16 items-center gap-4 rounded-2xl border-2 border-line bg-paper p-5 text-ink no-underline hover:bg-sage"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-spruce">
                  <MailIcon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink-soft">E-post</span>
                  <span className="block text-lg font-bold break-all">{site.email}</span>
                </span>
              </a>
            </li>
          </ul>
          <p className="mt-6 text-ink-soft">
            Vi finns i {site.area}. Svarar vi inte direkt ringer vi upp så snart vi kan.
          </p>
        </section>

        <section id="forfragan" aria-labelledby="forfragan-rubrik" className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
          <h2 id="forfragan-rubrik" className="text-2xl font-semibold">
            Skicka en förfrågan
          </h2>
          <p className="mt-2 mb-6 text-ink-soft">
            Fält utan markering behöver fyllas i. Det räcker med namn och hur vi når dig.
          </p>
          <Suspense fallback={<InquiryForm />}>
            <InquiryFormFromUrl />
          </Suspense>
        </section>
      </div>
    </>
  );
}
