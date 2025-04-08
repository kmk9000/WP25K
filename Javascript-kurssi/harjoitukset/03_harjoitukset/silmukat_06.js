/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
function askToContinue() {
  let numbers = [];
  let shouldContinue = true;

  while (shouldContinue) {
    // Kysy käyttäjältä yhtä numeroa
    let number = parseFloat(prompt("Anna numero:"));

    // Kysy, haluaako käyttäjä jatkaa
    let response = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");

    // Jos vastaus on 'e', lopeta
    if (response.toLowerCase() === "k") {
      shouldContinue = true;
    }

    if (response.toLowerCase() === "e") {
      shouldContinue = false;
    }
    // Jos vastaus on 'k', jatka (while-loop jatkuu)
  }

  // 5. Laske ja näytä keskiarvo
  if (numbers.length > 0) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    let average = sum / numbers.length;
    console.log("Syötettyjen numeroiden keskiarvo on: " + average);
  } else {
    console.log("Et syöttänyt yhtään numeroa.");
  }
}
askToContinue();

/*function askToContinue() {
  let numbers = 0;
  let continueInput = "y"
  while (continueInput === "y") {
    input = prompt("Give a number");
    if continueInput = "n";
    break;
  }
  let number = parseFloat(input);
  numbers.push(number);
  continueInput = prompt("Do you want to continue inputting numbers? (y/n)");
}
*/

/*
  do {
    let input = prompt("Give a number:");
    let number = Number(input);
  } while ((number = 1));
    let reply = prompt("Do you want to stop? y/n");
    if (answer = "y"){
      input = prompt("Give a number:")
    };
    if (answer = "n") {
      break
    };

}
    
*/
askToContinue();
