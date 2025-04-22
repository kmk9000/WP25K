// id="tekstiInput" id="tekstiOutput"
document
  .getElementById("tekstiInput")
  .addEventListener("input", function (event) {
    document.getElementById("teksiOutput").textContent = event.target.value;
  });

// ylempi tekee samaa kuin alempi

// funktio tarvitsee toimiakseen parametrin funtkion ulkopuolelta
function liveUpdate(event) {
  // muokataan käyttäjän syöte sivun p-elementtiin
  document.getElementById("tekstiOutput").textContent = event.target.value;
}
// funktiota kutsutaan, kun kenttään syötetään tekstiä
document.getElementById("tekstiInput").addEventListener("input", liveUpdate);
