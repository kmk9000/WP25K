/* Luo funktio nimeltä isEven, joka:
Ottaa yhden parametrin, num.
Palauttaa true, jos num on parillinen, muuten palauttaa false.
Kutsu funktiota arvoilla 4 ja 7.
Tulosta tulokset käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

// bonus
isEven2 = (num) => num % 2 === 0;
console.log(isEven2(6));
console.log(isEven2(9));
