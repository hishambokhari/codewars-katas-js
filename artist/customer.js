const Painting = require('./painting')

class Customer {

  static all = []
  static nextId = 1


  constructor(name){
    this.name = name;
    this.id = Customer.nextId
    
    Customer.all.push(this)
    Customer.nextId += 1
  }

  purchasePainting(painting){
    painting.customerId = this.id
  }


}

module.exports = Customer