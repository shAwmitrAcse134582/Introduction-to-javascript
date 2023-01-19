// using ioop in objects
var shopping = {
    book: 120,
    pen: 10,
    paper: 80,
    bag: 400,
    pencil: 20
}
const keys = Object.keys(shopping);
console.log(keys);

const values = Object.values(shopping);
console.log(values);

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValues = shopping[propertyName];
    console.log(propertyName, propertyValues);
}
//for in loop
for (var propertyName in shopping) {
    const value = shopping[propertyName];
    console.log(propertyName, value);
}

