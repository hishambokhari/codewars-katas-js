// removing duplicates practice

let nums = [1,2,3,2]; // [1,2,3]\
let b = [];

for (let i = 0; i < nums.length;i++){
  if(b.indexOf(nums[i]) === -1){
    b.push(nums[i])
  }
}
console.log(b)

