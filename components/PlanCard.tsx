import Link from "next/link";
import { afterRut, formatPrice, pricing, type Plan } from "@/lib/site";
import { buttonSecondary } from "@/lib/ui";

export function PlanCard({ plan, headingLevel = "h2" }: { plan: Plan; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <article className="flex flex-col rounded-2xl border-2 border-line bg-paper p-6" aria-labelledby={`plan-${plan.id}`}>
      <Heading id={`plan-${plan.id}`} className="text-2xl font-semibold">
        {plan.name}
      </Heading>
      <p className="mt-1 font-bold">
        {plan.hoursPerMonth} timmar per månad · {plan.visitsPerMonth} besök à {pricing.visitHours} timmar
      </p>
      <p className="mt-4">
        <span className="font-serif text-4xl font-semibold">{formatPrice(plan.price)}</span>
        <span className="text-ink-soft"> / månad inkl. moms</span>
      </p>
      <p className="mt-2 rounded-xl bg-sage px-3 py-2">
        <span className="font-bold">Från {formatPrice(afterRut(plan.price))} efter RUT</span>
        <span className="block text-sm text-ink-soft">om all tid ger rätt till RUT-avdrag</span>
      </p>
      <p className="mt-4 mb-6 text-ink-soft">{plan.suits}</p>
      <Link href={`/kontakt?paket=${plan.id}#forfragan`} className={`${buttonSecondary} mt-auto w-full`}>
        Fråga om {plan.name}
      </Link>
    </article>
  );
}
