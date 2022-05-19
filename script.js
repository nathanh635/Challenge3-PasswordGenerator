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

function generatePassword() {

//Prompt for length of password
  let length = window.prompt("Enter the length of the password (between 8 and 128 characters):");
if (!length) {
    // If user pressed Cancel, immediately end function
  return;
}
else if (length > 128 || length < 8) {
  alert("Please enter a number within the range of 8-128 characters.")
  generatePassword()
}
 // Prompt whether to include lowercase, uppercase, special, and numeric characters and save responses as boolean values
let lowerCase = window.confirm("Do you want to include lowercase characters?"); 
let upperCase = window.confirm("Do you want to include uppercase characters?");
let numeric = window.confirm("Do you want to include numeric characters?"); 
let special = window.confirm("Do you want to include special characters?"); 


let characters = "";
let totalChars = 0;
let charnumber = 0;
let numericChars = "", lowerChars = "", upperChars = "";
let specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let num = 0, up = 0, low = 0, spec = 0;

//Depending which data types were selected, construct master string of all possible characters for password selection

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
  totalChars += specialChars.length;
  characters +=specialChars
}

// If they user clicks cancel for all data types, kick them back to the start of the function

if (lowerCase==false && upperCase == false && numeric == false && special == false) {
  alert("Please select at least one valid data type.")
  generatePassword()
}

//Define and generate password function
let pass = "";

randomPass();

function randomPass() {
  //reset variables in case button is cliecked multiple times without reloading page, or for when function calls itself
  pass = ""
  num = 0, up = 0, low = 0, spec = 0

  // Generate random password from compiled potential string of characters
  for (let i = 0; i < length; i++) {
  charNumber = Math.floor(Math.random()*totalChars);
  pass += characters.charAt(charNumber);
}

//confirm that password contains all designated types by checking all individual strings against password and ensure at least one of each selected type is included
//will look through password and count number of that character type in password string

 if (lowerCase == true) {
  for (let i = 0; i<pass.length; i++) {
        for (let j = 0; j<lowerChars.length; j++) {
          if (pass.charAt(i) === lowerChars.charAt(j)) {
            low+=1;
          }
        }
  }
}

if (upperCase == true) {
  for (let i = 0; i<pass.length; i++) {
        for (let j = 0; j<upperChars.length; j++) {
          if (pass.charAt(i) === upperChars.charAt(j)) {
            up+=1;
          }
        }
  }
}

if (numeric == true) {
  for (let i = 0; i<pass.length; i++) {
        for (let j = 0; j<numericChars.length; j++) {
          if (pass.charAt(i) === numericChars.charAt(j)) {
            num+=1;
          }
        }
  }
}

if (special == true) {
  for (let i = 0; i<pass.length; i++) {
        for (let j = 0; j<specialChars.length; j++) {
          if (pass.charAt(i) === specialChars.charAt(j)) {
            spec+=1;
          }
        }
  }
}

//confirm that at least one of the selected password characters are present, or restart the function

if (numeric == true && num > 0) {
} else if (numeric == false) {
} else {
      randomPass();
}

if (upperCase == true && up > 0) {
} else if (upperCase == false) {
} else {
      randomPass();
}

if (lowerCase == true && low > 0) {
} else if (lowerCase == false) {
} else {
      randomPass();
}

if (special == true && spec > 0) {
} else if (special == false) {
} else {
      randomPass();
}

} 
//return password to function above
return pass;
}

