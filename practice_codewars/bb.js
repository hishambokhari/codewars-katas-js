function hello(name) {
  if (name === "" || name === undefined ){
    return "Hello, World!"
  }
  let lowerName = name.toLowerCase()
  let final =  lowerName[0].toUpperCase() + name.slice(1).toLowerCase()
  return "Hello, " + final + "!"

}
console.log(hello())