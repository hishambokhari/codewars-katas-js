const Chef = require('./chef')

class Recipe {

  static all = []
  static nextId = 1;



  constructor(name,level,chefId){
    this.name = name;
    this.level = level
    this.id = Recipe.nextId
    this.chefId = chefId
    Recipe.all.push(this)
    Recipe.nextId += 1
  }

  getChef(){
    console.log(Chef.all)
    console.log(this.chefId)
    for(let i=0;i<Chef.all.length;i++){
      if(this.chefId === Chef.all[i].id){
        return Chef.all[i]
      }
    }
  }


}

module.exports = Recipe