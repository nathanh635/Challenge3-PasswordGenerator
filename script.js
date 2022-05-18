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


//Add prompt for length of password

//Add prompt to confirm special characters
//Use if loop to include special characters
//Add prompt to confirm numeric characters
//Add prompt for lowercase and uppercase
//confirm that password contains all designated types

function generatePassword() {


  let length = window.prompt("Enter the length of the password (between 8 and 128 characters):");
if (!length) {
    // If user pressed Cancel, immediately end function
  return;
}
else if (length > 128 || length < 8) {
  alert("Please enter a number within the range of 8-128 characters.")
  generatePassword()
}
 




let lowerCase = window.confirm("Do you want to include lowercase characters?"); 
let upperCase = window.confirm("Do you want to include uppercase characters?");
let numeric = window.confirm("Do you want to include numeric characters?"); 
let special = window.confirm("Do you want to include special characters?"); 
let characters = "";
let totalChars = 0;
let charnumber = 0;
let numericChars = "", lowerChars = "", upperChars = "";
let num = 0, up = 0, low = 0, spec = 0;

if (lowerCase==true) {
  for (let j = 97; j < 123; j++) {
    characters += String.fromCharCode(j);
    lowerChars += String.fromCharCode(j);
        totalChars +=1
    } 

}

if (upperCase==true) {
  for (let k = 65; k < 91; k++) {
  characters += String.fromCharCode(k);
  upperChars += String.fromCharCode(k);
  totalChars +=1
  } 

}

if (numeric==true) {
  for (let l = 48; l < 57; l++) {
    characters += String.fromCharCode(l);
    numericChars += String.fromCharCode(l);
    totalChars +=1
    } 

}

if (special==true) {
  let specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  totalChars += specialChars.length;
  characters +=specialChars
}

if (lowerCase==false && upperCase == false && numeric == false && special == false) {
  alert("Please select at least one valid data type.")
  generatePassword()
}

let pass = "";

function randomPass() {}
for (let i = 0; i < length; i++) {
  charNumber = Math.floor(Math.random()*totalChars);
  pass += characters.charAt(charNumber);
}
}

if (lowerCase == true) {


}
else if {numeric == true) {

}
else if {upperCase == true) {

}
else if {special == true) {

}


return pass;
}

