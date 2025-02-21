// this is a faulty calculator that will perform an incorrect calculation 1 out of 10 times
let random = Math.random();
console.log(random);

let Num1 = prompt("enter first number");
let operator = prompt("enter operator");
let Num2 = prompt("enter second number");
if (random > 0.1) {
  if (operator == "+") result = parseInt(Num1) + parseInt(Num2);
  else if (operator == "-") result = parseInt(Num1) - parseInt(Num2);
  else if (operator == "*") result = parseInt(Num1) * parseInt(Num2);
  else if (operator == "/") result = parseInt(Num1) / parseInt(Num2);
  else if (operator == "*") result = parseInt(Num1) * parseInt(Num2);
} else {
  if (operator == "+") result = parseInt(Num1) - parseInt(Num2);
  else if (operator == "-") result = parseInt(Num1) / parseInt(Num2);
  else if (operator == "*") result = parseInt(Num1) + parseInt(Num2);
  else if (operator == "/") result = parseInt(Num1) **parseInt(Num2);
}
console.log("result is ", result);