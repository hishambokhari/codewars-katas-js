// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo". 
// -- However, there is a space after the first three characters, hence "edo cruo"

// solve("your code rocks") = "skco redo cruoy"
// solve("codewars") = "srawedoc"

function solve(str){
 let arr = str.split(' ');
  let arr2 = str.replace(/\s/g, "").split('').reverse().join('').split('')
  let arr3 = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++){
    arr3[i] = arr2.slice(counter, counter + arr[i].length).join('')
    counter += arr[i].length
  }
return arr3.join(' ')
}
console.log(solve("your code"))
// describe("Basic tests", function(){
//   Test.assertEquals(solve("codewars"),"srawedoc");
//   Test.assertEquals(solve("your code"),"edoc ruoy");
//   Test.assertEquals(solve("your code rocks"),"skco redo cruoy");
//   Test.assertEquals(solve("i love codewars"),"s rawe docevoli");
//   });