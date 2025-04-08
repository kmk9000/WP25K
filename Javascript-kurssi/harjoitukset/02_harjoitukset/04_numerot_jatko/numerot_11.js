/* 
1. Käytä Math.random() metodia satunnaisluvun generoimiseen lukujen 0 ja 1 väliltä.
2. Kerro saamasi tulos kymmenellä ja käytä Math.floor()  metodia sen pyöristämiseen lähimpään kokonaislukuun. 
3. Tulosta lopputulos console.log() avulla, jossa viesti on esimerkiksi: "Arvottu lukusi on 4"
*/

let x = Math.random();
let y = x * 10;
let z = Math.floor(y);
console.log("arvottu lukusi on ", z);

let a = Math.floor(Math.random() * 10);
console.log("toinen arvottu lukusi on ", a);
