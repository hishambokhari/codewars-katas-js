// // Binary Search

// let array = [1,3,2,5,7,4]
// array.sort(function(a,b){return a - b})

// function BinarySearch(arr, value){
//   let high = arr.length - 1
//   let low = 0
//   let mid = 0

//   while (low <= high){
//     mid = Math.floor((high+low)/2)
//     if (value == arr[mid]){
//       return arr[mid]
//     }
//     else if (value > arr[mid]){
//       low = mid + 1
//     } else {
//       high = mid - 1
//     }
//   }
//   return - 1
// }

// let search = BinarySearch(array, 10)
// console.log(search)


//Recursion
//factorial
// function recursiveFunc(n){
//   if (n === 2){
//     return 2
//   }
//   return n * recursiveFunc(n-1)
// }
// console.log(recursiveFunc(5))

//Fibonnaci

function recursiveFunc(n){
  if (n < 2){
    return n
  }
  return recursiveFunc(n-1) + recursiveFunc(n-2)
}
console.log(recursiveFunc(8))