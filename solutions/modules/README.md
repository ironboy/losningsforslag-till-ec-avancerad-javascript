# Moduler – lösningsförslag

`"type": "module"` ligger i `solutions/package.json`. Node letar uppåt i
katalogträdet efter närmaste `package.json`, så alla mappar här under ärver
inställningen. I ett riktigt projekt gör du som övningen säger: `npm init -y`
i projektmappen och lägger till raden själv.

## Övning 1–3 (Node)

Kör alla tre på en gång, eller en i taget:

```bash
node index.js

node 01-toolbox/main.js
node 02-bank-account/main.js
node 03-candy-shop/main.js
```

## Övning 4 (webbläsaren)

`04-browser/main.js` importerar `data.js` och `filters.js` rakt från övning 3 –
exakt samma modulfiler kör alltså både i Node och i webbläsaren. Bara
ingångsfilen skiljer, eftersom den även skriver till sidan.

Sidan måste serveras över `http://`. Öppna projektmappen i VS Code, högerklicka
på `04-browser/index.html` och välj *Open with Live Server* – klart.

Öppnar du i stället filen direkt med `file://` vägrar webbläsaren ladda
modulerna: de hämtas med fetch och blockeras av CORS.

Utan Live Server fungerar `npx serve .` här i `modules`-mappen lika bra – öppna
sedan `http://localhost:3000/04-browser/`.
