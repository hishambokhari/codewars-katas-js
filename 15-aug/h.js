// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

function reject(array, predicate) {
  let newArr = []
  for (let i =0; i <array.length;i++){
    predicate = (array[i] % 2 !== 0 )
   if (predicate){
     newArr.push(array[i])
   }
  }
return newArr

}
console.log(reject([1,2,3,4,5,6], ) )
// Test.assertSimilar(reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [1, 3, 5]);