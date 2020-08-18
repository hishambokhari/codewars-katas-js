//remove duplicates

// let a = [1,2,5,2,1,8]
// let b = [];

// for (let i = 0; i < a.length;i++){
//   if(b.indexOf(a[i]) === -1){
//       b.push(a[i])
//   }
// }
// console.log(b)

let a = [1,2,5,2,1,8]
let b = []
let _temp;

a.sort(function(a,b){return a - b})


for(let i = 0; i < a.length;i++){
  if (a[i] !==  _temp){
    b.push(a[i]);
    _temp = a[i]
  }
}
console.log(b)