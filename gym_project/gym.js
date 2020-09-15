const Person = require('./person')

class Gym {

  static all = [];
  static nextId = 1;

  constructor(name){
    this.name = name
    this.id = Gym.nextId
    Gym.all.push(this)
    Gym.nextId += 1
  }

  signUpMember(person){
    person.gymId = this.id
  }

  findMembers(){
    return Person.all.filter((person) => {
      return person.gymId === this.id
    })
  }

}

module.exports = Gym;