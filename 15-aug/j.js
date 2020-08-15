// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

function parseF(s) {
  if (Number.isNaN(parseFloat(s))){
     return null
  } else {
    return parseFloat(s)
  }
}
console.log(parseF("s"))
// Test.assertEquals(parseF("1"), 1.0);