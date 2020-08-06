// Binary Search

let array = [1,3,2,5,7,4]
array.sort(function(a,b){return a - b})

function BinarySearch(arr, value){
  let high = arr.length - 1
  let low = 0
  let mid = 0

  while (low <= high){
    mid = Math.floor((high+low)/2)
    if (value == arr[mid]){
      return arr[mid]
    }
    else if (value > arr[mid]){
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return - 1
}

let search = BinarySearch(array, 10)
console.log(search)
