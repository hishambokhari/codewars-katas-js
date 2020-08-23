class Person {
  constructor(name,age) {
  this.name = name;
  this.age = age;
  this.info =  `${this.name}s age is ${this.age}`
  }
  
}

let information = new Person('john', 34)
console.log(information.info)

// var john = new Person('john', 34)
// Test.assertEquals(john.info, 'johns age is 34')

