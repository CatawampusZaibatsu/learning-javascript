/*
Write a program using the file name pound_to_kg.js Prompt the user to enter the amount of lbs, and display the value in 
Kilograms formatted to 3 decimal points. Use full precision for the conversion value, 2.2 as an example would not provide 
correct conversion values.
*/

// object that reads user input from console
const readlineSync = require('readline-sync');


// prompts and stores user input into a variable
var weightInPounds = readlineSync.question('Please enter a weight in pounds to be converted into kilograms. \n');

// function to convert user input into kilograms
function conversion(weightInPounds){
    var weightInKilograms = weightInPounds * 0.45359237;
    console.log('%f pounds is exactly %f kilograms', weightInPounds, weightInKilograms.toFixed(3));
}

// calls the function above
conversion(weightInPounds);





