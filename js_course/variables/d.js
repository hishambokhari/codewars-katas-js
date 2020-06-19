// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

function arrayMadness(a, b) {
  // find squares of each array
  let squareA = [];
  for(let i = 0; i < a.length;i++){
    
    squareA.push(a[i]*a[i]);
  }
  let squareB = [];
  for(let i = 0; i < b.length;i++){

    squareB.push(b[i]*b[i]*b[i]);
  }

  const sumSquareA = squareA.reduce(function(a, b) { return a + b; }, 0); // sum of array a
  const sumCubeB =  squareB.reduce(function(a, b) { return a + b; }, 0); // sum of array b

  if(sumSquareA > sumCubeB){
    return true;
  } else {
    return false;
  }

  
}
console.log(arrayMadness([5,6,7],[4,5,6]));

// describe("arrayMadness", _ => {
//   it("should work for fixed tests", _ => {
//     Test.assertEquals(arrayMadness([4,5,6],[1,2,3]), true);
//     Test.assertEquals(arrayMadness([5,6,7],[4,5,6]), false);
//     Test.assertEquals(arrayMadness([4,5,6],[3,4,5]), false);
//     Test.assertEquals(arrayMadness([3,4,5],[2,3,4]), false);
//     Test.assertEquals(arrayMadness([2,3,4],[1,2,3]), false);
//     Test.assertEquals(arrayMadness([1,2,3],[0,1,2]), true);
//     Test.assertEquals(arrayMadness([5,3,2,4,1],[15]), false);
//     Test.assertEquals(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
//     Test.assertEquals(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
//     Test.assertEquals(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
//     Test.assertEquals(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);
//   });
// });