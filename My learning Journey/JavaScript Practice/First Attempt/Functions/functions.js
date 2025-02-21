// this is a practice file for functions in javascript
//this function will sum three numbers
function sum(a, b, c) {
    return a + b + c;
}
result = sum(5, 15, 0)
result2 = sum(15, 15, 0)
result3 = sum(25, 20, 5)
console.log("The result of the sum is :", result)
console.log("The result of the sum is :", result2)
console.log("The result of the sum is :", result3)
// this function display a few sentences with a variable which you can change for every sentence
function intro(name) {
    console.log("My name is " + name)
    console.log("You can call me " + name)
}
intro("Usman")
intro("Ihsan")
// this is an arrow function which is used to store the result in a variable
const func1 = (x)=>{
    console.log("I am an arrow function ", x)
}
func1(40)
func1(20)
