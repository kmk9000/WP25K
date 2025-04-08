/* Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 ja ajan (tunteina) ja laskee sitten keskinopeuden.
 Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */

// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.
function averageSpeed() {
  while (true) {
    let distance = parseFloat(prompt("anna etäisyys."));
    //ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi
    if (distance == 0) {
      break;
    }
    if (isNaN(distance) || distance < 0) {
      //palaa silmuka alkuun
      continue;
    }
    let time = parseFloat(prompt("anna aika."));
    //ei ole luku tai on negatiivinen
    if (isNaN(time) || time < 0) {
      continue;
    }
  }
  let average = distance / time;
  alert("average speed is " + average);
}
averageSpeed();
