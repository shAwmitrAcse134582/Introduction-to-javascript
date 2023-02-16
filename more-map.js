const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2)
console.log(half);


const friends = ['ashik', 'nasim', 'asad', 'sharif'];
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);

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

const items = laptop.map(device => console.log(device.brand));