"use client";

import { useSearchParams } from "next/navigation";
import { plans } from "@/lib/site";
import { InquiryForm } from "./InquiryForm";

// Förväljer paket när besökaren kommer från en paketknapp (?paket=...).
export function InquiryFormFromUrl() {
  const requested = useSearchParams().get("paket") ?? "";
  const initialPlan = plans.some((plan) => plan.id === requested) ? requested : "";
  return <InquiryForm key={initialPlan} initialPlan={initialPlan} />;
}
