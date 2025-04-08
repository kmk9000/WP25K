/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
function askToContinue() {
  let count = 0;
  let sum = 0;
  while (true) {
    let input = parseFloat(prompt("Give a number"));
    let number = Number(input);
    sum += number;
    count++;
    let response = prompt("Do you want to keep inputting numbers? y / n");
    if (response === "n") {
      break;
    }
  }
  let average = sum / count;
  console.log(`The average of the numbers you input is ${average}`);
}

askToContinue();
