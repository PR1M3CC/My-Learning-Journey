// Declaring an object in javaScript
// Object Literals:
let obj = {
    name : "Usman Khan",
    role : "Programmer",
    city : "Mardan"
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);
obj.name = "Usman"
// console.log(obj);
// We can prevent changes to an object by using the freeze method:
Object.freeze(obj)
obj.name = "Khan"
// console.log(obj);
// declaring a symbol inside an object:
const sym1 = Symbol("Key")
let symbolObject = {
    name : "Symbol",
    location : "JavaScript",
    [sym1]: "Key1"
}
// console.log(symbolObject);
// Creating an object from other objects
let obj1 = {
    name1 : "IhsanUllah",
    isLoggedIn1 : false
}
let obj2 = {
    name2 : "Sana",
    isLoggedIn2 : true
}
let obj3 = {...obj1, ...obj2}//Spread Method
// console.log(obj3);
let obj4 = Object.assign({}, obj1, obj2)//Assign Method
// console.log(obj4);
// We can also extract the keys and values individually from objects by using these constructor methods:
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
console.log(Object.entries(obj3));
// to assign a value from an object to a variable we can use the following syntax:
let {name2} = obj2//The Curly braces syntax is known as de-structuring
// we can also rename the created variable by using the following syntax:
let {name2 : sister} = obj2



