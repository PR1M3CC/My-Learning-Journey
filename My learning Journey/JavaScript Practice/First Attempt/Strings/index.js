let firstName = 'Usman';
let secName = 'Khan';
// this is called template literal in javascript for which we type the string in between backticks(`)
console.log(`His first name is ${firstName} and his second name is ${secName}`)
// if we want to print a single letter of a string we will use the index of the character between []
let a = 'Usman';
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
// if we want to find the length of a string we will type .length after the name of the string
console.log(a.length)
// if we want to convert a string to upper case or lower case we use the .touppercase or .tolowercase functions followed by(). we use the parentheses because it is a function
console.log(a.toUpperCase())
console.log(a.toLowerCase())
// SLICE METHOD!!!!IMPORTANT
// if we want only a specific part of a string then we use slice method in which we write the index of the character from which we want to start the string followed by comma and after comma we write the index of the charater till which we want the string(the first index character will be included but not the second one)
console.log(a.slice(1, 4))
// REPLACE Property
// if we want to replace a specific character in a string, we use the replace property in which we first write the characters that we want to replace and after comma we write the characters to be replaced with.(write the characters between quotation ' marks)
console.log(a.replace('Us', 'Is'))
