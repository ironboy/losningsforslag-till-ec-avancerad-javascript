# Övningar: Moduler - JavaScript

**Obs! **Gör dessa övningar efter övningarna kring klasser och arrow-funktioner.

Genomför övningarna för att träna på import och export. Övningarna görs i Node om inget annat sägs – kom ihåg: `npm init -y` och lägg till `"type": "module"` i package.json **innan** du börjar koda!

### Verktygslådan
(Tränar named exports)

* Skapa filen `stringUtils.js` med tre funktioner: `capitalize(str)` (första bokstaven versal), `reverse(str)` (vänder på strängen) och `shout(str)` (versaler + tre utropstecken).
* Exportera alla tre som **named exports**.
* Skapa `main.js` som importerar funktionerna och testar dem på några strängar.
* Kör med `node main.js`.
* **Testa också:** Ta bort `"type": "module"` ur package.json och kör igen. Vilket felmeddelande får du? Lägg tillbaka raden!

### Huvudsaken
(Tränar default export + blandning)

* Skapa filen `BankAccount.js` med en klass `BankAccount` (egenskaper: `owner`, `balance`; metoder: `deposit(amount)`, `withdraw(amount)`). Exportera den som **default**.
* I samma fil: skapa och exportera konstanten `INTEREST_RATE` (t.ex. `0.02`) som **named export**.
* I `main.js`: importera både klassen och konstanten **på samma rad**, skapa ett konto, gör några insättningar och logga saldot plus ett års ränta.

### Godisbutiken flyttar in i moduler
(Tränar att dela upp befintlig kod – återanvänder data från arrow-övningarna)

* Skapa `data.js` som exporterar `candy`-arrayen från arrow-övningarna.
* Skapa `filters.js` som exporterar funktionerna `veganOnly(candyList)` och `cheaperThan(candyList, maxPrice)`.
* Skapa `main.js` som importerar från båda filerna och loggar allt veganskt godis under 125 kr/kg.
* **Att fundera på:** `candy`-arrayen – borde den vara default eller named export? Spelar det någon roll här?

### Samma sak i webbläsaren
(Tränar type="module" i script-taggen)

* Ta godisbutik-projektet från förra övningen och få det att köra i webbläsaren istället: skapa en `index.html` med en script-tagg som laddar `main.js`.
* Öppna sidan och kontrollera att utskrifterna dyker upp i konsolen.
* **Testa också:** Ta bort `type="module"` från script-taggen. Vad säger konsolen?

##### Att fundera på
* Vad är fördelarna med att `data.js` inte vet något om `filters.js` och tvärtom?
* Öppna en godtycklig fil i ett tidigare projekt (t.ex. OOP-övningarna). Hur skulle du dela upp den i moduler? Vad hade blivit default exports?