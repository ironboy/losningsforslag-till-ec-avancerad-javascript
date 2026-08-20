# Övningar: Arrow-funktioner och array-metoder i JavaScript

Genomför övningarna för att träna på arrow-syntax och kedjor av array-metoder. Använd **arrow-funktioner överallt** där en callback behövs.

### Översättningsbyrån
(Tränar arrow-syntax)

Skriv om följande funktioner till arrow-funktioner. Använd den *kortaste* möjliga formen i varje fall:

```javascript
function triple(x) {
  return x * 3;
}

function greet(name, city) {
  return `Hej ${name} från ${city}!`;
}

function randomDie() {
  return Math.ceil(Math.random() * 6);
}

function makeUser(name, email) {
  return { name: name, email: email };
}

function orderTotal(prices, shipping) {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum + shipping;
}
```

**Obs!** En av dem har en fälla med objekt-literals... och en av dem kan inte kortas till en enda rad (eller? kan `reduce` hjälpa dig?).

### Godisbutiken
(Tränar filter/map/sort-kedjor)

Utgå från denna array:

```javascript
let candy = [
  { name: 'Gelehallon', pricePerKg: 89,  vegan: true },
  { name: 'Lakritsbåtar', pricePerKg: 119, vegan: false },
  { name: 'Sura colanappar', pricePerKg: 99, vegan: true },
  { name: 'Chokladskruvar', pricePerKg: 149, vegan: false },
  { name: 'Polkagriskrossar', pricePerKg: 129, vegan: true }
];
```

Lös varje uppgift med **en enda kedja** av array-metoder:

* Skapa en array med namnen på allt veganskt godis.
* Skapa en array med namnen på allt godis som kostar under 125 kr/kg, sorterad från billigast till dyrast.
* Skapa en array med strängar i formatet `"Gelehallon – 89 kr/kg"` för allt veganskt godis under 100 kr/kg.
* Butiken höjer alla priser med 10 %. Skapa en **ny** array där varje godisobjekt har det nya priset (avrundat till heltal), utan att ändra i originalarrayen.

### Kassaapparaten
(Tränar reduce)

```javascript
let receipt = [
  { item: 'Mjölk', price: 22, quantity: 2 },
  { item: 'Bröd', price: 35, quantity: 1 },
  { item: 'Kaffe', price: 89, quantity: 1 },
  { item: 'Äpple', price: 8, quantity: 6 }
];
```

* Räkna ut totalsumman för kvittot med `reduce`.
* Räkna ut det totala *antalet varor* på kvittot.
* **Utmaning:** Använd `reduce` för att hitta den dyraste raden (pris × antal) på kvittot.
* **Utmaning:** Använd `reduce` för att bygga en sträng av hela kvittot, en rad per vara: `"Mjölk x2 – 44 kr\n..."`.

##### Att fundera på
* I godisbutiken: spelar det roll om du kör `filter` före eller efter `map`? Kan ordningen göra att en kedja slutar fungera?
* Vilka av uppgifterna i Kassaapparaten hade gått att lösa med `filter`/`map` + något mer istället för `reduce`? Vilket sätt tycker du är tydligast?