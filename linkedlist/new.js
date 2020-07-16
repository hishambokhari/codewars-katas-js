//finding 9

const array = [2,4,6,9,100,700];
console.log(array);


function binary_search(arr, value){
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while(low <= high){
    mid = Math.floor((high+ low)/2);
    if (arr[mid] == value){
      return arr[mid];
    } else if (value > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binary_search(array, 750))
