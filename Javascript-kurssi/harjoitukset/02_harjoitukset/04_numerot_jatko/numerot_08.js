/* 
Luo kaksi muuttujaa:
num1 arvolla "10".
num2 arvolla "notANumber".
Muunna num1 ja num2 käyttäen parseFloat()-metodia.
Tulosta num1:n ja num2:n summa käyttäen console.log().

(Huom: Jos toinen arvoista on NaN, tulokseksi tulee NaN, joka tulostuu automaattisesti.)
Esimerkkituloste:
NaN (jos yhteenlaskussa on virheellinen syöte).
10 (jos molemmat syötteet ovat kelvollisia numeroita).
*/
let num1 = "10";
let num2 = "notANumber";
let parsedNum1 = parseFloat(num1);
let parsedNum2 = parseFloat(num2);
console.log(parsedNum1 + parsedNum2);
