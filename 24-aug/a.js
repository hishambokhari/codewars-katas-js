// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  
  let vowelCount = 0;

  for (let i = 0; i <str.length;i++){
    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
      vowelCount += str[i].length
    }
  }

  return vowelCount
}
console.log(getCount("o a kak ushakov lil vo kashu kakao"))
// describe("Case 1", function(){
//   it ("should be defined", function(){
//       Test.assertEquals(getCount("abracadabra"), 5)
//   });
// });