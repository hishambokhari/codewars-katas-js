// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

// For Example:

// [
//   [1, 2, 3, 4, 5],       // minimum value of row is 1
//   [5, 6, 7, 8, 9],       // minimum value of row is 5
//   [20, 21, 34, 56, 100]  // minimum value of row is 20
// ]
// So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

// Note: You will be always given non-empty array containing Positive values.

// ENJOY CODING :)

function sumOfMinimums(arr) {
  const array1 = math.min(...[1,2,3,4])
  const array2 = math.min(...[10,11,12,12])
  const array3 = math.min(...[20,21,22,23])
  
    const arr = array1.concat(array2)
    const finalArr = arr.concat(array3)
    console.log(
      finalArr.reduce(function(acc, val) { return acc + val; }, 0)
    )
    return finalArr
}


console.log(sumOfMinimums(arr));
