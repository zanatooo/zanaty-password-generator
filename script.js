// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let myPassword = "";
  let passwordLength = parseInt(prompt("Please enter the length of your password. It must be between 8 and 128 characters."))
  if (passwordLength < 8 || passwordLength > 128) {
    return "password must be between 8 and 128 characters long";
    // return ""
  }
  let alphabet = ""
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789"
  const special = "!@#$%&*"

  var lowerCase = confirm("Do you want lower case character?")
  var upperCase = confirm("Do you want uppercase character?")
  var number = confirm("Do you want a number?")
  var specialCharecters = confirm("Do you want special charecters?")

  if (lowerCase === true) {
    alphabet += lower
  }
  if (upperCase === true) {
    alphabet += upper
  }
  if (number === true) {
    alphabet += numbers
  }
  if (specialCharecters === true) {
    alphabet += special
  }
  if(alphabet.length === 0){
    return "Please choose minimum one option"
  }
  const randomCharacter = function () {
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }
  console.log(randomCharacter, 'char');

  // write a for loop
  for (let index = 0; index < passwordLength; index++) {
    // construct myPassword using plus or concat
    console.log(myPassword, "myPassword before")
    myPassword += randomCharacter();
    console.log(myPassword, "myPassword  after")

    // if myPassword length is eqaul passwordLength
    // if(myPassword.length === passwordLength) {
    // return myPassword
    // return myPassword;
    // }
  }
  return myPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
