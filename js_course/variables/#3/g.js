// function numbers(x,y){
//   if (x == 100 || (x + y == 100)){
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(numbers(10,90));

// write a function in js to get the extension of a filename

const fileName = (str) => str.slice
(str.lastIndexOf('.'));
console.log(fileName('index.html'));