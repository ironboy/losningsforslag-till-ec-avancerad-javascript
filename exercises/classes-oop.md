# Övningar klasser/OOP i Javascript

Genomför dessa övningar i OOP i JavaScript för att träna på språkets klassyntax.

##### Notera
När du ser en formulering som "en array av band" så betyder det "en array av objekt där varje objekt är skapat från klassen band".

### Rockband
(Tränar OOP och komposition)

Skapa klasserna *Musician* och *Band*. Båda bör ha namn.

##### Musician
Egenskaper: *name, instrument, age, bands* (en array av band musikern är med i).
Metoder: *joinBand(band), leaveBand(band)*.

**Obs!** Skicka *inte* en sträng till *joinBand* eller *leaveBand* utan ett objekt av klassen Band.

**Obs!** Börja med en tom array *bands* när en musiker skapas. Band läggs till via anrop till *joinBand* och *leaveBand*.

##### Band: 
Egenskaper: *name, members (en array av musiker som är med i bandet)*.
Metoder: *hire(musician), fire(musician)*


**Obs!** Skicka *inte* en sträng till *hire* eller *fire* utan ett objekt av klassen Musician.

**Obs!** Börja med en tom array *members* när ett band skapas. Musiker läggs till via anrop till *hire* och *fire*.

##### Problem/utmaning
* En musikers *bands*-egenskap ska uppdateras oavsett om man anropar *joinBand* och *leaveBand*-metoderna, eller anropar ett bands *hire*- och *fire*-metoder med musikern som inargument.
* En bands *members*-egenskap ska uppdateras oavsett om man anropar *hire*- och *fire*-metdoerna, eller anropar en muskers *joinBand* och *leaveBand*-metoder med bandet som inargument.


### Ryska dockor
(Tränar OOP och komposition)

* Skapa en klass *RussianDoll* som har egenskaperna *size* (ett tal som ska vara 1-10) och *insideMe*, som kan innehålla en annan RussianDoll.
* Skapa en metod för att stoppa in en docka i en annan - *putInsideMe*. Man får inte stoppa in en docka som är lika stor eller större i annan docka. (Stoppa inte in dockor direkt genom att tilldela dem till InsideMe...)
* Skapa en metod *allDollsInsideMe*. Denna ska returnera en array över alla ryska dockor som finns inuti den aktuella dockan.


**Obs!** Skicka *inte* en sträng till *putInsideMe* utan ett objekt av klassen RussianDoll.

##### Att fundera på?
* Ska det vara tillåtet att lägga en docka i en annan docka när den befinner sig inuti en docka? Om inte hur förhindrar vi det?
* Borde det finnas en metod för att ta ut en docka ur en annan docka? När ska det gå att göra detta?

### Övning: Bostäder
(Tränar OOP, arv och komposition)

##### Skapa en klass Adress
En adress ska ha egenskaperna gata, gatunummer, stad och postkod.
Klassen behöver inte ha några metoder.

##### Skapa en klass Person
En person ska ha egenskaperna namn och personnummer.
Klassen behöver inte ha några metoder.

##### Skapa en klass Bostad
En bostad ska ha egenskaperna adress (ett objekt av klassen Adress) och ägare (ett objekt av klassen Person).
Klassen behöver inte ha några metoder.


##### Skapa klasserna Hyresratt, Bostadsratt och Villa.
Dessa ska ärva av klassen bostad. En hyresrätt ska ha en hyra, en bostadsrätt ska ha ett inköpspris och en månadsavgift. En villa ska ha ett inköpspris och driftkostnad (sophämtning, vatten etc).
Lägg till egenskaper i respektive klass.

##### Att fundera på
Kan du utifrån de egenskaper som finns skapa en metod som räknar ut månadskostnad för en viss bostad? Behöver denna metod vara olika för varje klass (Hyressratt, Bostadsratt och Villa)?