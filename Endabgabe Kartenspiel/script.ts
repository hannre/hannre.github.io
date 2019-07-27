// TypeScript für Endabgabe Kartenspiel

interface Karte {
    farbe: string;
    wertigkeit: string;}


// ---- Variablen ---- //
let kartenFarben: string [] = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
let kartenWertigkeiten: string [] = ["1","2","3","4","5","6","7","8"];
let kartenStapel: any[] = [];
let ablageStapel: any[] = [];
let handSpStapel: any[] = [];
let handGeStapel: any[] = [];


window.onload = function () {
    generateKarte();
    document.getElementById("Verteiler").addEventListener("click", kartenVerteilen);
    document.getElementById("ziehStapel").addEventListener("click", karteSpZiehen);

}

function generateKarte() {

  
    for (let i:number=0; i<kartenFarben.length; i++){

        for (let k:number=0; k<kartenWertigkeiten.length; k++) {
            let neueKarte: Karte = {
            farbe:kartenFarben[i],
            wertigkeit:kartenWertigkeiten[k]}

            kartenStapel.push(neueKarte);

            //kartenStapel.sort(function(){return 0.5 - Math.random();}) // mischelt irgendwie nicht richtig durch, manche Karten kommen öfters vor (siehe rote Karten), andere fehlen komplett (siehe blaue Karten)
            
            //let shuffle = function () {return Math.random()-0.5;};
            //kartenStapel.sort(shuffle);                   // das gleiche wie bei der vorherigen Möglichkeit (wird nicht richtig gemischelt)

            shuffle(kartenStapel);  
            
            // ziehStapelGenerateHTML (kartenStapel.length-1)    // hier werden die einzelnen Stellen der Reihe nach an ziehStapelGenerateHTML weitergegeben
            
        }
    }
    preZiehStapelGenerateHTML ();
}

function shuffle (kartenStapel: any) {      // mischelt den ZiehStappel durch

    let arrayLength = kartenStapel.length;
    for (let i:number = 0; i < arrayLength; i++){
        let j: number = Math.floor ( Math.random() * (arrayLength-1));  // "j" ist eine zufällige Nummer aus dem Array
        let tempi: number = kartenStapel[i];
        let tempj: number = kartenStapel[j];
        kartenStapel[i] = tempj;        // aktuelle Arraynummer wird mir dem zufällig generierten ausgetauscht
        kartenStapel[j] = tempi;
    }
    return kartenStapel;
}

function preZiehStapelGenerateHTML () {  // hier soll das neu gemischelte kartenStapel-Array durchgegangen werden und jeder Wert an ziehStapelGenerateHTML vermittelt werden

    for (let i:number = 0; i< kartenStapel.length; i++) {

        ziehStapelGenerateHTML(i);
    }
}

function ziehStapelGenerateHTML (count:number) {

let kartenDiv: HTMLElement = document.createElement("div");
//kartenDiv.setAttribute("class", "Karten");
document.getElementById("ziehStapel").appendChild(kartenDiv);

kartenDiv.setAttribute ("class", "Karten black");

}

