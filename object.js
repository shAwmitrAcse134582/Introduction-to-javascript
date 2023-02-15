//crate object by javascript
var student = {
    name: 'shawmitra',
    roll: 33,
    dept: 'cse',
    Address: 'Barishal'
}
console.log(student);

//find out specific property

var shopping = {
    pant: 1600,
    shirt: 1500,
    jacket: 2500,
    shoe: 3200
}
console.log(shopping.shirt);
//set object value
shopping.shoe = 4000;
console.log(shopping.shoe);

//how to get only keys or values
var mobile = {
    brand: 'xiomi',
    price: 24000,
    ram: '6gb',
    camera: '48px'

}
var mobileKeys = Object.keys(mobile);
console.log(mobileKeys);

var mobileValues = Object.values(mobile);
console.log(mobileValues);