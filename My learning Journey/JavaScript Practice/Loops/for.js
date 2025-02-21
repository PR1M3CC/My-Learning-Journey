// Simple for loop to print number from 1 to 10:
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}
// using for loop to print a table
let tableof = 4
for (let i = 1; i <= 10; i++) {
    // console.log(`${tableof} * ${i} =`, tableof * i);
}
// using for loop on an array:
let myArr = ["Ihsan", "Usman", "Umar", "Kamran"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}
// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
}
// using for loop to print odd numbers from 0 to 10
for (let i = 1; i < 10; i = i + 2) {
    console.log(i);
}