function handSpStapelGenerateHTML (count:number) {

    let kartenDiv: HTMLElement = document.createElement("div");
    document.getElementById("handkartenSpieler").appendChild(kartenDiv);
    
    let kartenWert: HTMLElement = document.createElement("p");
    kartenWert.innerHTML = handSpStapel[count].wertigkeit;
    kartenDiv.appendChild(kartenWert);
    
    let kartenWertU: HTMLElement = document.createElement("p");
    kartenWertU.innerHTML = handSpStapel[count].wertigkeit; 
    kartenWertU.setAttribute("id", "umgedreht");
    kartenDiv.appendChild(kartenWertU);
    
    switch (handSpStapel[count].farbe) {
    
    case "#ff0000":
        kartenDiv.setAttribute ("class", "Karten karteRot");
        break;
    
    case "#00ff00":
        kartenDiv.setAttribute ("class", "Karten karteGrün");
        break;
    
    case "#0000ff":
        kartenDiv.setAttribute ("class", "Karten karteBlau");
        break;
    
    case "#ffff00":
        kartenDiv.setAttribute ("class", "Karten karteGelb");
        break;
    }
    kartenDiv.addEventListener("click", function(){karteSpLegen(count)},false);
}

    function handGeStapelGenerateHTML (count:number) {

        let kartenDiv: HTMLElement = document.createElement("div");
        document.getElementById("handkartenGegner").appendChild(kartenDiv);
        
        kartenDiv.setAttribute ("class", "Karten black");
        }

    function ablageStapelGenerateHTML (count:number) {

        let kartenDiv: HTMLElement = document.createElement("div");
        document.getElementById("ablageStapel").appendChild(kartenDiv);
        
        let kartenWert: HTMLElement = document.createElement("p");
        kartenWert.innerHTML = ablageStapel[count].wertigkeit;
        kartenDiv.appendChild(kartenWert);
        
        let kartenWertU: HTMLElement = document.createElement("p");
        kartenWertU.innerHTML = ablageStapel[count].wertigkeit; 
        kartenWertU.setAttribute("id", "umgedreht");
        kartenDiv.appendChild(kartenWertU);
        
        switch (ablageStapel[count].farbe) {
        
        case "#ff0000":
            kartenDiv.setAttribute ("class", "Karten karteRot");
            break;
        
        case "#00ff00":
            kartenDiv.setAttribute ("class", "Karten karteGrün");
            break;
        
        case "#0000ff":
            kartenDiv.setAttribute ("class", "Karten karteBlau");
            break;
        
        case "#ffff00":
            kartenDiv.setAttribute ("class", "Karten karteGelb");
            break;
        }
        }




function kartenVerteilen () {

    let divButton = document.getElementById("divKartVerteiler");
    if (divButton.hasChildNodes) { // wenn childnodes (Kindelemente) vorhanden sind, dann soll nachfolgendes ausgeführt werden
        while (divButton.firstChild) {
            divButton.removeChild (divButton.firstChild) //Kindelemente werden gelöscht        
        }
    }

let p: number = kartenStapel.length;
let q: number = handSpStapel.length;
let t: number = handGeStapel.length;

let a: number = kartenStapel.length-1; // letzte/oberste Karte der Ziehkarten-Stapels (Array)
let b: number = kartenStapel.length-2; // zweitletzte Karte
let c: number = kartenStapel.length-3;
let d: number = kartenStapel.length-4;
let e: number = kartenStapel.length-5;

console.log ("KartenStapel-Array hat eine Länge von " + p);
console.log ("Spieler-Handkarten-Array hat eine Länge von " + q);
console.log ("Gegner-Handkarten-Array hat eine Länge von " + t);

handSpStapel.push(kartenStapel[a], kartenStapel[b], kartenStapel[c], kartenStapel[d], kartenStapel[e]);

kartenStapel.splice(e, 5);

p = kartenStapel.length;
q = handSpStapel.length;

console.log ("KartenStapel-Array hat eine Länge von " + p);
console.log ("Spieler-Handkarten-Array hat eine Länge von " + q);

a = kartenStapel.length-1; // letzte/oberste Karte der Ziehkarten-Stapels (Array)
b = kartenStapel.length-2; // zweitletzte Karte
c = kartenStapel.length-3;
d = kartenStapel.length-4;
e = kartenStapel.length-5;

handGeStapel.push(kartenStapel[a], kartenStapel[b], kartenStapel[c], kartenStapel[d], kartenStapel[e]);

kartenStapel.splice(e, 5);

p = kartenStapel.length; 
t = handGeStapel.length;

console.log ("KartenStapel-Array hat eine Länge von " + p);
console.log ("Gegner-Handkarten-Array hat eine Länge von " + t);

ablageStapel.push(kartenStapel[kartenStapel.length-1]);

kartenStapel.splice(kartenStapel.length-1, 1);

for (let i:number = 0; i< handSpStapel.length; i++) {
    handSpStapelGenerateHTML(i);
    handGeStapelGenerateHTML(i);
}
updateHTML ();
}



