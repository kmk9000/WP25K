let saldo = 0;
function paivitaSaldo() {
  document.getElementById("saldoNaytto").textContent = `Saldo: ${saldo} €`;
}

function naytaViesti(teksti, onVirhe = true) {
  const viesti = document.getElementById("viesti");
  viesti.textContent = teksti;
  viesti.style.color = onVirhe ? "red" : "green";
}

function talleta() {
  const summa = Number(document.getElementById("talletusSumma").value);
  if (isNaN(summa) || summa <= 0) {
    naytaViesti("Wrong input, try again");
    return;
  }
  saldo += summa;
  paivitaSaldo();
  document.getElementById("talletusSumma").value = "";
}

function nosta() {
  const nosto = Number(document.getElementById("nostoSumma").value);
  if (isNaN(nosto) || nosto <= 0) {
    naytaViesti("Wrong input, try again");
    //document.getElementById("viesti").textContent = "Wrong input, try again";
    //tein tämän aluksi itse, mutta vaihdoin sen open naytViesti funktioon
    return;
  }
  // Jos saldo ei riitä
  if (nosto > saldo) {
    naytaViesti("Not enough cash");
    //document.getElementById("viesti").textContent = "Not enough cash";
    //tein tämän aluksi itse, mutta vaihdoin sen open naytViesti funktioon
    return;
  }
  saldo -= nosto;
  paivitaSaldo();
  document.getElementById("nostoSumma").value = "";
}

document.getElementById("talletaBtn").addEventListener("click", talleta);
document.getElementById("nostaBtn").addEventListener("click", nosta);
