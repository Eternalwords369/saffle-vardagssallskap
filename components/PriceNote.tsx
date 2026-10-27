import Link from "next/link";
import { rutNote } from "@/lib/site";
import { textLink } from "@/lib/ui";

export function PriceNote() {
  return (
    <aside className="rounded-2xl border-2 border-clay/40 bg-clay-soft p-5 sm:p-6" aria-labelledby="price-note-title">
      <h2 id="price-note-title" className="font-sans text-lg font-bold">
        Moms och RUT-avdrag
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-6">
        {rutNote.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p className="mt-3">
        Läs mer i <Link href="/villkor" className={textLink}>villkoren</Link>.
      </p>
    </aside>
  );
}
