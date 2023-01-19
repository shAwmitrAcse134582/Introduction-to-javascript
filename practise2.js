//practise-1
// function foo() {
//     console.log('foo');
// }
// foo();
// function bar() {
//     console.log('bar');
// }
// bar();
// //practise-2
// function make_avg(a, b, c) {
//     var avg = (a + b + c) / 3;
//     return avg;
// }
// var values = make_avg(10, 20, 30);
// console.log(values);

// practise-3
function mk_avg(ar, n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += ar[i];

        // console.log(sum);
    }
    return sum / n;

}

var arr = [1, 2, 3, 4, 5, 6];
var len = arr.length;
var avg = mk_avg(arr, len);
console.log(avg);

//practise-4
function odd_even(n) {
    if (n % 2 == 0)
        // 
        return "even";
    else
        // console.log("odd");
        return "odd";
}

var val = odd_even(6);
console.log(val);