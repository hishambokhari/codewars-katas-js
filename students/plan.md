 what are the models/classes?

 for each class write the following:
 -the functionality
 -relationship(one to many/ belongs to etc)
 -all the instance variables and methods
 -all the class variables and methods

 --------------------------------------
Functionslity:

Each class will auto increment id

Teacher has many students

Student belongs to a teacher

 Teacher class

 class variables: {
   all,
   nextId
 }

 instance variables : {
   id,
   name
 }
 

Student Class


 class variables{
   all,
   nextId
 }
 
 instance variables : {
   id
   name,
   teacherId
 }

 findMyTeacher(){
   return Teacher.all.filter(function(teacher){
     return teacher.id === this.teacherId
   })
 }

 findMyStudents(){
   return Student.all.filter(function(student){
     i want to check if the student on line 52 will have the same teacherId as the id of this teacher instance
     return this.id === student.teacherId
   })
 }


 - Single Source of Truth
 - Primary key and foreign keys (Associations)
 - One to many
 - Many to Many
 - Inheritance
 