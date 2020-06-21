// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {

  let vowelsCount = 0;

  for(let i = 0; i < str.length;i++){
    const currentLetter = str[i];

    if (currentLetter == 'a' || currentLetter == 'e' || currentLetter == 'i' || currentLetter == 'o' || currentLetter == 'u'){
      vowelsCount++;
    }
  }

  return vowelsCount;
}

console.log(getCount("abracadabra"))


// describe("Case 1", function(){
//   it ("should be defined", function(){
//       Test.assertEquals(getCount("abracadabra"), 5)
//   });
// });