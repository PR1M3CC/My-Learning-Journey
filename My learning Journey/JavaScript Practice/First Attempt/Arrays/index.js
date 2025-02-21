// ARRAYS IN JAVASCRIPT Declared using square brackets[]
let a = [1, 2, 4, 6, 8];
// // THE TYPE OF AN ARRAY IS OBJECT
// console.log(typeof a)
// console.log(a.length)
// console.log(a)
// console.log(a[0])
// // CHANGING THE VALUES OF AN ARRAY IS POSSIBLE UNLIKE STRINGS
// a[0] = 0;
// a[5] = 10;
// console.log(a)
// console.log(a[0])
// // ARRAY METHODS:AFTER EACH METHOD WE PUT PARENTHESIS()
// // WE CAN ALSO CONVERT ARRAYS INTO STRINGS IN JAVASCRIPT BY USING TH TOSTRING METHOD
// console.log(a.toString())
// // WE CAN SEPARATE THE VALUES OF AN ARRAY BY USING THE JOIN METHOD WHICH REPLACES THE COMMAS BETWEEN VALUES WITH ANYTHING OF OUR CHOICE
// console.log(a.join(' and '))
// // SHIFT,POP,UNSHIFT AND PUSH:
// // ye jo shift hota hai voh pop ka bhai hota hai...(USED FOR REMOVING ELEMENTS)
// // ye jo unshift hota hai voh push ka bhai hota hai...(USED FOR ADDING ELEMENTS)
// a.pop()
// console.log(a)
// a.push('Ten')
// console.log(a)
// a.shift()
// console.log(a)
// a.unshift('Zero')
// console.log(a)
// WE CAN JOIN MULTIPLE ARRAYS WITH EACH OTHER USING THE CONCAT()METHOD,HOWEVER IT DOES NOT CHANGE THE EXISTING ARRAYS
let b = ['One', 3, 5, 7, 'Nine'];
// console.log(a.concat(b))
// CREATING A NEW ARRAY FROM EXISTING ARRAYS
// METHOD 1:USING FOR LOOP
let arr = [3, 5, 4, 11, 15, 18];
console.log(arr)
// let squared = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr [i];
//     squared.push(element**2)
// }
// console.log(squared)
// METHOD 2:USING MAP FUNCTION
let squared = arr.map(
    (c) => {
        return c ** 2
    }
)
console.log(squared)
// FILTER FUNCTION
const greaterThanFive = (e) => {
    if (e > 5) {
        return true
    }
    return false
}
console.log(arr.filter(greaterThanFive))