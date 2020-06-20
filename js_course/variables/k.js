// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
  
//   const newArray = arr1.concat(arr2)

//   return newArray.reduce(function(acc, val) { return acc + val;}, 0)


// }

// console.log(arrayPlusArray([1,2,3],[4,5,6]))

// Test.describe("Basic tests",function(){
//   Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//   Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//   Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//   Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
// })



// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
  
//   let sum = 0;

//   for(let i = 0;i < arr.length;i++){
//     if(arr[i] > 0){
//       sum += arr[i];
//     }
//   }
// return sum;
    
// }

// console.log(positiveSum([1,-2,3,4,5]));

// Test.assertEquals(positiveSum([1,2,3,4,5]),15);
// Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
// Test.assertEquals(positiveSum([]),0);
// Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
// Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);




// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

// function removeEveryOther(arr){

//   let newArr = [];

//   for(let i = 0;i <arr.length;i+=2){
//     newArr.push(arr[i]);
//   }
//   return newArr;

// }

// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// Test.describe("Basic tests",_=>{
//   Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
//   Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
//   Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
//   Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
//   })

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

function arr(n){
  var newArr = [];
  for(var i = 0; i < n; i++){
    newArr.push(i);
  }
  return newArr;
}

console.log(arr(4))

// describe('#arr creates a new array with the numbers 0 to N-1',_=>{
//   it('should return an array',_=>Test.expect(arr() instanceof Array));
//   it('should return a blank array when called with no argument',_=>Test.assertSimilar(arr(), []));
//   it('should return 0 to 3 when called with 4',_=>Test.assertSimilar(arr(4), [0,1,2,3]));
// });