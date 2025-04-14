/* 
Kirjoita funktio nimeltä countdownTimer:
- Ota syötteenä luku (esim. 10) ja simuloi lähtölaskenta konsolissa.
- Tulosta jokainen luku laskevassa järjestyksessä nollaan asti
- Lopuksi tulosta: "Aika loppui!".
*/
function countdownTimer() {
  for (let i = 10; i >= 0; i--) {
    //why does this only work with >= and not with = or <= ?
    console.log(i);
  }
  console.log("Aika loppui!");
}
countdownTimer();
