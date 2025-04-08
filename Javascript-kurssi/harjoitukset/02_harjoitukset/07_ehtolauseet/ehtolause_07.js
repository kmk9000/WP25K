/* 
Kirjoita funktio nimeltä getAnimalDescription:
Ota parametri favoriteAnimal.

Käytä switch-rakennetta seuraavasti:
- Jos "fox", palauta "Ketut ovat viekkaita ja fiksuja!"
- Jos "dog", palauta "Koirat ovat uskollisia ystäviä."
- Jos "cat", palauta "Kissat ovat kiinnostuneita ja itsenäisiä."

Minkä tahansa muun eläimen kohdalla palauta "Kaikki eläimet ovat mahtavia!"
Kutsu funktiota eri eläinnimillä.
*/
function getAnimalDescription(favoriteAnimal) {
  switch (favoriteAnimal) {
    case "fox":
      console.log("Ketut ovat viekkaita ja fiksuja!");
      break;
    case "dog":
      console.log("Koirat ovat uskollisia ystäviä.");
      break;
    case "cat":
      console.log("Kissat ovat kiinnostuneita ja itsenäisiä");
      break;
    default:
      console.log("Kaikki eläimet ovat mahtavia!");
  }
}
getAnimalDescription("fox");
getAnimalDescription("dog");
getAnimalDescription("cat");
getAnimalDescription("elephant");
