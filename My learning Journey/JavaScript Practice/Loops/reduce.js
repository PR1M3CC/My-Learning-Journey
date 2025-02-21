let arr1 = [15, 20, 30, 50]

let red1 = arr1.reduce( (acc, curr) => {
    console.log(`acc: ${acc} and currval: ${curr}`);
    return acc + curr
}, 0)
console.log(red1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let total = shoppingCart.reduce( (acc, item) => item.price + acc,0)

console.log(total);