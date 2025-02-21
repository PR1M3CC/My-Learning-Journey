let myArr = [1, 2, 3, 4, 5]
for (const value of myArr) {
    console.log(value);
}
let myStr = "Hello World!"
for (const char of myStr) {
    if (char == " ") {
        continue
    }
    console.log(char);
}
const map = new Map();
map.set('PK', 'Pakistan')
map.set('IN', 'India')
map.set('USA', 'United States of America')
// console.log(map);
for (const [key, value] of map) {
    console.log(`${key} :~ ${value}`);
}
