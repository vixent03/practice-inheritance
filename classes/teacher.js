const Person = require('./person');

// Your code here

class Teacher extends Person {
    super(firstName, lastName, age)
    constructor(subject, yearsOfExperience) {

        this.subject = 'subject'
        this.yearsOfExperience = 'yearsOfExperience'
    }
    static combinedYearsOfExperience(...Teacher) {
        Teacher.forEach(Teacher => {
            let sum = 0
            let totalsum = sum += Teacher.YearsOfExperience
            return totalsum
        })
    }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = Teacher;
} catch {
    module.exports = null;
}