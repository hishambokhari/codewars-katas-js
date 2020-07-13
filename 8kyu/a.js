// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {
  const vals = [];

  for (let i = n;n >0;n--){
    vals.push(n)
  }
  return vals

};

console.log(reverseSeq(5))

// const { assert } = require("chai");

// describe("reverseSeq", function() {
//   it("Sample Test", function() {
//     assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
//   });
// });