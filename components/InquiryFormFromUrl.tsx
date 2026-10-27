"use client";

import { useSearchParams } from "next/navigation";
import { InquiryForm, planOptions } from "./InquiryForm";

// Förväljer paket när besökaren kommer från en paketknapp (?paket=...).
export function InquiryFormFromUrl() {
  const requested = useSearchParams().get("paket") ?? "";
  const initialPlan = planOptions.some((plan) => plan.id === requested) ? requested : "";
  return <InquiryForm key={initialPlan} initialPlan={initialPlan} />;
}
