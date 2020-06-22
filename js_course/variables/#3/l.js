// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

function halvingSum(n) {
    
  let sum = 0;

  while (n>0) {
    sum += n;
    n = Math.floor(n/2);
  }
  return sum;
  }


console.log(halvingSum(25));
// Test.describe("Test Case", function() {
//   Test.it("Test", function() {
//     Test.assertEquals(halvingSum(25),47);
//     Test.assertEquals(halvingSum(127),247);
//   });
// });