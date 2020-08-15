// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
  let newName = name.toLowerCase()
  return "Hello " + newName[0].toUpperCase() + newName.slice(1) + "!"
};
console.log(greet("BILLY"))



// Test Results:
//  Greet Me
//  should return 'Hello Name!', if all lowerCase string is given
//  should return 'Hello Name!' if string is all upperCase
// Expected: 'Hello Billy!', instead got: 'Hello BILLY!'
// Completed in 1ms
//  should return 'Hello Name!' for random string
// Expected: 'Hello Awstfccemo!', instead got: 'Hello AwStFCCEMo!'
// Completed in 6ms