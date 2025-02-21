console.log("This is a Practice Program for Loops")
// this for loop wil print numbers from 1 to 100
let a = 1
for(let i = 0; i < 100; i++){
    console.log(a + i);
}
// this while loop will print numbers from 0 to 100
let b = 0;
while(b < 101){
    console.log(b);
    b++;
}
// this for in loop will print the keys of the object
let obj = {
    name: "Usman",
    age: 18,
    class: "2nd Year"
}
for(let key in obj){
    const element = obj[key];
    console.log(key, element)
}