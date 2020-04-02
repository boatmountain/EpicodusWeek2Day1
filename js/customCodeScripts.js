//  Take somebody's name and say a greeting to them;
var askedName = prompt("What is your name?");
alert(askedName);


// Write a function to subtract two numbers;
 var subtract = function(number1, number2) {
     return number1 - number2;
 };

var subtractResult = subtract (10,2);
console.log("the subtract result is " + subtractResult);

// Now one to multiply two numbers. Then create a new function called threeTimes to multiply three numbers together.
var threeTimes = function(number1, number2, number3) {
return number1 * number2 * number3;
}

var threeTimesResult = threeTimes(10,2,9);
console.log("the threeTimes result is " + threeTimesResult);

var multiply = function (number1, number2) {
    return number2 * number2;
}
var multiplyResult = multiply(10,2)
console.log("the multiply result is " + multiplyResult);

// Now write one to divide two numbers. Then write a new function called remainder to find the remainder of two numbers.
var divide = function(number1, number2) {
    return number1 / number2;
}

var divideResult = divide (10,2)
console.log("the divide result is " + divideResult);

// Prompt the user to enter their age, another prompt to enter their name and another prompt to enter their favorite food. Pass these as arguments to a function that returns a sentence combining all of this information. Then display the returned string with an alert.

var age = prompt('What is your age');
var name = prompt('What is your name');
var food = prompt('What is your preferred food')

alert(name + " is " + age + " years old and likes " + food)

// Defining an addition function
// Gathering User Input
// Parsing Integers
var add = function(number1, number2) {
    return number1 + number2;
}
var number1 = parseInt(prompt("Enter a number"))
console.log(number1);
var number2 = parseInt(prompt('Enter another number'))
console.log(number2);

alert(add(number1, number2));


alert(add(10,5))
console.log(alert);

// Write a function that converts temperature between celsius and fahrenheit.

var celsius = function(number3) {
    return (number3 / 5) * 9 + 32;
};

var fahrenheit = function(number4) {
    return (number3 - 32) * 5 / 9;
};

var number3 = parseInt(prompt('Enter a temperature in fahrenheit to convert to Celsius'))
var celsiusResult = celsius(number3)
alert(celsiusResult)
console.log(number3);

var number4 = parseInt(prompt('Enter a temperature in celsius to convert to fahrenheit')) 
var fahrenheitResult = fahrenheit(number4)
alert(fahrenheitResult)
console.log(number4);

// Write functions to be used by a cooking app that convert between units. For example, a function that converts gallons to liters. Create a project for this like you did for the calculator, so that you can return and build a front-end for this later.



