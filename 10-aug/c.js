// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s){
  
let vowels = ['a','e','i','o','u']
let count = 0;
let highestCount = 0;

for(let i =0;i < s.length;i++){
if (vowels.includes(s[i]) && vowels.includes(s[i+1])){
    count++
  } else {
    if (highestCount < count)
     highestCount = count;
     count = 1
  } 
}
return highestCount
}
console.log(solve('codewarriors'))


//  describe("Basic tests", function(){
//   Test.assertEquals(solve("codewarriors"),2);
//   Test.assertEquals(solve("suoidea"),3);
//   Test.assertEquals(solve("ultrarevolutionariees"),3);
//   Test.assertEquals(solve("strengthlessnesses"),1);
//   Test.assertEquals(solve("cuboideonavicuare"),2);
//   Test.assertEquals(solve("chrononhotonthuooaos"),5);
//   Test.assertEquals(solve("iiihoovaeaaaoougjyaw"),8);
//   });