// Subtract the sum
// NOTE! This kata can be more difficult than regular 8-kyu katas (lets say 7 or 6 kyu)

// Complete the function which get an input number n such that n >= 10 and n < 10000, then:

// Sum all the digits of n.
// Subtract the sum from n, and it is your new n.
// If the new n is in the list below return the associated fruit, otherwise return back to task 1.
// Example
// n = 325
// sum = 3+2+5 = 10
// n = 325-10 = 315 (not in the list)
// sum = 3+1+5 = 9
// n = 315-9 = 306 (not in the list)
// sum = 3+0+6 = 9
// n =306-9 = 297 (not in the list)
// . .
// . ...until you find the first n in the list below.

// There is no preloaded code to help you. This is not about coding skills; think before you code

function SubtractSum(a){

  const n = 325
  const toStr = n.toString();
  const splitStr = toStr.split('').map(function(i){
    return parseInt(i, 10);
  });
  const sumStr = splitStr.reduce(function(a,b){return a + b}, 0)
  const nw = n-sumStr

  return nw;
}

  //   const subSum = n.toString()
//   // split into single numbers
//  const spl = subSum.split('')
//   // sum of the single numbers
// const sumSpl = spl*1;
// return sumSpl;
  console.log(SubtractSum(2))

  // describe("Solution", function(){
  //   it("Basic Test", function(){
  //     Test.assertEquals(SubtractSum(10), "apple");
  //   });
  // });