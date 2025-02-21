let random = Math.random();
console.log(random);

let num1 = prompt("Enter the first number")
let operation = prompt("Which operation would you like to perform")
let num2 = prompt("Enter the second number")

if (random <= 0.1) {
    if (operation == "+") {
        result = (parseInt(num1) * parseInt(num2));
    }
    if (operation =="-") {
        result = (parseInt(num1) / parseInt(num2));
    }
    if (operation == "*") {
        result = (parseInt(num1) + parseInt(num2));
    }
    if (operation =="/") {
        result = (parseInt(num1) - parseInt(num2));
    }
}
 else if (random >0.1) {
    if (operation == "+") {
        result = (parseInt(num1) + parseInt(num2));
    }
    if (operation =="-") {
        result = (parseInt(num1) - parseInt(num2));
    }
    if (operation == "*") {
        result = (parseInt(num1) * parseInt(num2));
    }
    if (operation =="/") {
        result = (parseInt(num1) / parseInt(num2));
    }
 }
console.log(`The result is ${result}`);
