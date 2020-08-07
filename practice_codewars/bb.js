// function hello(name) {
//   if (name === "" || name === undefined ){
//     return "Hello, World!"
//   }
//   let lowerName = name.toLowerCase()
//   let final =  lowerName[0].toUpperCase() + name.slice(1).toLowerCase()
//   return "Hello, " + final + "!"

// }
// console.log(hello())

// function main(verb, noun){
//   return verb + "" + noun
// }

// console.log(main('take','item'))

function capitalizeWord(word) {
  return  word[0].toUpperCase() + word.slice(1).toLowerCase()
}

console.log(capitalizeWord('word'))