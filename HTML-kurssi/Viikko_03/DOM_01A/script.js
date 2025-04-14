/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/
const button = document.getElementById("nappi");
const content = document.getElementById("sisalto");

// Lisää napille klikkaustapahtuman kuuntelija
button.addEventListener("click", function () {
  content.textContent = "Hei, maailma!";
});
