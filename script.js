// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", passwdCriteria);

// Password variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "_", "[", "]", "^", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function passwdCriteria() {
  var criteriaConfirm = confirm("Please select from the following criteria to create your password");
  console.log(criteriaConfirm);
  if (criteriaConfirm === true) {
    console.log("criteria true")
    passwdLength = getPasswdLength();
  }
}

function getPasswdLength() {
  do {
    var userInput = prompt('How long do you want your password to be?');
    var passwdLength = parseInt(userInput);
    if (passwdLength >= 8 && passwdLength <= 128) {
      return passwdLength;
    }
    else {
      alert('Password must be greater than 8 character and less than 128');
    }
  }
  while (passwdLength < 8 || passwdLength > 128)
}

function chooseLower () {
  var wantLower = confirm("Do you want lowercase characters in your password?")
  if (wantLower === true) {
    var confirmLower = wantLower;
    console.log(confirmLower);
    return confirmLower;
  }
  else {
    var denyLower = wantLower;
    console.log(denyLower);
    return denyLower;
  }
}