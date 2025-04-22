/* Kysy käyttäjältä viisi kertaa jotain sanaa. Jos käyttäjä painaa vain "OK" ilman syötettä (eli antaa tyhjän vastauksen), ohita se. 

Tulosta lopuksi konsoliin kaikki annetut sanat. 
 */
function askFiveWords() {
  const words = [];
  for (let i = 1; i <= 5; i++) {
    let word = prompt(`Enter word ${i} of five:`);
    if (word === "") {
      break;
    }
    words.push(word);
  }
  console.log("The words you input:", words);
}
askFiveWords();
