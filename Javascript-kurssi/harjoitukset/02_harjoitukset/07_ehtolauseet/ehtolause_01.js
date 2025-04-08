/* 
Kirjoita funktio nimeltä checkAdult:
Ota ikä parametrina.
Jos ikä on 18 tai enemmän, palauta "Olet aikuinen."
Muussa tapauksessa älä palauta mitään.
Kutsu funktiota eri ikäarvoilla ja tulosta tulos.
*/
function checkAdult(age) {
  if (age >= 18) {
    return "Olet aikuinen";
  }
}
console.log(checkAdult(74));
console.log(checkAdult(12));
