/* 
1. Luo muuttuja num ja aseta sille arvoksi 5.67.
2. Käytä Math.round() metodia sen pyöristämiseen lähimpään kokonaislukuun. 
3. Käytä Math.floor() metodia sen pyöristämiseen alaspäin edelliseen lähimpään kokonaislukuun.
4. Käytä Math.ceil() metodia sen pyöristämiseen ylöspäin seuraavaan lähimpään kokonaislukuun.
5. Tulosta kaikki saamasi tulokset console.log() avulla ja lisää jokaiselle selittävät teksti.
*/
let num = 5.67;
let num1 = Math.round(num);
let num2 = Math.floor(num);
let num3 = Math.ceil(num);
console.log(
  `
  A) pyöristetty lähimpään kokonaislukuun: ${num1}.
  B) pyöristetty alaspäin edelliseen lähimpään kokonaislukuun: ${num2}.
  C) pyöristetty ylöspäin seuraavaan lähimpään kokonaislukuun: ${num3}.`
);
