/* 
Luo muuttuja userInput ja anna sille arvo "25.75 omenaa".
Käytä parseFloat() metodia irrottamaan numeerinen arvo muuttujasta.
Käytä .toFixed() tuloksen pyöristämiseen 1 desimaalin tarkkuudella.
Tulosta luku console.log().


(Jos syöte eli input ei ala numerolla, tulos on NaN.)
Esimerkkivastaukset:
"25.8" (kun syöte alkaa numerolla).
"NaN" (kun syöte ei kelpaa).

 */
let userInput = "25.75 omenaa";
let x = parseFloat(userInput);
let y = x.toFixed(1);
console.log(y);

//better way to do it
console.log(parseFloat(userInput).toFixed(1));
