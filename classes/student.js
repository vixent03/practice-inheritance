const Person = require('./person');

class Student extends Person {

    constructor(major, GPA) {
        this.major = 'major'
        this.GPA = 'GPA'
    }
    super(firstName, lastName, age)

    static compareGPA(student1, student2) {
        if (student1.GPA > student2.GPA) {
            return `${student1} has a higher GPA than ${student2}`;
        } else if (student2.GPA > student1.GPA) {
            return `${student2} has a higher GPA than ${student1}`;
        } else if (student1.GPA === student2.GPA) {
            return ` both has the same GPA`
        }
    }
}

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = Student;
} catch {
    module.exports = null;
}