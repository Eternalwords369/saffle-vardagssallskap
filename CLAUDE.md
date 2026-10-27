@AGENTS.md

# Säffle Vardagssällskap – webbplats

Lokal abonnemangstjänst för sällskap och lättare vardagshjälp i Säffle med
omnejd. Målet med sajten är att få de första betalande kunderna: varje sida ska
leda till att besökaren ringer eller skickar en förfrågan.

Målgrupp: äldre som bor hemma och deras vuxna barn. Många läser på mobil,
ofta Android, ibland med förstoring.

## Kommandon

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck  # next typegen + tsc
npm run build
```

Kör lint, typecheck och build innan varje commit. Alla tre ska ge 0 fel och 0 varningar.

## Struktur

- `lib/site.ts` – enda källan för namn, telefon, e-post, paket, priser, RUT-text,
  tjänster, avgränsningar, villkorsuppgifter (`terms`) och FAQ. Hårdkoda aldrig
  sådana uppgifter i sidor.
- `lib/ui.ts` – delade klasser för knappar, länkar och container. Använd dem i
  stället för nya varianter.
- `app/` – en mapp per sida med svenska URL:er utan å/ä/ö (`/tjanster`, `/om-oss`).
  Varje sida exporterar `metadata` med `title`, `description` och `alternates.canonical`.
  Nya sidor läggs även in i `app/sitemap.ts` och vid behov i `nav` i `lib/site.ts`.
- `components/` – serverkomponenter som standard. `"use client"` bara vid
  behov av state (meny, formulär).
- `LANSERING.md` – checklista över allt som måste bekräftas före lansering.
  Uppdatera den när en punkt blir klar eller en ny osäkerhet tillkommer.

## Next.js 16-detaljer

- `cacheComponents` och `partialPrefetching` är på. Alla sidor ska förbli statiska
  (`○` i byggutskriften).
- `useSearchParams`/`usePathname` i klientkomponenter kan kräva en `Suspense`-gräns
  (se `app/kontakt/page.tsx`).
- Lintern förbjuder `setState` direkt i `useEffect` och komponenter som
  definieras inne i andra komponenter.
- `LayoutProps`/`PageProps` genereras av `next typegen`; kör `npm run typecheck`, inte bara `tsc`.

## Affärs- och säkerhetsregler (får inte brytas)

- Ingen inloggning, betalning, databas, analysverktyg, spårningskakor eller
  serverlagring av personuppgifter utan uttryckligt beslut från ägaren.
- Förfrågningsformuläret öppnar besökarens e-postapp (`mailto`). Det får inte
  efterfråga hälsa, diagnoser, läkemedel eller andra känsliga uppgifter.
- Beskriv aldrig verksamheten som kommunal hemtjänst, vård, omsorg eller medicinsk hjälp.
- Inga påståenden om försäkring, F-skatt, certifieringar, myndighetsgodkännanden,
  antal kunder, omdömen eller "populäraste paket" förrän ägaren har verifierat dem.
- RUT (ägarbeslut okt 2026): priser får visas efter RUT, men alltid tillsammans med
  priset inklusive moms före RUT och förbehållet att RUT bara gäller berättigade
  arbetsmoment och kunder (`rutNote`). Skriv aldrig att en hel tjänst garanterat ger RUT.
- Pilotpriser och villkor bekräftas skriftligt före avtal tills `LANSERING.md` säger
  annat. Lägg inte in priser i strukturerad data (`components/JsonLd.tsx`).
- Inga hemligheter eller API-nycklar i koden eller i GitHub. `NEXT_PUBLIC_SITE_URL`
  är den enda miljövariabeln och den är inte hemlig.

## Text och ton

- All text på svenska, med å, ä och ö. Varm, saklig och konkret – inga
  säljfloskler eller AI-fraser ("i dagens samhälle", "skräddarsydd", "sömlös").
- Konkreta lokala exempel (Byälven, torget, biblioteket) framför abstrakta löften.
- Knappar börjar med verb: "Ring 076-155 20 20", "Skicka en förfrågan".
- Felmeddelanden säger vad som är fel och hur man rättar det, utan att skuldbelägga.

## Design och tillgänglighet

- Mobil först. Testa vid 375 px: inget horisontellt spill och den fasta
  kontaktraden (`CallBar`) får inte dölja innehåll.
- Färger och fonter finns som tokens i `app/globals.css` (`linen`, `paper`, `sage`,
  `spruce`, `clay` …). Lägg inte till nya färger utan skäl. Inga gradienter,
  glaseffekter, emojis som ikoner eller stockfoton.
- Grundstorlek 18 px, klickytor minst 48 px, synlig fokusmarkering.
- Använd fonter med vanlig nolla – telefonnumret får inte se ut som "Ø76".
- En `h1` per sida, rubriker i ordning, landmärken för allt innehåll.
  Kör axe (WCAG 2.1 AA) i Chromium vid större ändringar; målet är 0 fel.

## Git och publicering

- Arbeta på en gren, öppna PR mot `main`. Ägaren läser på mobil: skriv
  PR-beskrivningar och sammanfattningar kort, på svenska.
- Vercel är vilande tills vidare (kontots gratisprojekt används av andra projekt).
  Koppla inte in andra hostingtjänster utan att fråga.
- Gör inga destruktiva ändringar (radera filer eller grenar, skriva om historik på
  `main`) utan att först förklara och få godkännande.
