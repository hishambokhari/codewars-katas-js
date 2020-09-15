const Student = require('./student')
const Teacher = require('./teacher')


ann = new Teacher("Miss Ann")
karen = new Teacher("Miss Karen")
sophie = new Teacher("Sophie")


hish = new Student("Hish")
sayem = new Student("Sayem")
haider = new Student("Haider")



ann.assignStudent(hish)
ann.assignStudent(sayem)
karen.assignStudent(haider)

console.log(hish.delete())


// console.log(karen.findStudents())

// console.log(hish)
// console.log(sayem)
// console.log(haider)
