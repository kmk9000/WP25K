/*
- Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
- Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
- Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
- Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
- Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

- Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

- Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
*/

let age = 50;
let name = "Mikko";
let isStudent = true;
let hobbies = ["lukeminen", "jääkiekko", "koripallo"];
let info = {
  schoolName: "Tikkurilan lukio",
  grade: "7",
};
console.log("Age:", age);
console.log("Name:", name);
console.log("Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Info:", info);

console.log("Name Type:", typeof name); // "string"
console.log("Number Type:", typeof age); // "number"
console.log("Student Type:", typeof isStudent); // "boolean"
console.log("Hobbies Type:", typeof hobbies); // "object"
console.log("Schoolname Type:", typeof schoolName);
console.log("Grade Type:", typeof grade);
