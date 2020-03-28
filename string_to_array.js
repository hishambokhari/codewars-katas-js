// Write a function to split a string and convert it into an array of words. 
// For example:

// "Robin Singh" ==> ["Robin", "Singh"]

function stringToArray(string){
  return string.trim().split(" ");
}

console.log(stringToArray("Hisham Bokhari"))