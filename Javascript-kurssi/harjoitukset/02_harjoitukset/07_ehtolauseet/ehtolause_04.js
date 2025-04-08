/* 
Kirjoita funktio nimeltä canVote:
Ota ikä parametrina.
Palauta true, jos ikä on 18 tai enemmän, muuten false.
Tulosta "Saat äänestää" tai "Et saa vielä äänestää" funktion palauttaman tuloksen perusteella.
*/
function canVote(age) {
  if (age >= 18) {
    return "Saat äänestää!";
  } else {
    return "Et saa vielä äänestää";
  }
}
console.log(canVote(18));
console.log(canVote(16));
console.log(canVote(12345));
