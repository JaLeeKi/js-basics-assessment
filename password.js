// Create a new file called password.js. Write a program that does the following:

// Welcome the user to the password validator tool

console.log('Welcome to Jades Password Validator!')

// Prompt the user for a password to validate

const user = prompt("Please enter a password");

// Check if the user’s password meets the following constraint:

// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user
function isLongEnough(input) {
    if (input.length>=10){ 
       console.log("Success")}
    else {console.log('You are a Failure')
  }
}

