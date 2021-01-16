const main = () => {
    // object that reads user input from console
    const readlineSync = require('readline-sync');

    // gets number of rows for the triangle
    let rows = readlineSync.question('How many lines tall will the triangle be? ');

    // calls the triangle function
    triangle(rows);
}

// function that uses nested for loops to draw a triangle in the console
const triangle = (rows) => {
    // variable to hold each line as a string
    let lines = ""

    // number of rows
    for(i = 0; i < rows; i++){ 
        // number of spaces
        for (k = 0; k < i; k++) {
            lines += ' ';
        }
        // number of o's
        for (j = 0; j < rows-i; j++){ 
            lines += 'o';
        }
        // new line
        lines += '\n';
    }
    
    // prints the whole string using '\n' to start a new line 
    console.log(lines);
}

// function that draws the triangle in the console without nested for loops
// kinda proud of this one but it's not what the assignment called for
/*
const triangle = (rows) => {
    // loop that goes through the number of lines set by the user
    for(i = 0; i < rows; i++){
        // concatanizes a string with a space and a string with an o a set number of times to form a triangle
        console.log(' '.repeat(i) + 'o'.repeat(rows - i));
    }
}
*/

// calls main
main();