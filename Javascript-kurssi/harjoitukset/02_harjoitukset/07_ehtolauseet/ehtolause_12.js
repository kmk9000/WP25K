/* 
Kirjoita funktio nimeltä checkFoxLover:
Ota kaksi parametria: age ja likesFoxes.
Jos ikä on 18 tai enemmän:
Tarkista, onko likesFoxes tosi.
Jos on, palauta "Olet aikuinen, joka tykkää ketuista!"
Muussa tapauksessa palauta "Et ole kettufani, mutta se on ok!"
Kutsu funktiota eri ikä- ja mieltymysyhdistelmillä. Varmista, että ohjelma toimii halutulla tavalla. 
*/
function checkFoxLover(age, likesFoxes) {
  if (age >= 18) {
    if (likesFoxes) {
      console.log("Olet aikuinen, joka tykkää ketuisita!");
    } else {
      console.log("Et ole kettufani, mutta se on ok!");
    }
  } else {
    console.log("Olet alaikäinen, mutta se on ok!");
  }
}
checkFoxLover(18, true);
checkFoxLover(18, false);
checkFoxLover(5, true);
