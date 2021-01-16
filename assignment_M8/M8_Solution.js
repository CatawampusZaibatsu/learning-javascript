main = () => {
    const readlineSync = require('readline-sync'); // allows user input through the console

    // array of regular expressions and another array of strings with the passwords rules
    let regExArray = [/[A-Z]/, /[a-z]/, /[@#$%^]/];
    let rulesText = ["One or more uppercase letters.",
                     "One or more lowercase letters.",
                     "One or more from this group: @#$%",
                     "Minimum Length of 8 characters."];

    // prints info for user into the console
    console.log("Please enter a new password into the console.");
    console.log("It must follow the following rules: \n"); 

    // prints each rule
    rulesText.forEach(element => {
        console.log(element);
    });

    let password = readlineSync.question('\nNew Password: '); // prompt for user input

    testPassword(password, regExArray, rulesText); // calls the testPassword function with the proper arguments

}


testPassword = (password, rulesRegex, rulesText) => {
    passed = true;
    
    // loops throught the rulesRegex array and tests the password against each regEx
    for(i = 0; i < rulesRegex.length; i++){
        test = RegExp(rulesRegex[i]).test(password);

        // changes the string based on the result of the regex test method
        if (test === true){
            passedOrFailed = ' Passed'; 
        }
        else {
            passedOrFailed = ' Failed'
            passed = false;
        }

        // prints result of the current test
        console.log(rulesText[i] + passedOrFailed);

    }

    // checks the length of the password and prints if it passed or Failed
    if (password.length >= 8){
        console.log(rulesText[3] + ' Passed');
    } 
    else {
        console.log(rulesText[3] + ' Failed');
        passed = false;
    }

    // prints the final message based on if the password failed any tests
    if (passed === true){
        console.log("\nThank you, your new password has been saved.");
    }
    else {
        console.log("\nSorry please recheck the requirments for your password and try again.");
    }
}


main();