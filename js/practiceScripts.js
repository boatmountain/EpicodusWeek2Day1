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