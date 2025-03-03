function myFunc(arr) {
  let returnArr = [];
  arr.forEach((value) => {
    if (!returnArr.includes(value)) {
      returnArr.push(value);
    }
  });
  return returnArr;
}

console.log(myFunc([1, 2, 3, 1, 4, 5, 4, 6, 7]));
