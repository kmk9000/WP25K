/*
Luo HTML tiedosto, jossa on <p> elementti ja nappi. 
Kirjoita JavaScript-koodi, joka vaihtaa tekstiosion näkyvyyttä - päälle ja pois - nappia painamalla.
 */
function toggle() {
  let element = document.getElementById("hideShow");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
