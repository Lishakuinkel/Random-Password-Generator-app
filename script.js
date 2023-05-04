// Assignment Code
// Refactor starter code to do the following -
// 1. Click the button then presents a series of prompts for password criteria
// 2. Select the criterias needed for secure password
// 3. Allow to choose the length of password from 8 - 128 characters
// 4. Ask for character types - lowercase, uppercase, numeric, symbols
// 5. Validate input - atleast one type should be selected
// 6. All prompts answered
// 7. Password is generated as alert or written on the page

var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!','@','#','$','%','^','&','*','(',')'];
var passwordresult = []; //creating an empty array
var passwordlength = 8;

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var rightprompts = getprompts(); //Returns True or False 
  
  if (rightprompts){

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }
  else {

  passwordText.value = "";

  }

}
// Creating generatePassword() to provide random string value for performing writePassword() function
function generatePassword(){
  var pwd = "";
  for (i = 0; i < passwordlength; i++){
    var randomindex = Math.floor(Math.random() * passwordresult.length); 
    pwd = pwd + passwordresult[randomindex]; //randomresults provides the positioning value
  }

  return pwd;
}

function getprompts(){
  passwordresult = []; 

  passwordlength = parseInt(prompt("Enter the desired password length (8 to 128)"));
  
  if (isNaN(passwordlength) || passwordlength < 8 || password > 128){
    alert("Invalid input. Please try again!");
    return false;
  }
  
  if (confirm("Do you want lowercase letters in your password?")){
    passwordresult = passwordresult.concat(lowercase);
  }

  if (confirm("Do you want uppercase letters in your password?")){
    passwordresult = passwordresult.concat(uppercase);
  }

  if (confirm("Do you want numbers in your password?")){
    passwordresult = passwordresult.concat(numeric);
  }

  if (confirm("Do you want symbols in your password?")){
    passwordresult = passwordresult.concat(symbols);
  }

  return true;

}


