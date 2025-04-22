/* 
Kirjoita funktio nimeltä validatePassword:
- Käytä silmukkaa salliaksesi käyttäjän syöttää salasana.
- Jos salasana on "oikein123", tulosta: "Salasana oikein!" ja poistu silmukasta.
- Jos salasana on väärä, pyydä käyttäjää uudelleen viestillä: "Yritä uudelleen!".
*/
function validatePassword() {
  while (true) {
    const salasana = prompt("Syötä salasana:");
    if (salasana === "oikein123") {
      console.log("Salasana oikein!");
      break;
    } else {
      console.log("Yritä uudelleen!");
    }
  }
}
validatePassword();
