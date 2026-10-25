import Link from "next/link";
import { pendingTerms } from "@/lib/site";
import { textLink } from "@/lib/ui";

// Öppen markering av villkor som ännu inte är fastställda.
export function PendingTerms() {
  return (
    <aside className="rounded-2xl border-2 border-clay/40 bg-clay-soft p-5 sm:p-6" aria-labelledby="pending-terms-title">
      <h2 id="pending-terms-title" className="font-sans text-lg font-bold">
        Preliminära priser och villkor
      </h2>
      <p className="mt-2">
        Priserna är preliminära. Innan något avtal tecknas bekräftar vi skriftligt:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6">
        {pendingTerms.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>
      <p className="mt-3">
        Läs mer under <Link href="/villkor" className={textLink}>villkor</Link>.
      </p>
    </aside>
  );
}
