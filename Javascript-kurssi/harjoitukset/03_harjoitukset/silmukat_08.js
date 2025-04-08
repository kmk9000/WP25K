/* 
Kirjota funktio nimeltä findMinMax:
- Kysy käyttäjältä kuinka monta numeroa he haluavat antaa. 
- Sen jälkeen pyydä käyttäjältä heidän haluamansa määrä numeroita. 
- Kun numerot on syötetty päättele ja tulosta konsoliin:
    - Pienin numero.
    - Suurin numero. 
*/

function findMinMax() {
  let numbers = parseFloat(prompt("How many numbers do you want?"));
  console.log(numbers);
  let min;
  let max;
  // kysytään (numeroita) verran kertoja
  for (let i = 0; i < numbers; i++) {
    let newValue = parseFloat(prompt("Give new value"));
    if (i == 0) {
      min = newValue;
      max = newValue;
    }

    if (newValue > max) {
      max = newValue;
    }
    if (newValue < min) {
      min = newValue;
    }
  }
  console.log("Min is", min);
  console.log("Max is", max);
}
findMinMax();
