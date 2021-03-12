// Assignment Code
// 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // adding prompt to capture password length
    var userPassLength = prompt("How many characters would you like your password to be? Min: 8, Max: 128");
  // confirm below if password is 8 to 128 characters
    if (userPassLength > 7 && userPassLength < 129) {
    // creats confirm box for lower case
      var lowerChoice = confirm("Would you like to use lower case letters? Ok = Yes ; Cancel = No");
    }
    // below message if falls out of character lenght range
    else {
    alert("Choose correct character length");
    return;
    }
    // these 3 lines of code generate confirm option for remaining character types
    var upperChoice = confirm("Would you like to use Upper case letters? Ok = Yes ; Cancel = No");
        
    var numberChoice = confirm("Would you like to use numbers? Ok = Yes ; Cancel = No");
  
    var specialChoice = confirm("Would you like to use special characters? Ok = Yes ; Cancel = No");
    
    /* plan was to link the 4 variables above to the random functions in section below, taking into account if the choices were true
    to then join a random string based on userPassLength */

  // Random lower case letter
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  
  }
 // Random upper case letter
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  // Random number
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  // Random special character
  function getRandomSpecialCharacter() {
    var special = "!@#$%^&*(){}[]=<>?,.";
    return special[Math.floor(Math.random() * special.length)];
  }

// able to get random characters to appear in console
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSpecialCharacter());

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






