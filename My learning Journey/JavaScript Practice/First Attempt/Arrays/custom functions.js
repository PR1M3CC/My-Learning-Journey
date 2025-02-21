let numbers = [1, 2, 3, 4, 5, 6];
function doubleEvens(numbers) {
let filtered = numbers.filter( (numbers)=>numbers % 2 === 0)
let doubled = filtered.map ( (numbers)=>numbers *2)
return doubled
}
console.log(doubleEvens(numbers));
