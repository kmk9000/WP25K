/* Kirjoita funktio nimeltä generateMultiplicationTable:
- Ota syötteenä luku (esim. 5).
- Käytä silmukkaa luodaksesi kertotaulun kyseiselle luvulle.
Tulosta taulu konsoliin.

Esimerkki luvulle 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

*/
function generateMultiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} times ${i} equals ${result}`);
  }
}
generateMultiplicationTable(5);
