/* 
Kirjoita funktio nimeltä sumAndAverage:
- Pyydä käyttäjältä 10 numeroa
- Laske ja lokita konsoliin: 
    - Kaikkien numeroiden summa.
    - Annettujen numeroiden keskiarvo.
    - Suurin ja pienin numero
*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
function sumAndAverage() {
  let sum = 0;
  let count = 0;
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    let input = parseFloat(prompt("Give ten numbers"));
    number = Number(input);
    numbers.push(number); //adds numbers to the array
    sum += number;
    count++;
  }
  let average = sum / count;
  let max = Math.max(...numbers); //"..." spread operator for the array
  let min = Math.min(...numbers);
  console.log("The sum of your numbers is:", sum);
  console.log("The average of your numbers is", average);
  console.log("The largest number of those you gave is:", max);
  console.log("The smallest number you gave is:", min);
}
sumAndAverage();
