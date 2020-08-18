// Your task is to write a function, which takes two arguments and returns a sequence. 
//First argument is a sequence of values, second is multiplier. 
//The function should filter all non-numeric values and multiply the rest by given multiplier.

function multiplyAndFilter(array, multiplier){
  
  let _new = []
  let arr2 = array.filter(function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  });

for(let i = 0; i < arr2.length; i++){
  _new.push(arr2[i]*multiplier)
}
return _new
}
console.log(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3))
// Test.assertSimilar(multiplyAndFilter([1,2,3,4], 1.5), [1.5, 3, 4.5, 6]);
// Test.assertSimilar(multiplyAndFilter([1,2,3], 0), [0, 0, 0]);
// Test.assertSimilar(multiplyAndFilter([0,0,0], 2), [0, 0, 0]);
// Test.assertSimilar(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3), [3,7.5,30]);







