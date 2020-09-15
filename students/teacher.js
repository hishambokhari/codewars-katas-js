const Student = require('./student')

class Teacher {

  static all = []
  static nextId = 1


  constructor(name){
    this.name = name
    this.id = Teacher.nextId
    Teacher.all.push(this)
    Teacher.nextId += 1
  }

  assignStudent(student){
    student.teacherId = this.id
  }

  findStudents(){
    return Student.all.filter((student) => {
      return student.teacherId === this.id
    })
  }



}

module.exports = Teacher