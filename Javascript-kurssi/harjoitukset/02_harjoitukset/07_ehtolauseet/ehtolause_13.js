/* 
Kirjoita funktio nimeltä planAdventure:
Ota kolme parametria: isWeekend, isSunny ja likesFoxes.
Käytä loogisia operaattoreita:
Jos on viikonloppu JA aurinkoista JA pitää ketuista, palauta "Täydellinen päivä kettuseikkailulle!"
Jos on viikonloppu TAI aurinkoista, palauta "Hyvä päivä, mutta ei täydellinen."
Muussa tapauksessa palauta "Ehkä joku toinen päivä."
Kutsu funktiota eri yhdistelmillä ehtoja.
*/
function planAdventure(isWeekend, isSunny, likesFoxes) {
  if (isWeekend && isSunny && likesFoxes) {
    console.log("Täydellinen päivä kettuseikkailulle!");
  } else if (isWeekend || isSunny) {
    console.log("Hyvä päivä, mutta ei täydellinen.");
  } else {
    console.log("Ehkä joku toinen päivä.");
  }
}
planAdventure(true, true, true);
planAdventure(true, false, true);
planAdventure(true, true, false);
planAdventure(false, true, false);
planAdventure(false, false, false);
