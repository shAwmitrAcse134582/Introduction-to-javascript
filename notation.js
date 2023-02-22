const student = {
    name: 'Shawmitra',
    age: 15,
    class: 'bsc',
    marks: {
        ds: 'A+',
        os: 'A',
        dbms: 'A-',
    },
}
console.log(student.marks.ds);

const marks = student['marks']['os'];
const dbmsMarks = student.marks['dbms'];
console.log(marks);
console.log(dbmsMarks);