console.log("Test1");
window.onload = function () {
    console.log("Objekte wurden geladen");
    document.getElementById("demo").addEventListener("click", ChangeButton1);
    document.getElementById("demo2").addEventListener("click", DoStuff1);
    document.getElementById("demo3").addEventListener("click", DoStuff2);
    newtext();
};
// -----HTML-Element (hier Button) ändert bei "click" seinen Inhalt-----
function ChangeButton1() {
    console.log("Button 1 wurde geklickt");
    document.getElementById("demo").innerHTML = "Danke, dass du mich geklickt hast!"; //Ändert den Inhalt des Buttons
}
// -----Die Klasse eines HTML-Elements (hier Button) ändert sich (wenn man ihn klickt)-----
function DoStuff1() {
    console.log("Button 2 wurde geklickt");
    document.getElementById("demo2").className = "geklickter Button"; //Soll Klasse des Buttons ändern
    console.log("Die Klasse des Button 2 hat sich in --geklickter Button-- geändert");
}
// -----Ergebnisse verschiedener Rechnungen werden in der Konsole ausgegeben-----
function DoStuff2() {
    console.log("Button 3 wurde geklickt");
    let Zahl1 = 2;
    let Zahl2 = 3;
    let Wort1 = "Guten";
    let Wort2 = "Tag";
    Zahl1 = 3; //Einer bereits deklarierten Variable (hier: number) wird ein neuer Wert zugewiesen
    console.log("Jetzt kommen ein paar Rechnungen");
    console.log(Zahl1 + Zahl2);
    console.log(Wort1 + Wort2);
    console.log(Wort2 + Zahl2);
}
// ----- Erstellen mehrerer (zwei) neuer HTML-Elemete über TypeScript-----
function newtext() {
    let heading = document.createElement("h2");
    let node = document.createTextNode("Diese Überschrift wurde mit TypeScript erstellt!");
    heading.appendChild(node);
    let element = document.getElementById("id3");
    element.appendChild(heading);
    let para = document.createElement("p");
    node = document.createTextNode("Dieser Paragraph wurde mit TypeScript erstellt!");
    para.appendChild(node);
    element = document.getElementById("id3");
    element.appendChild(para);
}
//# sourceMappingURL=script.js.map