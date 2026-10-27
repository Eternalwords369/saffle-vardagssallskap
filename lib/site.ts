// Samlade uppgifter för hela webbplatsen.
// Allt som är markerat med "BEKRÄFTA" måste kontrolleras innan lansering
// (se LANSERING.md).

export const site = {
  name: "Säffle Vardagssällskap",
  shortDescription:
    "Vardagshjälp och sällskap i Säffle med omnejd – samtal, promenader, aktiviteter och lättare hushållshjälp som abonnemang.",
  // Sätts i Vercel som NEXT_PUBLIC_SITE_URL när domänen är klar.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://saffle-vardagssallskap.vercel.app").replace(/\/$/, ""),
  area: "Säffle med omnejd",
  city: "Säffle",
  region: "Värmlands län",
  phone: {
    display: "076-155 20 20",
    href: "tel:+46761552020",
  },
  // BEKRÄFTA: att kontot är skapat och tar emot mejl.
  email: "Vardagssallskap@gmail.com",
} as const;

export const nav = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/abonnemang", label: "Abonnemang" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export type Plan = {
  id: string;
  name: string;
  // BEKRÄFTA: preliminära priser. Ange om priset är inklusive moms.
  price: number;
  hoursPerWeek: number;
  summary: string;
  suits: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "lilla-stunden",
    name: "Lilla stunden",
    price: 995,
    hoursPerWeek: 1,
    summary: "En timme i veckan, samma dag och tid.",
    suits: "Passar dig som vill ha ett fast besök att se fram emot – en fika, en promenad eller hjälp med något som blivit liggande.",
  },
  {
    id: "vardagssallskap",
    name: "Vardagssällskap",
    price: 1990,
    hoursPerWeek: 2,
    summary: "Två timmar i veckan, ett längre besök eller två kortare.",
    suits: "Passar dig som vill hinna både umgås och få saker gjorda, till exempel en promenad och en tur till affären.",
    featured: true,
  },
  {
    id: "aktiv-vardag",
    name: "Aktiv vardag",
    price: 2990,
    hoursPerWeek: 3,
    summary: "Tre timmar i veckan, gärna fördelat på flera dagar.",
    suits: "Passar dig som vill ha regelbundet sällskap flera gånger i veckan och komma ut på aktiviteter.",
  },
];

// Uppgifter som ännu inte är fastställda. Visas öppet på webbplatsen så att
// ingen kund vilseleds. Ta bort eller ersätt när villkoren är bestämda.
export const pendingTerms = [
  "om priserna anges inklusive eller exklusive moms",
  "eventuella resekostnader utanför centrala Säffle",
  "avtalsperiod och uppsägningstid",
  "regler för avbokning och missade besök",
] as const;

export function formatPrice(value: number) {
  // Mellanslag som tusentalsavgränsare, t.ex. "1 990 kr".
  return `${value.toLocaleString("sv-SE").replace(/\s/g, " ")} kr`;
}