function karteSpZiehen () {
    if(kartenStapel.length > 0){
        handSpStapel.push(kartenStapel[kartenStapel.length-1]);
        kartenStapel.splice(kartenStapel.length-1, 1);
        updateHTML();
        if(kartenStapel.length <= 0){
            stapelNeuMischen();
        }
        gegnerRunde();
    }
}

function karteSpLegen (index : number) {
    if(handSpStapel[index].farbe == ablageStapel[ablageStapel.length-1].farbe || handSpStapel[index].wertigkeit == ablageStapel[ablageStapel.length-1].wertigkeit){
        ablageStapel.push(handSpStapel[index]);
        handSpStapel.splice(index, 1);
        updateHTML();
        if(!gewonnen(handSpStapel.length, "Spieler")){
            gegnerRunde();
        };
    }

}

function updateHTML () {
    clearDIVs ();

    for (let i:number = 0; i< handSpStapel.length; i++) {

        handSpStapelGenerateHTML(i);
    }

    for (let i:number = 0; i< handGeStapel.length; i++) {

        handGeStapelGenerateHTML(i);
    }

    for (let i:number = 0; i< kartenStapel.length; i++) {

        ziehStapelGenerateHTML(i);
        
    }

    for (let i:number = 0; i< ablageStapel.length; i++) {

        ablageStapelGenerateHTML(i);
        
    }
}

function clearDIVs () {
    let divGegner = document.getElementById("handkartenGegner");
    if (divGegner.hasChildNodes) { // wenn childnodes (Kindelemente) vorhanden sind, dann soll nachfolgendes ausgeführt werden
        while (divGegner.firstChild) {
            divGegner.removeChild (divGegner.firstChild) //Kindelemente werden gelöscht        
        }
    }
    let divAblage = document.getElementById("ablageStapel");
    if (divAblage.hasChildNodes) { // wenn childnodes (Kindelemente) vorhanden sind, dann soll nachfolgendes ausgeführt werden
        while (divAblage.firstChild) {
            divAblage.removeChild (divAblage.firstChild) //Kindelemente werden gelöscht  
        }
    }

    let divZiehen = document.getElementById("ziehStapel");
    if (divZiehen.hasChildNodes) { // wenn childnodes (Kindelemente) vorhanden sind, dann soll nachfolgendes ausgeführt werden
        while (divZiehen.firstChild) {
            divZiehen.removeChild (divZiehen.firstChild) //Kindelemente werden gelöscht  
        }
    }

    let divSpieler = document.getElementById("handkartenSpieler");
    if (divSpieler.hasChildNodes) { // wenn childnodes (Kindelemente) vorhanden sind, dann soll nachfolgendes ausgeführt werden
        while (divSpieler.firstChild) {
            divSpieler.removeChild (divSpieler.firstChild) //Kindelemente werden gelöscht  
        }
    }
}

function gegnerRunde(){
    let gelegt:boolean = false;
    for (let i:number = 0; i< handGeStapel.length; i++) {
        if(handGeStapel[i].farbe == ablageStapel[ablageStapel.length-1].farbe || handGeStapel[i].wertigkeit == ablageStapel[ablageStapel.length-1].wertigkeit){
            ablageStapel.push(handGeStapel[i]);
            handGeStapel.splice(i, 1);
            updateHTML();
            gelegt = true;
            break;
        }
    }
    if(!gelegt){
        if(kartenStapel.length > 0){
            handGeStapel.push(kartenStapel[kartenStapel.length-1]);
            kartenStapel.splice(kartenStapel.length-1, 1);
            updateHTML();
            if(kartenStapel.length <= 0){
                stapelNeuMischen();
            }
        }
    }
    gewonnen(handGeStapel.length, "Computer");
}

function stapelNeuMischen(){
    generateKarte();
}

function gewonnen(anzahl:number, spieler:string): boolean{
    if(anzahl <= 0){
        alert(spieler+" hat gewonnen!");
        return true;
    }
    return false;
}