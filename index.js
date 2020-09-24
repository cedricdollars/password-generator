const passwordOutput = document.querySelector("#passwordOutput");
const messageAlert = document.querySelector("#messageAlert");
const passLowerCase = "azertyuiopqsdfghjklmwxcvbn".split("");
const passUpperCase = passLowerCase.join("").toUpperCase().split("");
const passNumbers = "0123456789".split("");
const passSymbols = "!,.:$+-?<>#@=/|≤~&".split("");

function generatePassword() {
  const passwordData = [].concat(
    lowercase.checked ? passLowerCase : [],
    uppercase.checked ? passUpperCase : [],
    numbers.checked ? passNumbers : [],
    symbols.checked ? passSymbols : []
  );
  let passwordLength = document.getElementById("password-length").value;
  let newPassword = "";
  if (passwordData.length === 0) {
    messageAlert.innerHTML = "<p>Vous n'avez sélectionné aucun critère </p>";
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    newPassword +=
      passwordData[Math.floor(Math.random() * passwordData.length)];
  }
  messageAlert.innerHTML = "";
  passwordOutput.innerHTML = newPassword;
}
