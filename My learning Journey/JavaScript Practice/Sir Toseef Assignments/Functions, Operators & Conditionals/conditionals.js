// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let userage = 12
let gender = "Female"
if (userage >= 18 && gender == "Male") {
    console.log("The user is an adult male")
}
else if (userage >= 18 && gender == "Female"){
    console.log("The user is an adult Female");
}
else if (userage >= 13 && gender == "Male"){
console.log("The user is a teenage boy");
}
else if (userage >= 13 && gender == "Female"){
    console.log("The user is a teenage girl");
    }
else if (userage < 13 && gender == "Male"){
console.log("The user is a preteen boy");
}
else if (userage < 13 && gender == "Female"){
    console.log("The user is a preteen girl");
    }
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let age = 19
let canSee = false
if (age < 18 || canSee == false) {
    console.log("You are not elligible for a drivers license");
}
else{
    console.log("You may be elligible for a drivers license if you can see");
}
// Task 13: Write a program that uses the operator to negate a condition and log the result to the console.
let username = "Toseef Rana"
let isOnline = false
if (isOnline != true) {
    console.log(`${username} is not online`);
} else {
    console.log(`${username} is online`);
}