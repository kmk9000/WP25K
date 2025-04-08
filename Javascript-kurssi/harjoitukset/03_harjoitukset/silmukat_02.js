// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.
function logEvenNumbers() {
  for (let i = 2; i < 100; i += 2) {
    console.log(i);
  }
}
logEvenNumbers();

/*let i = 1;
  while (i < 100) {
    if (i % 2 === 0);
    {
      console.log(i);
    }
    if (i % 2 != 0);
    {
      console.log(i);
    }
    i++;
  }*/
