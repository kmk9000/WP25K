/* Määritä muuttuja nimeltä word ja anna sille arvoksi "JavaScript".
    Käytä hakasulkunotaatiota päästäksesi käsiksi:
    Merkkijonon ensimmäiseen merkkiin.
    Merkkijonon viimeiseen merkkiin.
    Tulosta näiden avulla viestit, kuten:
    "The first character is J."
    "The last character is t."
    */
let word = "Javascript";
let first = word[0];
let last = word[word.length - 1];
console.log(`The first character is ${first}`);
console.log(`The last letter is ${last}`);
