// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){

// place to store alt cap starting with even numbers called evenCap

const chars = s.toLowerCase().split("");
for(i=0;i < s.length;i+=2){
  chars[i] = chars[i].toUpperCase();
}
let  capStart = chars.join("")

const oddChars = s.toLowerCase().split("");
for(i=1;i < s.length;i+=2){
  oddChars[i] = oddChars[i].toUpperCase();
}
let  oddStart = oddChars.join("")


const finalResult = [capStart,oddStart];
return finalResult;
};

// place to store alt cap starting with odd numbers called oddCap
// itterate over evenCap to add toUpperCase to alt indexes
// itterate over odd Cap to add toupperCase to alt indexes
// join the two arrays as finalCap
// return finalCap





  

console.log(capitalize("abcdef"));
// describe("Basic tests", function(){
//   Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
//   Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
//   Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
//   Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
//   });