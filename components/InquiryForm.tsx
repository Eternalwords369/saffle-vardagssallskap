"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { plans, site } from "@/lib/site";
import { buttonPrimary, textLink } from "@/lib/ui";

// Formuläret skickar ingenting till någon server. Det sätter ihop ett
// e-postmeddelande och öppnar besökarens egen e-postapp. Därmed lagras inga
// personuppgifter på webbplatsen.

type Fields = {
  name: string;
  contact: string;
  forWhom: string;
  plan: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const MESSAGE_MAX = 800;

const emptyFields: Fields = { name: "", contact: "", forWhom: "", plan: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (fields.name.trim().length < 2) {
    errors.name = "Skriv ditt namn, så vet vi vem vi ska kontakta.";
  }

  const contact = fields.contact.trim();
  const digits = contact.replace(/[\s\-()+]/g, "");
  const looksLikePhone = /^\d{7,15}$/.test(digits);
  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  if (!contact) {
    errors.contact = "Skriv ett telefonnummer eller en e-postadress som vi kan nå dig på.";
  } else if (!looksLikePhone && !looksLikeEmail) {
    errors.contact = "Kontrollera uppgiften. Ett telefonnummer kan se ut som 070-123 45 67 och en e-postadress som namn@exempel.se.";
  }

  if (fields.message.length > MESSAGE_MAX) {
    errors.message = `Meddelandet får vara högst ${MESSAGE_MAX} tecken. Korta gärna ned det – resten tar vi i telefon.`;
  }

  return errors;
}

const fieldOrder: (keyof Fields)[] = ["name", "contact", "forWhom", "plan", "message"];

const fieldLabels: Record<keyof Fields, string> = {
  name: "Namn",
  contact: "Telefon eller e-post",
  forWhom: "Vem gäller det?",
  plan: "Paket",
  message: "Meddelande",
};

function buildMailto(fields: Fields) {
  const planName = plans.find((plan) => plan.id === fields.plan)?.name ?? "Vet inte än";
  const lines = [
    "Hej!",
    "",
    "Jag vill veta mer om Säffle Vardagssällskap.",
    "",
    `Namn: ${fields.name.trim()}`,
    `Nå mig på: ${fields.contact.trim()}`,
    `Gäller: ${fields.forWhom || "Ej angivet"}`,
    `Intresserad av: ${planName}`,
  ];
  if (fields.message.trim()) {
    lines.push("", fields.message.trim());
  }
  const subject = `Förfrågan från ${fields.name.trim()}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\r\n"))}`;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex gap-2 font-bold text-error">
      <span aria-hidden="true">!</span>
      <span>{message}</span>
    </p>
  );
}

