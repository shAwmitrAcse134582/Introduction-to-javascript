const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const fives = numbers.find(num => num % 5 == 0)
console.log(fives);


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

const value = laptop.find(device => device.price > 30000)
console.log(value);