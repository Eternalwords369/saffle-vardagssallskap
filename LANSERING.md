# Lanseringschecklista

Allt under "Måste bekräftas" ska vara klart innan webbplatsen marknadsförs.
Uppgifterna ändras i `lib/site.ts` om inget annat anges.

## Klart på webbplatsen

- [x] Månadspaketen Fast besök, Vardag och Aktiv (4, 8 och 12 timmar) samt
      Social aktivitet utan RUT (499 kr/h, minst 2 h) – `plans`, `pricing`.
- [x] Priser visas inklusive moms. Priset efter RUT visas bara som "från"
      och med villkoret att all tid ger rätt till RUT (`rutNote`).
- [x] Tid som inte ger RUT räknas som social tid. Kunden betalar aldrig mer
      än paketets pris före RUT.
- [x] Tjänster i två kategorier med RUT-märkning per tjänst, lista över
      vad som inte ingår och vart man vänder sig i stället.
- [x] Komplett villkorsutkast (`app/villkor/page.tsx`) med TODO-kommentarer
      för det som behöver granskas.
- [x] Integritetstext med lagringstider, raderingsrutin och varning om
      hälsouppgifter.
- [x] Kontakt: telefon först, sms, formulär via e-postapp och en reservväg
      som alltid syns.
- [x] Alla sidor är statiska, utan horisontellt spill vid 375 px och utan
      axe-fel (WCAG 2.1 AA). Inga kakor, ingen databas och ingen analys.

## Måste bekräftas

### Skatteverket (helst skriftligt, eller via redovisningskonsult)

- [ ] Vilka av våra moment som ger RUT: promenader, enklare ärenden,
      högläsning, städning och tvätt. Vi utgår från att fika, samtal och
      nöjesaktiviteter inte ger RUT.
- [ ] Om **teknikstöd** (mobil, surfplatta, tv, videosamtal) räknas som
      RUT-berättigad IT-tjänst. Källorna säger emot varandra. Ändra annars
      `rut` för Teknikstöd i `services`.
- [ ] Hur fakturan ska delas upp mellan RUT-tid, social tid och resor.
- [ ] Att 50 % RUT på 598/578/558 kr per timme ger 1 196/2 312/3 348 kr per
      månad (`pricing.rutShare`).

### IVO (Inspektionen för vård och omsorg)

- [ ] Om ledsagning (promenader och ärenden med äldre) och lättare
      hushållshjälp som säljs direkt till privatpersoner kräver tillstånd.
      Webbplatsen beskriver inte tjänsten som hemtjänst eller omsorg, men
      få svaret skriftligt.

### Försäkringsbolag

- [ ] Ansvarsförsäkring för skador i kundens hem. Skriv ingenting om
      försäkring på webbplatsen förrän den finns (villkor punkt 13).
- [ ] Olycksfallsförsäkring för dig själv under promenader och ärenden.

### Redovisningskonsult

- [ ] F-skatt, momsregistrering och att 25 % moms gäller för alla moment.
- [ ] Fakturarutin: månadsvis i efterskott, 15 dagars betalningstid,
      RUT-ansökan och vad som händer när Skatteverket nekar.
- [ ] Att sen avbokningsavgift (299 kr inkl. moms) inte kan få RUT.

### Juridik och konsumenträtt

- [ ] Läs villkoren mot Konsumentverkets vägledning. Särskilt ångerrätten
      (lag 2005:59), avbokningsavgiften och uppsägning med en månads varsel.
- [ ] Lägg till standardformulär för ångerrätt (villkor punkt 11).
- [ ] Integritetstexten: överföring via Gmail (Google), och om
      personuppgiftsbiträdesavtal behövs.

### Egna uppgifter i `lib/site.ts`

- [ ] `site.legalName` och `site.orgNumber` – visas på villkor och integritet.
- [ ] `owner.name`, `owner.background`, `owner.why` och `owner.photo`
      (lägg fotot i `public/`). Hakparenteserna syns på Om oss tills de är
      ifyllda.
- [ ] `terms.travelIncluded` och reseavgift utanför Säffle tätort.
- [ ] **E-post:** kontrollera att `Vardagssallskap@gmail.com` tar emot ett
      testmejl.
- [ ] **Telefon:** ring och sms:a 076-155 20 20 från en annan telefon.
      Röstbrevlådan ska ha ett svenskt välkomstmeddelande.

## Bör göras

- [ ] Avgör om första träffen hemma är kostnadsfri och skriv det i så fall
      i `trust` och på Om oss.
- [ ] Skapa en profil i Google Företagsprofil med samma namn, telefon och
      webbadress. Ange tjänsteområde, inte gatuadress.
- [ ] Publicera (Vercel är vilande tills vidare). Sätt
      `NEXT_PUBLIC_SITE_URL` när en egen domän finns.
- [ ] Ingen nyckelförvaring förrän det finns en skriftlig rutin.

## Avsiktligt utanför piloten

Ingen inloggning, betalning, kunddatabas, analysverktyg eller kakor.
Förfrågningsformuläret öppnar besökarens egen e-postapp, så inga
personuppgifter lagras på webbplatsen.
