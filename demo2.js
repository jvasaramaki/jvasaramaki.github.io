let nimi = prompt("Anna nimesi");
console.log(nimi);

//Kohta A
console.log("Kohta A");
let vuosi = prompt("Minä vuonna ECMAScript-2015 specifikaatio julkistettiin?"); //pyytää käyttäjältä arvon muuttujalle vuosi

if(vuosi < 2015) {
    console.log("Annoit vuoden " + vuosi);
    console.log("Vastaus on liian aikainen...");
}
else if(vuosi > 2015) {
    console.log("Annoit vuoden " + vuosi);
    console.log("Vastaus on liian myöhäinen...");
}
else console.log("Juuri niin, vuosi on totta kai " + vuosi);

/*Kohta B
Kirjoita “if” ehto tarkistamaan, että ikä on välillä 14 ja 90 inklusiivisesti eli ikä voi olla myös raja-arvo 14 tai 90

Kirjoita “if” ehto tarkistamaan, että ikä ei ole välillä 14 ja 90 inklusiivisesti eli ikä voi olla myös raja-arvo 14 tai 90
*/
console.log("Kohta B");
let ika = prompt("Anna ikäsi");
if(ika >= 14 && ika <= 90)  console.log("Ikä on välillä 14 - 90");
if(ika <= 14 || ika >= 90)  console.log("Ikä ei ole välillä 14 - 90");

/*Ehtojen rakentaminen

Laadi seuraavat ehdot (voit testata ehdot asettamalla seuraavat muuttujat):
*/

let luku1 = 0;
let luku2 = "0";
let luku3 = -1;
let luku4 = 1;
let luku5 = 100;

//    jos luku1 on nolla, tulosta "nolla"
if(luku1 === 0) console.log("eka nolla")

//    jos luku2 on nolla, tulosta "nolla"
if(luku2 === 0) console.log("toka nolla")

//jos luku2 on pienempi kuin luku 4, tulosta "luku 2 on pienempi", muuten tulosta "luku 2 ei ole pienempi"
if(luku2 > luku4)  console.log("luku 2 on pienempi")
else    console.log("luku 2 ei ole pienempi")

    //jos luku4 on luku1:n ja $luku5:n välissä, tulosta "välissä"
if(luku4 > luku1 && luku4 < luku5)  console.log("välissä")
else if (luku4 < luku1 || luku4 > luku5) console.log("reunassa")
else console.log("ok")

    //jos luku4 on pienempi kuin luku1 tai suurempi kuin luku5, tulosta "reunassa", muuten tulosta "ok"

    ASD