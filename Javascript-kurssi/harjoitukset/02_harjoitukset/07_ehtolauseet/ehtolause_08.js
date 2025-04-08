/* 
Kirjoita funktio nimeltä canEat:
Ota kaksi parametria: isHungry ja hasFood.
Jos molemmat ovat tosi, palauta "Aika syödä!".
Jos jompikumpi on epätosi, palauta "Sinun täytyy löytää ruokaa!"
Kutsu funktiota eri isHungry ja hasFood yhdistelmillä.
*/
function canEat(isHungry, hasFood) {
  if (isHungry && hasFood) {
    console.log("Aika syödä!");
  } else if (!isHungry || !hasFood) {
    console.log("Sinun täytyy löytää ruokaa!");
  }
}
canEat(true, true);
canEat(true, false);
canEat(false, true);
canEat(false, false);
