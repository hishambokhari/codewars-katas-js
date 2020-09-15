class Painting {

  static all = []
  static nextId = 1;

  constructor(name){
    this.name = name;
    this.id = Painting.nextId
    this.artistId = null

    Painting.all.push(this)
    Painting.nextId += 1
  }



}

module.exports = Painting