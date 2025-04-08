/* 
Kirjoita funktio nimeltä findFox:
Ota kaksi parametria: hasFox ja foxName.
Jos hasFox on tosi JA foxName on "Kikka", palauta "Kikka-kettu on täällä!"
Muussa tapauksessa palauta "No foxes found."
Kutsu funktiota eri ketunnimillä ja hasFox arvoilla.
*/
function findFox(hasFox, foxName) {
  if (hasFox && foxName === "Kikka") {
    console.log("Kikka-kettu on täällä!");
  } else {
    console.log("No foxes found.");
  }
}
findFox(true, "Kikka");
findFox(false, "Kikka");
findFox(true, "Tim");
