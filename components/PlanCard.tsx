import Link from "next/link";
import { formatPrice, type Plan } from "@/lib/site";
import { buttonPrimary, buttonSecondary } from "@/lib/ui";

export function PlanCard({ plan, headingLevel = "h2" }: { plan: Plan; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <article
      className={`flex flex-col rounded-2xl border-2 bg-paper p-6 ${plan.featured ? "border-spruce" : "border-line"}`}
      aria-labelledby={`plan-${plan.id}`}
    >
      {plan.featured && (
        <p className="mb-3 self-start rounded-full bg-sage px-3 py-1 text-sm font-bold text-spruce">
          Bra mellanläge
        </p>
      )}
      <Heading id={`plan-${plan.id}`} className="text-2xl font-semibold">
        {plan.name}
      </Heading>
      <p className="mt-3">
        <span className="font-serif text-4xl font-semibold">{formatPrice(plan.price)}</span>
        <span className="text-ink-soft"> / månad</span>
      </p>
      <p className="mt-1 text-sm font-bold text-clay">Preliminärt pris</p>
      <p className="mt-4 font-bold">
        {plan.hoursPerWeek} {plan.hoursPerWeek === 1 ? "timme" : "timmar"} per vecka
      </p>
      <p className="mt-1">{plan.summary}</p>
      <p className="mt-3 text-ink-soft">{plan.suits}</p>
      <Link
        href={`/kontakt?paket=${plan.id}#forfragan`}
        className={`${plan.featured ? buttonPrimary : buttonSecondary} mt-6 w-full`}
      >
        Fråga om {plan.name}
      </Link>
    </article>
  );
}
