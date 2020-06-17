// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.


function maps(x){
    var newArray = [];

    x.map(function(y){
        newArray.push(y*2);
    });

    return newArray;

}
console.log(maps([1, 2, 3]));

// Test.describe("Example tests",()=>{
//     Test.assertDeepEquals(maps([1, 2, 3]), [2, 4, 6]);
//     Test.assertDeepEquals(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
//     Test.assertDeepEquals(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
//   });