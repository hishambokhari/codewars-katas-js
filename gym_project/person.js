const Gym = require('./gym')


class Person {

  static all = [];
  static nextId = 1;

  constructor(name){
    this.name = name;
    this.id = Person.nextId
    this.gymId = null
    Person.all.push(this)
    Person.nextId += 1
  }

}


module.exports = Person