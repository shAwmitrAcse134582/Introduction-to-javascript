//while Loop
var number = 0;
while (number < 10) {
    console.log(number + " " + "Bangladesh");
    number++;
}
//even number by while loop
var n = 0;
while (n <= 10) {
    console.log(n);
    n += 2;
}
var num = 1;
while (num <= 10) {
    if (num % 2 == 0)
        console.log(num);
    num++;
}
// odd number by while loop
var x = 1;
while (x <= 10) {
    console.log(x);
    x += 2;
}


//For loop-----------------------*
var i;
for (i = 0; i <= 10; i++) {
    console.log(i);
}

//array for loop

var arr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//break and continue

for (var j = 1; j < 20; j++) {
    console.log(j);
    if (j > 5) {
        break;
    }
}

for (var k = 1; k < 20; k++) {

    if (k > 5) {
        console.log(k);
        continue;
    }
}


