// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(array) {
  //place to store the counts
  const counts = {};

  //itterate over the array
  for(let i = 0 ; i < array.length; i++){
    const number = array[i]
    if (!counts[number]){
      counts[number] = 1;
    } else {
      counts[number]++;
    }
  }

  //  if we have not seen this number before 
  // add it to counts with a value of 1
  // if we have seen this number before
  //increment its count

  // iterate over the counts
  for (const number in counts){
    const count = counts[number]
    if (count % 2 !== 0) {
      return Number(number);
    }
  }
  // if the count is odd
  //return that number
}

// function doTest(a, n) {
//   console.log("A = ", a);
//   console.log("n = ", n);
//   Test.assertEquals(findOdd(a), n);
// }
// Test.describe('Example tests', function() {
//   doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//   doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   doTest([10], 10);
//   doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//   doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });