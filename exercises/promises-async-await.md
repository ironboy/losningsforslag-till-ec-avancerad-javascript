#  Övningar: Promises och async/await i JavaScript

Genomför övningarna för att träna på asynkron JavaScript. Använd **async/await** som standard – utom där något annat anges. Alla API-övningar använder https://jsonplaceholder.typicode.com (ett gratis test-API).

**Tips:** Kör antingen i webbläsaren (modul-script) eller i Node (glöm inte `"type": "module"` i package.json).

### Trafikljuset
(Tränar att skapa egna promises)

* Skriv en funktion `sleep(ms)` som returnerar ett promise som resolvar efter `ms` millisekunder.
* Skriv sedan en async-funktion `trafficLight()` som loggar `"🔴 Rött"`, väntar 3 sekunder, loggar `"🟡 Gult"`, väntar 1 sekund, loggar `"🟢 Grönt"`.
* **Utmaning:** Låt trafikljuset loopa för evigt (grönt i 3 sekunder, sedan gult, sedan rött igen...).

### Den opålitliga servern
(Tränar resolve/reject och felhantering)

* Skriv en funktion `unreliableRequest()` som returnerar ett promise. Efter 1 sekund ska det med 50 % sannolikhet resolva med strängen `"Här är din data!"` – annars rejecta med `"Servern svarar inte."`.
* Anropa funktionen från en async-funktion med `try`/`catch` och logga resultatet, oavsett utfall.
* **Utmaning:** Skriv en funktion `stubbornRequest()` som anropar `unreliableRequest` om och om igen tills den lyckas, och loggar hur många försök som krävdes.

### Hämta en användare
(Tränar fetch + async/await)

* Skriv en async-funktion `getUser(id)` som hämtar `https://jsonplaceholder.typicode.com/users/{id}` och returnerar användar-objektet.
* Anropa funktionen och logga användarens `name` och `email`.
* Lägg till felhantering: om `response.ok` är `false`, kasta ett fel med statuskoden. Testa genom att hämta id 9999.

### Användarens todos
(Tränar beroende anrop – när det ena måste vänta på det andra)

* Skriv en async-funktion `getUserTodos(userId)` som:
  1. hämtar användaren (som i förra övningen)
  2. sedan hämtar `https://jsonplaceholder.typicode.com/todos?userId={userId}`
  3. returnerar ett objekt: `{ name: användarens namn, todos: arrayen med todos }`
* Logga hur många av användarens todos som är avklarade (`completed === true`). Här passar `filter` bra!

### Alla på en gång
(Tränar Promise.all)

* Hämta användarna med id 1, 2 och 3 **parallellt** med `Promise.all` och logga deras namn.
* Skriv om så att funktionen tar en array av id:n av valfri längd: `getUsers([1, 2, 3, 4])`. Här passar `map` bra – mappa id:n till promises och skicka till `Promise.all`.
* **Att fundera på:** Vad händer med `Promise.all` om ett av id:na är 9999? Testa! Vilken metod kan du byta till om du vill ha resultaten för de som *lyckades*?

### Från then till await
(Tränar att läsa den äldre syntaxen)

Skriv om följande kod till async/await med try/catch:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(post => {
    console.log(post.title);
    return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  })
  .then(response => response.json())
  .then(user => {
    console.log('Skriven av: ' + user.name);
  })
  .catch(error => {
    console.log('Något gick fel', error);
  });
```

##### Att fundera på
* Vilken version tycker du är lättast att läsa? Varför?
* I vilka av övningarna ovan hade det varit *fel* att använda `Promise.all`? (Ledtråd: när beror ett anrop på svaret från ett annat?)