const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bignums = numbers.filter(num => num > 20);
console.log(bignums);
const even = numbers.filter(num => num % 2 == 0)
console.log(even);


const laptop = [
    {
        brand: 'asus',
        price: 50000,
    },
    {
        brand: 'hp',
        price: 60000,
    },
    {
        brand: 'del',
        price: 40000,
    }
];
const expense = laptop.filter(device => device.price > 50000)
console.log(expense);