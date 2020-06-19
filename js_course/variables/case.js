// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "


function doubleChar(str) {
  let count = "";

  for(let i = 0;i < str.length; i++){
    count = count + str[i] + str[i];
  }
  return count;
}

console.log(doubleChar("hello"))
// Test.describe("doubleChar", function() {
//   Test.it("works for some examples", function() {
//     Test.assertEquals(doubleChar("abcd"), "aabbccdd");
//     Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
//     Test.assertEquals(doubleChar("1337"), "11333377");
//     Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
//     Test.assertEquals(doubleChar("123456"), "112233445566");
//     Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
//   });
// });