export function InquiryForm({ initialPlan = "" }: { initialPlan?: string }) {
  const [fields, setFields] = useState<Fields>({ ...emptyFields, plan: initialPlan });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [summaryErrors, setSummaryErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    const next = { ...fields, [key]: value };
    setFields(next);
    setOpened(false);
    // Rensa felet direkt när uppgiften blivit giltig.
    if (errors[key] && !validate(next)[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  function onBlur(key: keyof Fields) {
    setTouched((current) => ({ ...current, [key]: true }));
    setErrors((current) => ({ ...current, [key]: validate(fields)[key] }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validate(fields);
    setErrors(result);
    setSummaryErrors(result);
    setTouched({ name: true, contact: true, message: true });

    if (Object.values(result).some(Boolean)) {
      setOpened(false);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    window.location.href = buildMailto(fields);
    setOpened(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const summaryList = fieldOrder.filter((key) => summaryErrors[key] && errors[key]);

  const inputClass = (key: keyof Fields) =>
    `mt-2 block w-full rounded-xl border-2 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/70 focus:border-spruce ${
      errors[key] && touched[key] ? "border-error" : "border-line"
    }`;

  function describedBy(key: keyof Fields, hintId?: string) {
    const ids = [hintId, errors[key] && touched[key] ? `${key}-error` : undefined].filter(Boolean);
    return ids.length ? ids.join(" ") : undefined;
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6" aria-labelledby="forfragan-rubrik">
      {summaryList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border-2 border-error bg-paper p-5"
        >
          <h3 className="font-sans text-lg font-bold text-error">Något behöver rättas innan vi kan gå vidare</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            {summaryList.map((key) => (
              <li key={key}>
                <a href={`#${key}`} className={textLink}>
                  {fieldLabels[key]}
                </a>
                : {errors[key]}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block font-bold">
          Namn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.name && touched.name)}
          aria-describedby={describedBy("name")}
          value={fields.name}
          onChange={(e) => update("name", e.target.value)}
          onBlur={() => onBlur("name")}
          className={inputClass("name")}
        />
        <FieldError id="name-error" message={touched.name ? errors.name : undefined} />
      </div>

      <div>
        <label htmlFor="contact" className="block font-bold">
          Telefon eller e-post
        </label>
        <p id="contact-hint" className="mt-1 text-ink-soft">
          Det du helst vill bli kontaktad på.
        </p>
        <input
          id="contact"
          name="contact"
          type="text"
          autoComplete="tel"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.contact && touched.contact)}
          aria-describedby={describedBy("contact", "contact-hint")}
          value={fields.contact}
          onChange={(e) => update("contact", e.target.value)}
          onBlur={() => onBlur("contact")}
          className={inputClass("contact")}
        />
        <FieldError id="contact-error" message={touched.contact ? errors.contact : undefined} />
      </div>

      <fieldset>
        <legend className="font-bold">
          Vem gäller det? <span className="font-normal text-ink-soft">(valfritt)</span>
        </legend>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-6">
          {["Mig själv", "En anhörig eller vän"].map((option) => (
            <label key={option} className="flex min-h-12 cursor-pointer items-center gap-3">
              <input
                type="radio"
                name="forWhom"
                value={option}
                checked={fields.forWhom === option}
                onChange={(e) => update("forWhom", e.target.value)}
                className="h-6 w-6 accent-spruce"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="plan" className="block font-bold">
          Intresserad av <span className="font-normal text-ink-soft">(valfritt)</span>
        </label>
        <select
          id="plan"
          name="plan"
          value={fields.plan}
          onChange={(e) => update("plan", e.target.value)}
          className={inputClass("plan")}
        >
          <option value="">Vet inte än</option>
          {plans.map((plan) => (
            <option key={plan.id} value={plan.id}>
              {plan.name} – {plan.hoursPerWeek} {plan.hoursPerWeek === 1 ? "timme" : "timmar"} per vecka
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-bold">
          Vad vill du ha hjälp med? <span className="font-normal text-ink-soft">(valfritt)</span>
        </label>
        <p id="message-hint" className="mt-1 text-ink-soft">
          Till exempel ”promenad och fika på tisdagar”. Skriv inte om hälsa, diagnoser eller andra känsliga
          uppgifter – sådant tar vi i så fall personligen.
        </p>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message && touched.message)}
          aria-describedby={describedBy("message", "message-hint message-count")}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => onBlur("message")}
          className={inputClass("message")}
        />
        <p id="message-count" className={`mt-1 text-sm ${fields.message.length > MESSAGE_MAX ? "font-bold text-error" : "text-ink-soft"}`}>
          {fields.message.length} av {MESSAGE_MAX} tecken
        </p>
        <FieldError id="message-error" message={touched.message ? errors.message : undefined} />
      </div>

      <div className="rounded-xl bg-sage p-4 text-base">
        <p>
          När du trycker på knappen öppnas din e-postapp med ett färdigt meddelande till {site.email}. Ingenting
          skickas förrän du själv trycker på skicka där. Läs hur vi hanterar uppgifterna i{" "}
          <Link href="/integritet" className={textLink}>
            integritetstexten
          </Link>
          .
        </p>
      </div>

      <button type="submit" className={`${buttonPrimary} w-full sm:w-auto`}>
        Skriv förfrågan i e-posten
      </button>

      {opened && (
        <div ref={statusRef} tabIndex={-1} role="status" className="rounded-xl border-2 border-spruce bg-paper p-5">
          <p className="font-bold">Nu bör din e-postapp ha öppnats.</p>
          <p className="mt-1">
            Hände inget? Ring oss på{" "}
            <a href={site.phone.href} className={textLink}>
              {site.phone.display}
            </a>{" "}
            eller skicka ett mejl direkt till{" "}
            <a href={`mailto:${site.email}`} className={`${textLink} break-all`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}
