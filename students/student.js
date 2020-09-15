class Student {

  static all = []
  static nextId = 1

  constructor(name){
    this.name = name;
    this.id = Student.nextId;
    this.teacherId = null;
    Student.all.push(this)
    Student.nextId += 1
  }

  
  delete(){
    let currentStudent = this
    return  Student.all.filter(function(student){
      return student !== currentStudent
      
   })
  }

  
}






module.exports = Student