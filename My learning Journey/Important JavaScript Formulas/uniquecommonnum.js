let array1=[1,2,3,4,5,6,4,5,6,7]
let array2=[8,3,5,7,9,0,3,6]

let set1 = new Set(array1)
let set2 = new Set(array2)

let set1arr = Array.from(set1)

let commonNumbers = set1arr.filter((common)=>{
   return set2.has(common)
})

console.log(`The unique common numbers are: ${commonNumbers}`);
console.log(`Count of unique common number is: ${commonNumbers.length}`);


