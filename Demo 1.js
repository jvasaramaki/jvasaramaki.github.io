console.log("Kohta A")
/* Kohta A
ja monirivinen kommentti */
let admin; //muuttujan esittely
let nimi; //muuttujan esittely

nimi = "Juha"; //muuttujalle arvo
admin = nimi; //muuttujan arvo sijoitetaan toiselle muuttujalle

console.log(admin);//tulostetaan konsoliin muuttujan admin arvo

console.log("Kohta B")
/* Kohta B */
let planeetta;
let guest;

console.log("Kohta C")
/* Kohta C */
let sade;
let piiri;
let ala
let halkaisija = 3;

sade = halkaisija / 2;
piiri = 2 * Math.PI * sade;
ala = Math.PI * sade * sade;

console.log("Ympyrän säde on " + sade + ", piiri on " + piiri + " ja pinta-ala on " + ala);

let matka = 370
let kulutus100 = 5.5;
let hinta_bensiini = 1.56;
let hinta_matka;

hinta_matka = kulutus100 * matka/100 * hinta_bensiini;
/* bensaa kuluu 5.5*370/100 ja se maksaa kulutus bensan hinta */
console.log("Matka maksaa " + hinta_matka + "euroa");