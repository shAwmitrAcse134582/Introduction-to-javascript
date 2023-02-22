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
        console.log("It's  study time");
    }
}


class Teacher extends Student {
    name;
    age;
    Department = 'CSE';
    location;
    constructor(name, age, location) {
        super(name, age, location);
    }
    classTime(time) {
        console.log("It's a  Clsss time");
    }
}

const obj = new Student('shawmitra', 21, 'Barishal');
console.log(obj);

const teacher = new Teacher();
console.log(teacher);

