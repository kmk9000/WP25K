/* 
Kirjoita funktio nimeltä canEnterEvent:
Ota kaksi parametria: age ja hasID.
Jos ikä on 18 tai enemmän JA hasID on tosi, palauta "Sisäänpääsy myönnetty."
Muussa tapauksessa palauta "Sisäänpääsy evätty."
Kutsu funktiota eri yhdistelmillä age ja hasID.
*/
function canEnterEvent(age, hasID) {
  if (age >= 18 && hasID) {
    console.log("Sisäänpääsy myönnetty.");
  } else {
    console.log("Sisäänpääsy evätty.");
  }
}
canEnterEvent(17, true);
canEnterEvent(18, true);
canEnterEvent(21, false);
