//declaration function
function fun() {
    console.log('Hello developer');
}

fun();

//parameter passing to function
function fn(money) {
    console.log(money);
}
fn(250);

//addition by passing parameter
function add(a, b) {
    var sum = a + b;
    console.log(sum);

}
add(10, 10);

//subtraction by passing parameter
function sub(n1, n2) {
    var x = n1 - n2;
    console.log(x);
}
sub(10, 5);

// return value from function
function addition(num1, num2) {
    var sum = num1 + num2;
    return sum;

}

var total = addition(30, 20);
console.log(total);

//Mutltiple parameter

function sum(num1, num2) {
    const s = num1 + num2;
    return s;
}

const r1 = sum(20, 5);
const r2 = sum(5, 20);
const t = sum(r1, r2);
console.log(t);
