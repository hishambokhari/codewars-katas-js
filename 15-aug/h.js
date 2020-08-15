// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

function reject(array) {
  
  return array.filter(function(num){ return num % 2 !== 0 })

}
console.log(reject([1,2,3,4,5,6] ) )
// Test.assertSimilar(reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [1, 3, 5]);