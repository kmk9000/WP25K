//Alkuperäinen data:
const teamMembers = ["Joni", "Emilia", "Mikko", "Sade"];

//1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.
console.log("this is the team:", teamMembers);

// mudar example for 1
teamMembers.forEach((name) => console.log(name));

//2. Poista taulukon ensimmäinen jäsen.
teamMembers.shift();
console.log(teamMembers);

//3. Poista taulukon viimeinen jäsen.
teamMembers.pop();
console.log(teamMembers);

//4. Lisää uusi jäsen "Alex" taulukon alkuun.
teamMembers.unshift("Alex");
console.log(teamMembers);

//5. Lisää uusi jäsen "Linda" taulukon loppuun.
teamMembers.push("Linda");
console.log(teamMembers);

//6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi.
let withoutFirstTwo = teamMembers.slice(2);
console.log(withoutFirstTwo);

//7. Etsi "Mikko":n indeksi taulukossa.
console.log("Mikko's place on the index is ", teamMembers.indexOf("Mikko"));

//8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).
console.log("Jake's place on the index is ", teamMembers.indexOf("Jake"));

//9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta".
teamMembers.splice(2, 1, "Maria", "Netta");
console.log(teamMembers);

//mudar example, this will not run if there's no Mikko
let mikkoIndex = teamMembers.indexOf("Mikko");
if (mikkoIndex !== -1) {
  teamMembers.splice(mikkoIndex, 1, "Maria", "Netta");
}
console.log(
  "Mudar's example of replacing Mikko with Maria and Netta:",
  teamMembers
);

//10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.
//let withAhmad = [...teamMembers, "Ahmad"];
//console.log(withAhmad);

let addAhmad = [...teamMembers, "Ahmad"];
console.log("Added Ahmed", addAhmad);

//11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.
let copy = teamMembers.slice();
console.log(copy);

//12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.
let newMembers = ["Tiina", "Myrsky"];
let twoNewMembers = teamMembers.concat(newMembers);
console.log(twoNewMembers);

//13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon.
let joniIndexes = [];
for (i = 0; i <= teamMembers.length - 1; i++) {
  if (teamMembers[i] == "Joni") {
    joniIndexes.push(i);
  }
}
console.log(joniIndexes);

//14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.
let teamMembersBig = [...teamMembers];
for (i = 0; i <= teamMembers.length - 1; i++) {
  teamMembersBig[i] = teamMembersBig[i].toUpperCase();
}
console.log(teamMembersBig);
// other way to do 14
let teamMembersUp = [];
teamMembers.forEach(function (member) {
  teamMembersUp.push(member.toUpperCase());
});
console.log(teamMembersUp);

//mudar example
let toUpperCaseMudar = teamMembers.map((name) => name.toUpperCase());
console.log(toUpperCaseMudar);

//15. Lajittele `teamMembers` aakkosjärjestykseen.
let teamMembersABC = [...teamMembers].sort();
console.log("Aplhabetically:", teamMembersABC);

//16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.
let teamMembersReversed = [...teamMembers].reverse();
console.log("Reversed:", teamMembersReversed);

//17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".
let isThereAny = teamMembers.some((teamMembers) => teamMembers == "Joni");
console.log("Are there any Joni?", isThereAny);
// in "(teamMembers) => teamMembers == "Joni");" (teamMembers) can be called anything it doesn't matter

//18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.
let over3Letters = teamMembers.every(function (name) {
  return name.length > 3;
});
console.log(over3Letters);

//mudar example
let namesOver3 = teamMembers.every((name) => name.length > 3);
console.log("Kaikki on yli 3 kirjainta:", namesOver3);

// if you wanted to count how many over 3 letter names there are
let longName = 0;
teamMembers.forEach(function (member) {
  if (member.length >= 3) {
    longName++;
  }
});
console.log(`There are ${longName} names with three or more letters`);
