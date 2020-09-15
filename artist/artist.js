const Painting = require('./painting')

class Artist {

  static all = []
  static nextId = 1;

  constructor(name){
    this.name = name;
    this.id = Artist.nextId

    Artist.all.push(this)
    Artist.nextId += 1
  }

  made(painting){
    painting.artistId = this.id
  }

  findMyPainting(){
    let currentId = this.id
    return Painting.all.filter(function(painting){
      return painting.artistId === currentId
    })
  }



}

module.exports = Artist