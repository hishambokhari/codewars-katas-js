// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

// For example:

// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

// function solution(a, b){
  
// if (a.length<b.length){
//   return a+b+a
// } else {
//   return b+a+b
// }

// }
// console.log(solution('U','False'))
// describe("Sample tests", function() {
//   it("Should pass sample tests", function() {
//     Test.assertEquals(solution('45', '1'), '1451');
//     Test.assertEquals(solution('13', '200'), '1320013');
//     Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
//     Test.assertEquals(solution('U', 'False'), 'UFalseU');
//   });
// });
    

// Write a function called repeat_str which repeats the given string src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// function repeatStr (n, s) {
   
//  return s.repeat(n)
// }
// console.log(repeatStr(3,"*"))
// describe("Tests", function() {
//   it ("Basic tests", function() {
//     Test.assertSimilar(repeatStr(3, "*"), "***");
//     Test.assertSimilar(repeatStr(5, "#"), "#####");
//     Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
//   });
// });