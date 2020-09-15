class Chef {

  static all = []
  static nextId = 1

  constructor(name){
    this.name = name;
    this.recipe = [];
    this.id = Chef.nextId;

    Chef.all.push(this)
    Chef.nextId += 1
    
  }

 

}


module.exports = Chef