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
generateBtn.addEventListener("click", passwdCriteria)

// Password variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "_", "[", "]", "^", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function passwdCriteria() {
  var criteriaConfirm = confirm("Please select from the following criteria to create your password");
  console.log(criteriaConfirm);
  return criteriaConfirm;
}

function getPasswdLength() {
  do {
    var userInput = prompt("How long do you want your password to be?");
    console.log(userInput)
    var passwdLength = parseInt(userInput)
    if (passwdLength >= 8 && passwdLength <= 128) {
      return passwdLength;
    }
  }
  while (passwdLength < 8 || passwdLength > 128)
  
}

do {
  var criteriaConfirm = passwdCriteria()

  while (criteriaConfirm === true) {

    // Make prompt asking user how long they want their password to be
    var passwdLength = getPasswdLength();


    // have computer check if pass length is within range, if it is, then go to next prompt, if not, dont exit

    // ask user to confirm if they want lowercase letters, uppercase, or special characters

    // confirm user selections
    
    // generate password with at least 1 character of selected prompts

    // display password

    
    var goAgain = confirm("Do you wish to generate another password?");

  }
}
while (goAgain === true);
