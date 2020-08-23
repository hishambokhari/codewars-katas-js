// class Person {
//   constructor(name,age) {
//   this.name = name;
//   this.age = age;
//   this.info =  `${this.name}s age is ${this.age}`
//   }
  
// }

// let information = new Person('john', 34)
// console.log(information.info)

// var john = new Person('john', 34)
// Test.assertEquals(john.info, 'johns age is 34')

class Cat extends Animal {
  
  constructor(name,speak){
    super(name, speak)
    this.name = name
    this.speak = function(){
      return `${name} meows.`
    }
  }
  
}
