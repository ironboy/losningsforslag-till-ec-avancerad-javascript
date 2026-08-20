# Lösningsförslag – första veckans övningar - Avancerad JavaScript

En mapp per övningsområde, med samma namn som motsvarande markdown-fil under
`exercises/`. Filnamnen är numrerade efter övningarnas ordning i markdown-filen;
övningens svenska rubrik står i kommentaren högst upp i varje fil.

Alla kodkommentarer är på engelska, liksom mapp- och filnamn och klass-, metod-
och variabelnamn. `package.json` här i mappen sätter `"type": "module"`, så allt
körs som ES-moduler.

## Kör allt

```bash
node index.js
```

`index.js` kör de fyra områdena i tur och ordning, och varje område har en egen
`index.js` som kör sina övningar i ordning. Importerna är dynamiska och
`await`:ade – ett vanligt `import './x.js'` hade inte hållit ordningen, eftersom
moduler med top-level await inte blockerar sina syskon. Hela körningen tar cirka
25 sekunder och kräver internet för promise-övningarna.

Ett enskilt område körs med `node <område>/index.js`, och enskilda filer lika bra var för sig:

## classes-oop

En klass per fil med `export default`, i en undermapp per övning. Huvudfilen
importerar klasserna och kör en liten demo.

```bash
node classes-oop/01-musician.js
node classes-oop/02-russian-doll.js
node classes-oop/03-housing.js
```

| Övning | Huvudfil | Klasser |
| --- | --- | --- |
| Rockband | `01-musician.js` | `Musician`, `Band` |
| Ryska dockor | `02-russian-doll.js` | `RussianDoll` |
| Bostäder | `03-housing.js` | `Address`, `Person`, `Loan`, `Home`, `Rental`, `Condo`, `House` |

## arrow-functions-and-array-methods

```bash
node arrow-functions-and-array-methods/01-translation-agency.js
node arrow-functions-and-array-methods/02-candy-shop.js
node arrow-functions-and-array-methods/03-cash-register.js
```

## promises-async-await

Övning 3–6 hämtar data från jsonplaceholder.typicode.com och kräver internet.

```bash
node promises-async-await/01-traffic-light.js   # tar ~16 sekunder
node promises-async-await/02-unreliable-server.js
node promises-async-await/03-get-user.js
node promises-async-await/04-user-todos.js
node promises-async-await/05-all-at-once.js
node promises-async-await/06-then-to-await.js
```

## modules

Se `modules/README.md`. Övning 4 körs i webbläsaren via en enkel server (t.ex. kan du installera LiveServer som VSC-tillägg och öppna index.html-filen med LiveServer).
