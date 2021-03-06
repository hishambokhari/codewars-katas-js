// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(string){
  
  return [
    string.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join(''),
    string.split('').map((c, i) => i % 2 !== 0 ? c.toUpperCase() : c.toLowerCase()).join(''),
  ]
};

console.log(capitalize("abcdef"))
// describe("Basic tests", function(){
//   Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
//   Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
//   Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
//   Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
//   });