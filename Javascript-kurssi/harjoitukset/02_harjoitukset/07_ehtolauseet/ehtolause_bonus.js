/* Tämä tehtävä on vapaaehtoinen.

Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. 
Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma antaa satunnaisen vastauksen 8-pallosta. 
Määrittele itse vastausvaihtoehdot. 
Tarvitset tähän tehtävään myös html-sivua ja sinne prompt() kysymyksen esittämiseen. */

function magic8Ball(userInput) {
  return Math.floor(Math.random() * 8) + 1;
}

function fortune(magic8Ball) {
  switch (magic8Ball) {
    case 1:
      console.log("Never.");
      break;
    case 2:
      console.log("Highly improbable.");
      break;
    case 3:
      console.log("Unlikely...");
      break;
    case 4:
      console.log("Maybe.");
      break;
    case 1:
      console.log("Decent chance.");
      break;
    case 5:
      console.log("Very likely.");
      break;
    case 6:
      console.log("It's almost guaranteed.");
      break;
    case 7:
      console.log("Definitely!!");
      break;
    case 8:
      console.log("Ask again later.");
      break;
  }
}
