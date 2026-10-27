// Samlade uppgifter för hela webbplatsen. Allt som är markerat med "BEKRÄFTA"
// måste kontrolleras innan lansering (se LANSERING.md).

export const site = {
  name: "Säffle Vardagssällskap",
  shortDescription:
    "Sällskap och lättare vardagshjälp i Säffle – promenader, ärenden, fika och hushållssysslor med samma person varje gång. Månadspaket med RUT-avdrag där det gäller.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://saffle-vardagssallskap.vercel.app").replace(/\/$/, ""),
  area: "Säffle med omnejd",
  city: "Säffle",
  region: "Värmlands län",
  phone: {
    display: "076-155 20 20",
    e164: "+46761552020",
    href: "tel:+46761552020",
    sms: "sms:+46761552020",
  },
  // BEKRÄFTA: att kontot är skapat och tar emot mejl.
  email: "Vardagssallskap@gmail.com",
  // BEKRÄFTA: fyll i när företaget är registrerat.
  legalName: "[Juridiskt namn]",
  orgNumber: "[Organisationsnummer]",
} as const;

// BEKRÄFTA: byt till riktiga uppgifter. Lägg fotot i public/ och ange sökvägen, t.ex. "/foto.jpg".
export const owner = {
  name: "[Förnamn Efternamn]",
  background: "[Två–tre meningar om dig: var du bor, vad du har arbetat med och vad du tycker om att göra.]",
  photo: null as string | null,
};

export const nav = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/abonnemang", label: "Abonnemang" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

// BEKRÄFTA: priser och RUT-behandling med Skatteverket och redovisningskonsult.
export const pricing = {
  rutShare: 0.5,
  visitHours: 2,
  minVisitMinutes: 90,
  social: { id: "social", name: "Social aktivitet", hourly: 499, range: [449, 549], minHours: 2 },
};

export type Plan = {
  id: string;
  name: string;
  price: number;
  hoursPerMonth: number;
  visitsPerMonth: number;
  suits: string;
};

export const plans: Plan[] = [
  {
    id: "fast-besok",
    name: "Fast besök",
    price: 2392,
    hoursPerMonth: 4,
    visitsPerMonth: 2,
    suits: "Ett besök varannan vecka – en promenad, ett ärende och lite hjälp hemma.",
  },
  {
    id: "vardag",
    name: "Vardag",
    price: 4624,
    hoursPerMonth: 8,
    visitsPerMonth: 4,
    suits: "Ett besök i veckan, samma dag och tid. Lätt att planera veckan kring.",
  },
  {
    id: "aktiv",
    name: "Aktiv",
    price: 6696,
    hoursPerMonth: 12,
    visitsPerMonth: 6,
    suits: "Sex besök i månaden, för dig som vill komma ut och ha sällskap oftare än en gång i veckan.",
  },
];

export const afterRut = (price: number) => Math.round(price * (1 - pricing.rutShare));

export const rutNote = [
  "Alla priser till privatpersoner är inklusive moms.",
  "RUT-avdrag gäller bara för arbete som ger rätt till avdrag – till exempel städning, promenader, enklare ärenden och högläsning – och bara om du själv har rätt till avdraget och har utrymme kvar.",
  `Tid som inte ger RUT, till exempel fika, samtal eller ett loppisbesök, räknas som social tid till ${pricing.social.hourly} kr/timme. Du betalar aldrig mer än paketets pris före RUT.`,
  "Resor, material och aktiviteter som inte ger RUT ingår inte i underlaget för RUT-avdrag.",
  "Pris och RUT-fördelning bekräftas skriftligt innan avtal.",
];

export const services = [
  {
    category: "Vardagsstöd",
    id: "vardagsstod",
    items: [
      {
        title: "Enklare ärenden tillsammans med dig",
        rut: "Kan ge RUT",
        examples: ["Handla i mataffären och bära hem varorna", "Gå till apoteket, posten eller banken tillsammans", "Lämna böcker på biblioteket"],
      },
      {
        title: "Lättare hushållshjälp",
        rut: "Kan ge RUT",
        examples: ["Diska, damma och torka av", "Byta lakan och sätta på en tvätt", "Vattna blommor och bära ut soporna"],
      },
      {
        title: "Vardagsplanering",
        rut: "Ger normalt inte RUT",
        examples: ["Skriva inköpslista och veckoschema", "Påminna om bokade tider och förbereda inför dem", "Sortera post och hitta det som ska ringas om"],
      },
      {
        title: "Teknikstöd",
        rut: "Kan ge RUT",
        examples: ["Ringa videosamtal med barnbarnen", "Ställa in mobilen, surfplattan eller tv:n", "Komma igång med SMS och bilder"],
      },
    ],
  },
  {
    category: "Sällskap & aktiviteter",
    id: "sallskap",
    items: [
      {
        title: "Samtal, fika och högläsning",
        rut: "Högläsning kan ge RUT, fika och samtal ger det inte",
        examples: ["Kaffe och prat vid köksbordet", "Läsa tidningen eller en bok högt", "Spela kort, lösa korsord eller titta i fotoalbum"],
      },
      {
        title: "Promenader i din takt",
        rut: "Kan ge RUT",
        examples: ["En runda längs Byälven", "Till torget och tillbaka", "Kortare promenader runt kvarteret när orken räcker till det"],
      },
      {
        title: "Utflykter och aktiviteter",
        rut: "Ger inte RUT",
        examples: ["Kyrkkaffe eller föreningsträff", "Loppis eller café", "Konsert eller bio – du betalar din egen biljett"],
      },
    ],
  },
];

