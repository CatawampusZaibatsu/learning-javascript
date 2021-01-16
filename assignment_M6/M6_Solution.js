
// class Names that holds a first and last name as well as an age. 
class Names {
    constructor(first, last, age){
        this.first = first;
        this.last = last;
        this.age = age;
    }
}

// function that has an array passed to it, a string, and another string for the message
printObject = (allNames, sortType, message) => {
    // checks to see if the sortType is equal to the string 'first', 'last', or 'age' then passes a higher function into the 
    // array.sort method to change how the array is sorted.
    if (sortType === 'first'){
        allNames.sort((a, b) => {
            let firstA = a.first.toUpperCase(); 
            let firstB = b.first.toUpperCase();

            let comparison = 0;
            if (firstA > firstB){
                comparison = 1; 
            } else if (firstA < firstB){
                comparison = -1;
            }
            return comparison;          
        });
    } else if (sortType === 'last'){
        allNames.sort((a, b) => {
            let lastA = a.last.toUpperCase();
            let lastB = b.last.toUpperCase();

            let comparison = 0;
            if (lastA > lastB){
                comparison = 1;
            } else if (lastA < lastB){
                comparison = -1;
            }
            return comparison; 
        })
    } else if (sortType === 'age'){
        allNames.sort((a, b) => a.age - b.age);
    } else {
        allNames.sort();
    }

    // this is passed into the array.forEach function and is called on each object in the array
    iterate = (item) => {
        console.log(`${item.first} ${item.last} ${item.age}`);
    }

    // prints the message then uses a forEach loop to print each item in the array
    console.log(message);
    allNames.forEach(iterate);
}

// main method that starts the program
main = () => {
    // creates an empty array then uses the .push method to pass in each name to the array
    allNames = [];
    allNames.push( new Names("Alan", "Moore", 66));
    allNames.push(new Names("Neil", "Gaiman", 59));
    allNames.push(new Names("William", "Gibson", 72));
    allNames.push(new Names("Phillip", "Pullman", 73));

    // calls the printObject function with different parameters to change how the array is sorted. 
    printObject(allNames, 'none', 'Objects by original index:');
    console.log("\n"); // seperate each printObject call by an empty line
    printObject(allNames, 'first', 'Objects by first name:');
    console.log("\n");
    printObject(allNames, 'last', 'Objects by last name:');
    console.log("\n");
    printObject(allNames, 'age', 'Objects by age:');
}

// calls the main function
main();