/* 
Kirjoita funktio nimeltä checkForFox:
Ota looginen parametri hasFox.
Jos hasFox on tosi, palauta "Sinulla on lemmikkikettu!"
Muussa tapauksessa palauta "Ei havaittu kettua!"
Kutsu funktiota arvoilla true ja false ja tulosta tulos.
*/
function checkForFox(hasFox) {
  if (hasFox) {
    return "Sinulla on lemmikkikettu!";
  } else {
    return "Ei havaittu kettua!";
  }
}
console.log(checkForFox(true));
console.log(checkForFox(false));
