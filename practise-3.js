//*problem-1.1:arraow  Function

const multiply = (a, b, c) => a * b * c;

const result = multiply(1, 2, 3);
console.log(result);

//*problem-1.2:Template String

const multipleLine = `I am a web developer.
 I love to code. 
 I love to eat biryani.`
console.log(multipleLine);

//* problem-1.3: Default parameter
const add = (a, b = 0) => a + b;

const total = add(10);
console.log(total);

//*problem-2: multiple Line arrow function

const isArray = (name) => {
    let val = [];
    for (let i = 0; i < name.length; i++) {
        if (name[i].length % 2 == 0) {
            val.push(name[i]);
        }
    }
    return val;
}

const friends = ["bijon", "rabby", "tushar", "tanbir", "rakib"];
const res = isArray(friends);
console.log(res);

//*problem-3: arrow function

const square = (num) => {
    let sum = 0;
    let arr = [];
    for (let i = 0; i < num.length; i++) {
        sum += num[i] * num[i];
    }
    return sum;

}

const number = [1, 2, 3];
const element = square(number);
console.log(element);

//*problem-4: concatenate two array using arrow function and find max number from the array

const concat = (a, b) => {
    const c = [...a, ...b];
    const max = Math.max(...c);
    return max;
}

const ar1 = [1, 2, 3, 4];
const ar2 = [5, 6, 7];
const newArray = concat(ar1, ar2);
console.log(newArray);