export const notIncluded = [
  "Vård, personlig omvårdnad, hjälp med hygien eller hantering av läkemedel",
  "Lyft, förflyttningar eller akut tillsyn",
  "Förvaring av nycklar, tills det finns en särskild rutin för det",
  "BankID, PIN-koder, fullmakter eller dina pengar",
  "Skjuts i vår bil – vi går eller åker buss tillsammans",
  "Jour eller larm. Tjänsten ersätter inte hemtjänst och kan inte garantera din trygghet",
];

export const otherProviders = [
  { need: "Hjälp med hygien, påklädning, mat eller mediciner", who: "Säffle kommun – fråga efter biståndshandläggare" },
  { need: "Frågor om hälsa, sår eller provtagning", who: "Vårdcentralen eller 1177" },
  { need: "Trygghetslarm eller färdtjänst", who: "Säffle kommun" },
  { need: "Hjälp med ekonomi, räkningar eller fullmakt", who: "En anhörig, banken eller överförmyndaren" },
  { need: "Akut fara för liv eller hälsa", who: "Ring 112" },
];

export const trust = [
  { title: "Samma person varje gång", text: "Du lär känna den som kommer. Inget nytt ansikte varje vecka." },
  { title: "Fast tid", text: "Samma veckodag och tid, så att besöket blir en del av veckan." },
  { title: "Tydligt pris", text: "Månadspris inklusive moms. Du får pris och villkor skriftligt innan något gäller." },
  { title: "Ingen bindningstid i piloten", text: "Säg upp med en månads varsel. Inga avgifter för att sluta." },
  { title: "Vi träffas först", text: "Ett personligt möte hemma hos dig innan första besöket bokas." },
];

// BEKRÄFTA: villkoren med jurist eller Konsumentverkets vägledning innan avtal skrivs.
export const terms = {
  travelIncluded: "Säffle tätort",
  cancelHours: 24,
  lateCancelFee: 299,
  noticePeriod: "en kalendermånad",
  paymentDays: 15,
  retentionMonths: 12,
};

export const faq = [
  {
    q: "Hur fungerar RUT-avdraget?",
    a: `Vi drar av RUT direkt på fakturan för den tid som ger rätt till avdrag, till exempel städning, promenader och enklare ärenden. Fika, samtal och nöjesaktiviteter ger inte RUT. Du måste själv ha rätt till avdraget och utrymme kvar för året. Hur din tid fördelas bekräftar vi skriftligt innan avtal.`,
  },
  {
    q: "Vad händer om jag måste avboka?",
    a: `Avbokar du senast ${terms.cancelHours} timmar före kostar det ingenting, och vi hittar en ny tid. Vid senare avbokning tar vi ut ${terms.lateCancelFee} kr, utan RUT. Blir du plötsligt sjuk tar vi inte ut någon avgift.`,
  },
  {
    q: "Kan en anhörig beställa?",
    a: "Ja. Många hör av sig för en förälders räkning. Vi träffar alltid den som ska få besöken, och det är hen som bestämmer. Vi berättar bara om besöken för anhöriga om hen har sagt ja till det.",
  },
  {
    q: "Vilket område kommer ni till?",
    a: `Resor inom ${terms.travelIncluded} ingår. Bor du utanför tätorten, till exempel i Värmlandsbro eller Svanskog, kan en reseavgift tillkomma. Den står i så fall i offerten.`,
  },
  {
    q: "Vad gör ni inte?",
    a: "Ingen vård, omvårdnad, hygien eller mediciner. Inga lyft, ingen skjuts i bil och ingen hantering av BankID, koder eller pengar. Vi är inte hemtjänst och ersätter den inte.",
  },
];

export function formatPrice(value: number) {
  return `${value.toLocaleString("sv-SE").replace(/\s/g, " ")} kr`;
}
