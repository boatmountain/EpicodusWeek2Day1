var saySomething = function(whatToSay) {
    alert(whatToSay);
};
var add = function(number1, number2) {
    return number1 + number2;
};


var result = add (3, 4);
var outputText = "This sum is " + result + ".";
saySomething(outputText);

// Refactored 3 lines into 1
saySomething("The sum is " + add(3, 4) + ".");

// To use regular expressions to find and replace text that matches patterns, try using the built-in JavaScript method, replace(). 

var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
alert(newstr);  

var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  