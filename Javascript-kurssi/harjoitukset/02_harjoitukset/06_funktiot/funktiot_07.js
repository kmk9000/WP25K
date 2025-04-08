/* Luo funktio nimeltä containsWord, joka:
Ottaa kaksi parametria, sentence ja word.
Palauttaa true, jos sentence sisältää sanan word, muuten false.
Kutsu funktiota lauseella "JavaScript is fun!" ja sanalla "fun".
Tulosta tulos käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/
function containsWord(sentence, word) {
  return sentence.includes(word);
}
console.log(containsWord("JavaScript is fun!", "fun"));

//bonus
implicit = (sentence, word) => sentence.includes(word);
console.log(implicit("JavaScript is fun!", "fun"));
