//Declaring array
var age = [11, 10, 13, 14, 8, 7];
var name = ['shawmitra', 'Ashik', 'Nasim', 'sharif'];
// print array
console.log(name);
console.log(age);
//array size
console.log(age.length);
//get index value
console.log(name[0]);
//set element by index
name[0] = "dwip";
console.log(name[0]);

//find index from array
console.log(name.indexOf('Nasim'));

//added new element in last position
age.push(70);
console.log(age);

//get out last element from array
name.pop();
console.log(name);
//added element in first position
name.unshift('kawshik');
console.log(name);
// delete element from first position
age.shift();
console.log(age);

//slice array
var ar = [1, 2, 3, 4, 5, 6];

console.log(ar.slice(1, 4));

//includes function

var f = "I am a student of unversity of Barishal"
console.log(f.includes('am'));

//substring
console.log(f.substring(2, 7));


