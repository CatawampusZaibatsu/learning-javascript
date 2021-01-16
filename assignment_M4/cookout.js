// main function
const main = () => {
        // object that reads user input from console
        const readlineSync = require('readline-sync');

        // gets number of guests from the user
        let numberOfGuests = readlineSync.question('How many guests are going to be at your cookout? ');
        // gets number of hotdogs each guest will eat
        let numberOfHotdogs = readlineSync.question('About how many hotdogs will each guest eat? ');

        // calls the dog to bun calculator function 
        dogToBunCalculator(numberOfGuests, numberOfHotdogs);

}

const dogToBunCalculator = (guests, hotdogs) => {
    // calculate total number of hotdogs needed
    let totalHotdogs = guests * hotdogs;

    // calculates the number of packages needed for each
    let hotdogPackages = Math.ceil(totalHotdogs/10);
    let bunPackages = Math.ceil(totalHotdogs/8);

    // calculates how much of each is leftover
    let leftoverHotdogs = hotdogPackages * 10 - totalHotdogs;
    let leftoverBuns = bunPackages * 8 - totalHotdogs;

    // prints the results to the console
    console.log(`You'll need at least ${hotdogPackages} hot dog packages.`);
    console.log(`You'll need at least ${bunPackages} bun packages.`);
    console.log(`There will be ${leftoverHotdogs} hot dogs leftover.`);
    console.log(`There will be ${leftoverBuns} buns leftover`);

}

// calls the main function
main();