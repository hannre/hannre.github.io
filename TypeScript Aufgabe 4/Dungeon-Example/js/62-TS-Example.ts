// BEISPIEL UND AUFGABE:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden können.
// Hier wird ein ungefährer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.

// EINGEBAUTE FEHLER: Innerhalb jedes Programmteiles wurden ein paar fiese Fehler eingebaut!
// Diese werden vermutlich erst in der Browser-Konsole angezeigt. 
// Testet also alle Funktionen, jeden Button welchen ihr finden könnt!
// Hilfe: Benutzt auf Verdacht ein Konsolen-Log oder ruft die Variable in der Konsole des Browsers auf.
// Hilfe2: Betrachtet den umliegenden Code. Trackt die Werte von Variablen, falls euch etwas komisch vorkommt!

// ------- interfaces --------- //
// INSGESAMT EINGEBAUTE FEHLER beu den interfaces: Keine. (0 / null)

// Monster sind vielfältig und können sehr unterschiedlich sein. Dennoch werden sie durch allgemeine Attribute, wie Name und Lebenspunkte, vereint.
// Deshalb wird hier ein interface genutzt!
// Ein interface erlaubt das erstellen von einem ungefährem Haupt-Objekt.
// Object = Komplexer Datentyp auf Grundlage primitiver Datentypen

interface Monster {
    monsterName: string; // Name des Monsters
    monsterHealthPoints: number; // Lebenspunkte
    monsterExperience: number; // Erfahrungspunkte bei besiegen des Monsters
    monsterModifier: string[]; // Monster-Verstärker. Diese sind in diesem Fall nur Text! (Da hier einfacher Zufall für die Auswahl genutzt wird, kann der gleiche Eintrag auch doppelt vorkommen)
    monsterWaffe: string;
    monsterImage: string;
    monsterLevel: number;
}


// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer)

let monsterHolder: string = "monsterHoldingCell";                                  // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.

let playerName: string = "Spielername";                                            // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP: number = 0;                                                          // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel: number = 500;                                                // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
let playerLevel: number = 1;

let newpicture: string;

// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix: string[] = ["Wald-", "böse-lachende(s/r) ", "wild-herumspringende(s/r) ", "Cola-trinkende(s/r) ", "verfluchte(s/r) ", "schrecklich-singende(s/r) "]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName: string[] = ["Ratte", "Nagetier", "Ungeziefer", "Schwamm", "Fliege", "Zitrone", "Teddybär", "Schrank"]; // length = 3, da 3 Einträge. Von 0-2.
let suffix: string[] = [" aus der Hölle", " des Verwesens", " aus dem Exil", " aus dem Wald", " aus dem Dschungel", " aus Deutschland"]; // length = 6, da hier 6 Einträge sind. Von 0-5.

let monsterModifers: string[] = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "Verfehlt häufig", "Prokrastiniert", "Müde", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.

let monsterWaffe: string[] = [" Pfannkuchen", " Stein", " Flasche", " Blumenvase", " Baguette"];

let Bildquellen: string[] = ["ratte.png", "nagetier.png", "ungeziefer.png", "schwamm.jpg", "fliege.jpg", "zitrone.jpg", "teddybär.jpg", "schrank.png"];

let pushArray: number[] = [];

// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray: Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.


// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf)
// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {

    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(0);     // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    document.getElementById("pushArray1").addEventListener("click", pushIt);

    document.getElementById("fightAll").addEventListener("click", fightAllMonsters, false);
    document.getElementById("fightAllWeak").addEventListener("click", fightAllWeakMonsters, false);
    document.getElementById("fightWeakest").addEventListener("click", fightWeakestMonster, false);
}

//console.log(document.getElementById("monsterSpawner").innerHTML);


// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() {
    
    let moremonster: number = getRNGNumber(3) + 1;

    for (let i: number = 0; i < moremonster; i++) {   //zufällige Monster-Anzahl zwischen 1-3 werden erzeugt

        let newMonsterName: string = generateMonsterName();                // Eigens-gebaute Funktion, welche einen string zurück gibt.
        let newMonsterHP: number = generateMonsterHitPoints();             // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterXP: number = generateMonsterXP();                    // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterModifier: string[] = generateMonsterModifer();       // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
        let newMonsterWaffe: string = generateMonsterWaffe();
        let newMonsterImage: string = generateMonsterImage();
        let newMonsterLevel: number = getRNGNumber (11);

        let newMonster: Monster = {                                        // Monster wird erstellt.
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
            // monsterMoney : 0, --> nicht im Interface von Monster enthalten
            monsterWaffe: newMonsterWaffe,
            monsterImage: newMonsterImage,
            monsterLevel: newMonsterLevel,
        };

        monsterArray.push(newMonster);                                      // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 

        console.log(monsterArray[monsterArray.length - 1].monsterExperience);                    // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).

        monsterGenerateHTML(monsterArray.length - 1);                           // Triggere die Generierung von HTML
    }
    updateHTML();

}

function updateHTML() {
    
    clearMonsterCell();
    monsterGenerateHTMLAII();
    getMonsterCount ();

}

function clearMonsterCell() {
    let monsterCell = document.getElementById("monsterHoldingCell");
    if (monsterCell.hasChildNodes) { // wenn childnodes (Kindelemente) vorhanden sind, dann soll nachfolgendes ausgeführt werden
        while (monsterCell.firstChild) {
            monsterCell.removeChild (monsterCell.firstChild) //Kindelemente werden gelöscht        
        }
    }
    console.log("Kindelemente des MonsterCell wurden entfernt")
}


function getMonsterCount () {   // tatsächliche Monster-Anzahl wird ausgegeben
    return monsterArray.length;
}

function monsterGenerateHTMLAII() {
    for (let i: number = 0; i < monsterArray.length; i++) {

        console.log("Es wurden " + i + " Monster generiert");
        monsterGenerateHTML(i);
    }

}

// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML(count: number) {
    let holdingDiv: HTMLElement = document.createElement("div");       // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + count);     // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster");                        // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv);     // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"

    let monsterName: HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterName.innerHTML = monsterArray[count].monsterName;                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterMod: HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[count].monsterModifier[0] + ", " + monsterArray[count].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterWaffe: HTMLElement = document.createElement("p");
    monsterWaffe.innerHTML = "Dieses Monster hat als Waffe ein(e) " + monsterArray[count].monsterWaffe;
    holdingDiv.appendChild(monsterWaffe);

    let monsterhpxp: HTMLElement = document.createElement("p");
    monsterhpxp.innerHTML = "Lepenspunkte: " + monsterArray[count].monsterHealthPoints + "; Erfahrungspunkte: " + monsterArray[count].monsterExperience;
    holdingDiv.appendChild(monsterhpxp);

    let monsterImg: HTMLElement = document.createElement("img");       // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", monsterArray[count].monsterImage);                 // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster");            // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg);                                 // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)

    let monsterlev: HTMLElement = document.createElement("p");
    monsterlev.innerHTML = "Monster-Level: " + monsterArray[count].monsterLevel;
    holdingDiv.appendChild(monsterlev);

    let monsterBtn: HTMLElement = document.createElement("BUTTON");    // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Greife das Monster an!";                        // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn);                                 // Füge den Button zu dem holding-div hinzu.

    let monsterCount: number = count;                    // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);

    monsterBtn.addEventListener(                                        // Füge dem Monster eine Funktion hinzu.
        'click', function () {                                           // Wird bei Maus-Click ausgelöst.
            fightMonster(monsterCount);                                 // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false);                                                      // Ignoriert das false.
}


// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber: number): number {
    let rngNumber: number = Math.random();                             // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
    rngNumber = rngNumber * _maxNumber;                                 // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
    rngNumber = Math.floor(rngNumber);                                  // Floore diese Zahl, damit diese nun Ganzzahlig ist.
    // rngNumber = 0;                                                      // Diese Zeile ist einer der drei Fehler in den Funktionen. Ich bin mal so frei und vermerke das hier. Einfach löschen und alles wird besser.
    return rngNumber;                                                   // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.
}


// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName(): string {
    let generatedMonsterName: string = ""; // Erstelle einen leeren String für das Monster

    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber: number = getRNGNumber(prefix.length);               // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber];                           // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber];                             // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber];                          // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    return generatedMonsterName;
}


// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints(): number {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP: number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}


// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP(): number {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP: number = 100 + getRNGNumber(550);  //Erfahrungpunkte von 350 auf 450 (+100) erhöht
    return tempMonsterXP;
}


// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer(): string[] {
    let tempMonsterMod: string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
}

function generateMonsterWaffe(): string {
    let tempMonsterWaffe: string;
    tempMonsterWaffe = monsterWaffe[getRNGNumber(monsterWaffe.length)];

    return tempMonsterWaffe;
}



function generateMonsterImage(): string {
    let rngNumber: number = getRNGNumber(Bildquellen.length);                 // Diese Funktion gibt einen zufälligen Bild-Pfad zurück.
    return Bildquellen[rngNumber];
}


function fightAllMonsters () {
    for (let i: number = monsterArray.length -1; i >= 0; i--)
    {
        fightMonster(i);
    }
    console.log("Alle Monster werden bekämpft!")
}

function fightAllWeakMonsters () {
    for (let i: number = monsterArray.length - 1; i >= 0; i--)  // Array geht von hinten nach vorne durch, umgeht dadurch das Problem der Array-Verrückung
    {
        if (monsterArray[i].monsterLevel < playerLevel) {
            fightMonster(i);
        }
    }

}

function fightWeakestMonster () {
    let indexWeakestMonster : number = 0;
    let findWeakestMonster: number = monsterArray[0].monsterLevel;

    for (let i: number = monsterArray.length - 1; i >= 0; i--)
    {
        if (monsterArray[i].monsterLevel < findWeakestMonster)    // schwächstes Monster wird gesucht
        {
            indexWeakestMonster = i;
            findWeakestMonster = monsterArray[i].monsterLevel;
        } 
    } 
    
    console.log("Das schwächste Monster ist " + indexWeakestMonster);

    if (monsterArray[indexWeakestMonster].monsterLevel < playerLevel)
    {
        fightMonster(indexWeakestMonster);   // schwächstes Monster wird bekämpft
    }
    

}


// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index: number) {
                        // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
   //                        

   if (playerLevel > monsterArray[_index].monsterLevel){    

       playerXP += monsterArray[_index].monsterExperience;
        console.log("Spieler kämpft gegen Monster und gewinnt!");
        monsterArray.splice(_index,1);  //??? hier wird nur richtiges monster entfernt wenn -1 hinter index steht, ansonsten wird immer das letzte monster entfernt
        updateHTML ();
    }
    else if (playerLevel < monsterArray[_index].monsterLevel){
       
       playerXP -= monsterArray[_index].monsterExperience;
       console.log("Das Monster weigert sich zu verschwinden."); 
     
       updateHTML ();
    }

   // playerXP += monsterArray[_index - 1].monsterExperience;                 	    // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.

    updatePlayerLevel(0);
    //monsterArray.splice(_index - 1,1);
    ///updateHTML();
}


// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel(XPChange: number) {
    if (playerXP + XPChange > 0)
    {playerXP += XPChange}
    else 
    {playerXP = 0}
    
    
    playerLevel = Math.floor(playerXP / playerXPperLevel) + 1;  // Spieler-Level = XP / XPproLevel
                                                                              
    document.getElementById("xpCounter").innerHTML = "Player-Level: " + playerLevel + " (XP: " + playerXP + " / " + (playerLevel * playerXPperLevel) + ")";       // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + playerLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.

    if (playerLevel == 20){
        alert ("Du hast das Spiel gewonnen!")

    }

}

let Zahl: number = 1

function pushIt() {

    pushArray.push(Zahl);
    console.log(pushArray);
}