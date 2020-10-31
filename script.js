// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
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
    passwdLength = getPasswdLength();
  }
}

function getPasswdLength() {
  do {
    var userInput = prompt('How long do you want your password to be?');
    var passwdLength = parseInt(userInput);
    if (passwdLength >= 8 && passwdLength <= 128) {
      console.log(passwdLength);
      var randomCharGenerators = [];
      var wantLower = confirm("Do you want lowercase characters in your password?");
      if (wantLower === true) {
        randomCharGenerators.push(chooseLower);
      }
      var wantUpper = confirm("Do you want uppercase character in your password?");
      if (wantUpper === true) {
        randomCharGenerators.push(chooseUpper);
      }
      var wantNumeric = confirm("Do you want numeric characters in your password?");
      if (wantNumeric === true) {
        randomCharGenerators.push(chooseNumeric);
      }
      var wantSpecial = confirm("Do you want special characters in your password?");
      if (wantSpecial === true) {
        randomCharGenerators.push(chooseSpecial);
      }
      password = generatePassword(passwdLength, randomCharGenerators);
      writePassword(password);
    }
    else {
      alert('Password must be greater than 8 character and less than 128');
    }
  }
  while (passwdLength < 8 || passwdLength > 128)
}

function chooseLower() {
  var lowerRandom = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  console.log(lowerRandom);
  return lowerRandom;
}

function chooseUpper() {
  var upperRandom = upperCase[Math.floor(Math.random() * upperCase.length)];
  console.log(upperRandom);
  return upperRandom;
}

function chooseNumeric() {
  var numericRandom = number[Math.floor(Math.random() * number.length)];
  console.log(numericRandom);
  return numericRandom;
}

function chooseSpecial() {
  specialRandom = special[Math.floor(Math.random() * special.length)];
  console.log(specialRandom);
  return specialRandom;
}

function generatePassword(passwordLength, randomCharGenerators) {
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var charGenerator = randomCharGenerators[Math.floor(Math.random() * randomCharGenerators.length)];
    var char = charGenerator();
    password = password + char; 
  }
  console.log(password);
  return password;
}
