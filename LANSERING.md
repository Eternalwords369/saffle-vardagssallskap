# Lanseringschecklista

Allt nedan måste vara bekräftat innan webbplatsen marknadsförs. Uppgifterna
ändras i `lib/site.ts` om inget annat anges.

## Måste bekräftas

- [ ] **E-postadress.** Webbplatsen använder `Vardagssallskap@gmail.com`.
      Kontrollera att kontot är skapat och att ett testmejl kommer fram.
- [ ] **Telefon.** Ring 076-155 20 20 från en annan telefon och kontrollera
      att samtalet kommer fram och att röstbrevlådan har ett svenskt
      välkomstmeddelande.
- [ ] **Priser.** 995, 1 990 och 2 990 kr/månad är preliminära (`plans`).
- [ ] **Moms.** Ange om priserna är inklusive moms (krav vid priser till
      konsumenter).
- [ ] **Resor.** Vilket område ingår, och kostar resor utanför det?
- [ ] **Avtalsperiod och uppsägning.** Bindningstid, uppsägningstid och hur
      man byter paket.
- [ ] **Avbokning.** Vad gäller om kunden avbokar sent eller inte är hemma?
      Och om ni själva måste ställa in?
- [ ] **Villkorssidan** (`app/villkor/page.tsx`) skrivs om när punkterna ovan
      är bestämda. Ta då bort eller förkorta `pendingTerms` i `lib/site.ts`.
- [ ] **Integritetstexten** (`app/integritet/page.tsx`): lägg till firmanamn
      och organisationsnummer som personuppgiftsansvarig. Bekräfta
      lagringstiden (tolv månader för förfrågningar som inte blir avtal).
- [ ] **Ångerrätt.** Låt någon kunnig bekräfta texten om 14 dagars ångerrätt
      på villkorssidan.

## Bör göras

- [ ] Skriv om "Varför vi finns" på Om oss med egna ord, namn och gärna ett
      riktigt foto. Personlig närvaro är det som säljer en sådan här tjänst.
- [ ] Avgör om första träffen är kostnadsfri och skriv i så fall det.
- [ ] Undersök om lättare hushållshjälp kan ge rätt till RUT-avdrag. Skriv
      ingenting om RUT på webbplatsen förrän det är kontrollerat.
- [ ] Skapa en profil i Google Företagsprofil (lokal sökning) med samma namn,
      telefonnummer och webbadress som på webbplatsen.
- [ ] Publicera på Vercel (vilande tills vidare – kontots gratisplan har redan
      andra projekt). Sätt `NEXT_PUBLIC_SITE_URL` när en egen domän finns.
- [ ] Lägg inte till påståenden om försäkring, F-skatt, certifieringar eller
      liknande förrän de är verifierade.

## Avsiktligt utanför första versionen

Ingen inloggning, betalning, kunddatabas, analysverktyg eller kakor.
Förfrågningsformuläret öppnar besökarens egen e-postapp, så inga
personuppgifter lagras på webbplatsen.
