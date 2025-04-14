/* 
Kirjoita funktio nimeltä buildGroceryList:
- Pyydä käyttäjää syöttämään ruokakauppaostoksia yksi kerrallaan.
- Lopeta, kun käyttäjä kirjoittaa "valmis".
Tulosta koko ostoslista konsoliin.
*/
function buildGroceryList(str) {
  let grocerylist = [];
  let userInput;
  while (true) {
    userInput = prompt(
      "Syötä ostoslistan tuote (kirjoita 'valmis' lopettaaksesi):"
    );
    if (userinput === "valmis") {
      break;
    }
    if (userInput !== "") {
      grocerylist.push.(userInput.trim());
    }
  }
}
buildGroceryList();
