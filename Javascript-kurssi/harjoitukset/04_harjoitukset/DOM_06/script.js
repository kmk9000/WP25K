function sendForm(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    event.preventDefault(); //estää lomakkeen lähettämisen ja tyhjentämisen
    document.getElementById("errorMessage").textContent =
      "Täytä molemmat tiedot";
  }
}
document.getElementById("userForm").addEventListener("submit", sendForm);
