class Member {

  static all = []
  static nextId = 1

  constructor(name){
    this.name = name;
    this.id = Member.nextId
    Member.all.push(this)
    Member.nextId += 1
  }


}

module.exports = Member