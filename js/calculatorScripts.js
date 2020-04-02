var add = function(number1, number2) {
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  }
  
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var resultAdd = add(number1, number2);
  var resultSubtract = subtract(number1, number2);
  var resultMultiply = multiply(number1, number2);
  var resultDivide = divide(number1, number2);
  console.log('The addition result is ' + resultAdd + ', subtraction result is ' + resultSubtract + ', the multiplication result is ' + resultMultiply +', and the division result is ' + resultDivide);
  

alert(resultAdd + ", " +  resultSubtract + ", " + resultMultiply + ", " + resultDivide)