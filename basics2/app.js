// const Chef = require('./chef')
// const Recipe = require('./recipe')
const Car = require('./car')
const Driver = require('./driver')


// haider = new Chef("haider")
// hisham = new Chef("hisham")

// const chicken = new Recipe("chicken wrap","beginner",hisham.id)
// const beef = new Recipe("Beef burger","advanced",haider.id)
// console.log(chicken.getChef())

alonso = new Driver("Alonso","F1")
max = new Driver("Max","F1")
mclaren = new Car("Mclaren",alonso.id)
redbull = new Car("Redbull")

console.log(mclaren,mclaren.getDriver())