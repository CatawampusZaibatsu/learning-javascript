// holds the literal numeric value for each item
var item1 = 9.99, item2 = 5.99, item3 = .99, item4 = 59.50, item5= .25;

// var to calculate and hold everything required for the assignment
var subTotal = item1 + item2 + item3 + item4 + item5;
var salesTax = subTotal * .07;
var grandTotal = subTotal + salesTax;

// prints and formats the output
console.log('Sub Total: $%f \nTax: $%f \nGrand Total: $%f', subTotal.toFixed(2), salesTax.toFixed(2), grandTotal.toFixed(2));
