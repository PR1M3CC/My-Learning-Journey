let num1 = prompt("Enter the first number")
let operation = prompt("What operation would you like to perform?")
let num2 = prompt("Enter the second number")
if (operation == "+") {
    result = parseInt(num1) + parseInt(num2)
}
else if (operation == "-") {
    result = num1 - num2
}
else if (operation == "/") {
    result = num1 / num2
}
else if (operation == "*") {
    result = num1 * num2
}
else if (operation == "%") {
    result = num1 % num2
}
alert(`Result is ${result}`)