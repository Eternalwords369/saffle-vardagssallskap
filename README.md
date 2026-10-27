# Säffle Vardagssällskap

Webbplats för Säffle Vardagssällskap, en lokal abonnemangstjänst för sällskap
och lättare vardagshjälp i Säffle med omnejd.

Byggd med Next.js (App Router), TypeScript och Tailwind CSS. Alla sidor är
statiska. Det finns ingen databas, inloggning eller betalning, och inga
hemligheter behövs.

**Innan lansering:** gå igenom [LANSERING.md](./LANSERING.md).

## Struktur

| Sökväg | Innehåll |
| --- | --- |
| `lib/site.ts` | Kontaktuppgifter, paket, priser, RUT-text, tjänster, villkorsuppgifter och FAQ – ändra här |
| `app/` | Sidor: start, tjänster, abonnemang, om oss, kontakt, integritet, villkor |
| `components/` | Sidhuvud, meny, sidfot, paketkort, RUT-ruta, förfrågningsformulär |
| `app/sitemap.ts`, `app/robots.ts` | Sökmotorfiler |

## Köra lokalt

Kräver Node.js 20.9 eller senare.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Miljövariabler

| Namn | Exempel | Behövs |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.exempel.se` | När en egen domän finns. Används för sitemap, canonical och delningslänkar. |

Variabeln är inte hemlig. Lägg aldrig API-nycklar i koden eller i GitHub.

## Publicering på Vercel

1. Logga in på vercel.com med GitHub-kontot.
2. **Add New → Project**, välj repot `saffle-vardagssallskap` och tryck
   **Deploy**. Inställningarna identifieras automatiskt.
3. Varje pull request får en egen förhandsadress. Allt som slås ihop till
   huvudgrenen publiceras automatiskt.
