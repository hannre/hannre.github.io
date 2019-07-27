
interface Parkplatz {
Bezeichnung: string;
Reihen: number;
StellplatzProReihe: number;
}


var gebaude: any = [IBau, GBau, ABau]

var IBau: Parkplatz = {
    Bezeichnung: "I-Bau",
    Reihen: 6,
    StellplatzProReihe: 10,
}

var GBau: Parkplatz = {
    Bezeichnung: "G-Bau",
    Reihen: 4,
    StellplatzProReihe: 20,
}

var ABau: Parkplatz = {
    Bezeichnung: "A-Bau",
    Reihen: 8,
    StellplatzProReihe: 15,
}

function getParkplatze (gebaude: Parkplatz) : number {

    var gesamtStellplatze: number = gebaude.Reihen * gebaude.StellplatzProReihe;
return gesamtStellplatze
}

console.log ("Das I-Gebäude hat " + getParkplatze(IBau) + " Stellplätze");
console.log ("Das G-Gebäude hat " + getParkplatze(GBau) + " Stellplätze");
console.log ("Das A-Gebäude hat " + getParkplatze(ABau) + " Stellplätze");


function aktuellParkplatze (gebaude: Parkplatz, jahreszeit: string): number {
    switch (jahreszeit) {
        case "Winter":
            gebaude.StellplatzProReihe -= 2;
            break;
        case "Herbst":
        case "Frühling":
            gebaude.StellplatzProReihe -= 1;
            break;
    }
    return gebaude.StellplatzProReihe * gebaude.Reihen;
}

console.log ("Der I-Bau hat im Winter " + aktuellParkplatze(IBau, "Winter") + " Stellplätze");
console.log ("Der G-Bau hat im Herbst " + aktuellParkplatze(GBau, "Herbst") + " Stellplätze");

//-------------------------------------------------------------------------------------------------

// Jetzt kommt eine Funktion bei dem zwei Zahlen getauscht werden

var a : number = 5;
var b : number = 3;

console.log (a , b);

let temp: number = a;
a = b;
b = temp

console.log (a , b)



//function swabValues (a:number, b: number): number {
//    console.log (a, b)
//    let temp: number = a;
//    a = b;
//    b = temp;
//    console.log (a, b)
  //  return temp}



//console.log (swabValues(4,10) );

//-----------------------------------------------------------------------------------------------------------

// Aufgabe: Zahlen Array der Größe nach Ordnen

let Zahlen: number[] = [6,5,12,9];

console.log(Zahlen)
for (let i:number=0; i < Zahlen.length; i++) {
var alteZahl: number = Zahlen[i];
var nachsteZahl: number = Zahlen[i+1];

if (alteZahl < nachsteZahl){
    Zahlen[i] = Zahlen[i];
}
else if (alteZahl > nachsteZahl){
    let temp: number = Zahlen[i]
    Zahlen[i] = Zahlen[i+1];
    Zahlen[i+1] = temp;
}

console.log(Zahlen)

}

//---------------------------------------------------------------
console.log(5 + "5")