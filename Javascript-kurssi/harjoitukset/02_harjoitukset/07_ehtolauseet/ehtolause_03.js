/* 
Kirjoita funktio nimeltä getGrade:
Ota pistemäärä parametrina.
Jos pistemäärä on 90 tai enemmän, palauta "Arvosana Kiitettävä".
Jos pistemäärä on välillä 80–89, palauta "Arvosana Hyvä".
Kaikilla muilla pistemäärillä palauta "Avosana Tyydyttävä".
Kutsu funktiota pisteillä kuten 85 ja 75 ja tulosta tulos.
*/
function getGrade(score) {
  if (score >= 90) {
    return (text = "Arvosana Kiitettävä");
  } else if (score >= 80 && score <= 89) {
    return (text = "Arvosana Hyvä");
  } else {
    return (text = "Arvosana Tyydyttävä");
  }
}
console.log(getGrade(85));
console.log(getGrade(75));
