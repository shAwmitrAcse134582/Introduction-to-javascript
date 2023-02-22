class Student {
    name;
    age;
    Department = 'CSE';
    location;
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    groupStudy(time) {
        console.log("It's  study time")
    }
}

const obj = new Student('Shawmitra', 21, 'Barishal');
console.log(obj);
obj.groupStudy('10:00 PM');