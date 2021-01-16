
// main function
const main = () => {
    // object that reads user input from console
    const readlineSync = require('readline-sync');
    // counter for heads and tails
    let heads = 0, tails = 0;

    // gets user input to see how many times to flip the coin
    let numberOfTosses = readlineSync.question('How many times should I toss the coin? ');

    // flips the coin the set number of time provided by the user and records the results
    for (let i = 0; i < numberOfTosses; i++){
        let result = coinToss();

        if (result.valueOf() == 'heads'){
            heads += 1;
        }
        else if(result.valueOf() == 'tails'){
            tails +=1;
        }
    }

    // print the results of all the coin flips to the console
    console.log(`The result of ${numberOfTosses} tosses.`)
    console.log(`Heads: ${heads} Tails: ${tails}`);

}

// coin flip function
const coinToss = () => {
    // random number between 0 and 1
    let coinFlip = Math.random();

    // if the number is greater than .5 the coin is heads and vice-versa
    if (coinFlip > .5){
        return 'heads';
    }
    else {
        return 'tails';
    }
}

// calls the main function
main();