/*
A company has determined that its annual profit is typically 23 percent of total sales. Write a program using the file name 
sales_prediction.js, that displays the profit based on the user entered amount of total sales for the year. 
( Program prompt the user for the projected total sales amount ). 
Display the profit amount formatted to two decimal places.
*/

const readlineSync = require('readline-sync');

// Wait for user's response and convert it from a string to a float
var totalSales = parseFloat(readlineSync.question('Please enter the total annual sales for this company and I will calculate the profit made. '));

// calculate profit
var profit = totalSales * .23;

// print results to console
console.log('Total Sales: $%f', totalSales.toFixed(2));
console.log('Annual Profit: $%f', profit.toFixed(2));
