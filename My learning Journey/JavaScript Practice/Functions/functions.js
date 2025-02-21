// basic function to add two numbers
function addTwoNumbers(num1, num2) {
    return parseInt(num1) + parseInt(num2)
}
// console.log(addTwoNumbers(5, 15))

function loginUserMessage(username){
    if(username === undefined){
        return "PLease enter a username"
    }
    else if (username != undefined) {
        return `${username} just logged in`
    }
}
console.log(loginUserMessage("Usman Khan"));
// Creating a function in which the number of parameters is not known:
function cartTotalPrice(...prices) {
    return prices
}
cartTotalPrice(500, 600, 800);
// creating function to take in an object as an argument:
let anObject = {
    name : "Usman Khan",
    city : "Mardan"
}
function handleObject(anyobject) {
    return `Username is ${anyobject.name} and he is from ${anyobject.city}`
}
console.log(handleObject(anObject))