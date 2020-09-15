class Driver {

  static all = [];
  static nextId = 1;

  constructor(name,level){
    this.name = name;
    this.level = level;
    this.id = Driver.nextId

    Driver.all.push(this)
    Driver.nextId += 1
  }
}

module.exports = Driver