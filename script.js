// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let myPassword = "";
  let passwordLength = parseInt (prompt ("Please enter the length of your password. It must be between 8 and 128 characters."))
  if (passwordLength < 8 || passwordLength > 128){
  alert ("password must be between 8 and 128 characters long")
  // return ""
  }
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(randomCharacter,'char');
var randomNumber = Math.floor((Math.random() * 10) + 1).toString();
console.log(randomNumber,'num');
// write a for loop
for(let index = 0; index <= passwordLength; index++){
  // construct myPassword using plus or concat
  console.log(myPassword,"myPassword before")
  myPassword.concat(randomCharacter);
  console.log(myPassword,"myPassword  after")
  myPassword.concat(randomNumber);
  // if myPassword length is eqaul passwordLength
  if(myPassword.length === passwordLength) {
    // return myPassword
    return myPassword;
    }
  }
 }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
