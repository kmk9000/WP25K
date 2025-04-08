/* Luo muuttuja nimeltä price ja anna sille arvoksi 19.56789.
Käytä .toFixed()-metodia:
Pyöristääksesi hinnan kahden desimaalin tarkkuuteen.
Pyöristääksesi hinnan ilman desimaaleja.
Tulosta molemmat tulokset käyttäen console.log() viestien kera:
"Hinta 2 desimaalilla: 19.57"
"Hinta ilman desimaaleja: 20"
*/
let price = 19.56789;
let n1 = price.toFixed(2);
let n2 = price.toFixed(0);
console.log("Hinta 2 desimaalilla:", n1);
console.log("Hinta ilman desimaaleja:", n2);
