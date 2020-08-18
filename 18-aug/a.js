// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

function evenChars(string) {
  if (string.length < 2 || string.length > 100){
    return "invalid string"
  }
  
  let arr = [];

  for(let i = 1; i < string.length; i= i+2){
    arr.push(string[i])
  }
  return arr;
}
console.log(evenChars("abcdefghijklm"))
//   Test.assertSimilar(evenChars ("a"), "invalid string")
// Test.assertSimilar(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])