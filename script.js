// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var passwordLength = parseInt(prompt('How long would you like your password to be (between 8 and 128 characters)?'));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Get the generate button element
//var generateBtn = document.querySelector('#generate'); //changed from const to var

// Add an event listener to the generate button
//generateBtn.addEventListener('click', generatePassword);

// Define the generatePassword function that will be called when the button is clicked
function generatePassword() {
  // Prompt the user to enter the desired length of the password
  let passwordLength = parseInt(prompt('How long would you like your password to be (between 8 and 128 characters)?'));

  // Check that the password length is within the desired range
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Invalid password length. Please enter a number between 8 and 128.');
    return;
  }

  // Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  let includeLowercase = confirm("Would you like to include lowercase characters?");
  let includeUppercase = confirm("Would you like to include uppercase characters?");
  let includeNumeric = confirm("Would you like to include numeric characters?");
  let includeSpecial = confirm("Would you like to include special characters?");

  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numeric = "0123456789";
  let special = "!@#$%^&*()_+{}:,.;'[]-=";

  // Define the character set to use for the password
  //const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|\\:;"<>,.?/~';
  let allowedChars = "";
  if (includeLowercase) {
    allowedChars += lowerCase;
  }
  if (includeUppercase) {
    allowedChars += upperCase;
  }
  if (includeNumeric) {
    allowedChars += numeric;
  }
  if (includeSpecial) {
    allowedChars += special;
  }


  // Generate the password by selecting characters from the character set at random
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }

  // Output the generated password to the console and display it in an alert
  console.log(password);
  alert(`Your generated password is: ${password}`);
  //how would you put this on the page?
  return password; //added this
}
