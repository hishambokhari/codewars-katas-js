// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values){
  
  let sorted = values.sort();
  let smallest = [];

  for(let i=0;i < sorted.length;i++){
    if(smallest.indexOf(sorted[i]) === -1){
      smallest.push(sorted[i]);
    }
  }
  return Number(smallest.join(""));
}

console.log(minValue([1,3,1]));

// describe("Basic tests",_=>{
//   Test.assertEquals(minValue([1, 3, 1]), 13);
//   Test.assertEquals(minValue([4, 7, 5, 7]), 457);
//   Test.assertEquals(minValue([4, 8, 1, 4]), 148);
//   Test.assertEquals(minValue([5, 7, 9, 5, 7]), 579);
//   Test.assertEquals(minValue([6, 7, 8, 7, 6, 6]), 678);
//   Test.assertEquals(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
//   Test.assertEquals(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
//   Test.assertEquals(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
//   Test.assertEquals(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
// });