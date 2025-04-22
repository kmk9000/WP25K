/* 
Kirjoita funktio nimeltä buildGroceryList:
- Pyydä käyttäjää syöttämään ruokakauppaostoksia yksi kerrallaan.
- Lopeta, kun käyttäjä kirjoittaa "valmis".
Tulosta koko ostoslista konsoliin.
*/
function buildGroceryList() {
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
      grocerylist.push.userInput.trim();
    }
  }
  console.log("Ostoslista:");
  if (groceryList.length === 0) {
    console.log("(tyhjä)");
  } else {
    groceryList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }

  return groceryList;
}
buildGroceryList();
