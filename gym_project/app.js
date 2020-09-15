const Gym = require('./gym')
const Person = require('./person')


fc = new Gym("fc")
matrix = new Gym("matrix")
mix = new Gym("mix")

haider = new Person("haider")
hisham = new Person("hisham")
sayem = new Person("sayem")

fc.signUpMember(haider)
fc.signUpMember(hisham)
mix.signUpMember(sayem)

console.log(fc.findMembers())
// console.log(haider)
// console.log(hisham)
// console.log(sayem)



// console.log(haider)
// console.log(hisham)
// console.log(sayem)