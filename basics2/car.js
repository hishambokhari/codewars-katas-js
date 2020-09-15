const Driver = require('./driver')



class Car {

  static all = []
  static nextId = 1;

  constructor(name,driverId){
    this.name = name;
    this.driverId = driverId
    this.id = Car.nextId
    Car.all.push(this)
    Car.nextId += 1
  }

  getDriver(){
    for(let i =0;i<Driver.all.length;i++){
      if(this.driverId === Driver.all[i].id){
        return Driver.all[i]
      }
    }
  }
}

module.exports = Car
