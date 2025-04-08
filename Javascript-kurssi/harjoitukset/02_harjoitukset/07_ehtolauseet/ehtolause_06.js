/* 
Kirjoita funktio nimeltä isEven:
Ota parametrina luku.
Palauta true, jos luku on parillinen, tai false, jos se on pariton.
Kutsu funktiota luvuilla kuten 4 ja 7, ja tulosta "Numero on pariton!" tai "Numero on parillinen!" tuloksen perusteella.
*/
function isEven(luku) {
  return luku % 2 === 0 ? "Numero on parillinen!" : "Numero on pariton!";
}
console.log(isEven(4));
console.log(isEven(7));
/* 0 on epätosi, 1 on tosi
"luku % 2" antaa arvon 0
"luku % 2 === 0" antaa arvon 1, eli nyt tosi arvo voi antaa "parllinen" vastauksen
ole tarkka!*/

/*function isEven2(num) {
  if (num % 2) {
    console.log("Numero on parillinen!");
  } else {
    console.log("Numero on pariton!");
  }
}
isEven2(4);
isEven2(7);*/
