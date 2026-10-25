import { container } from "@/lib/ui";

export function PageIntro({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="border-b border-line bg-paper">
      <div className={`${container} py-10 sm:py-14`}>
        <h1 className="max-w-3xl text-4xl font-semibold sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-ink-soft sm:text-xl">{children}</div>}
      </div>
    </div>
  );
}
