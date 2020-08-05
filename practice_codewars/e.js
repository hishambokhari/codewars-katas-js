// let users = [1,2,3,4,5,6,1,1,1,4,5,6,"john","jane","tom"];

// //filtering the users array and saving 
// //result back in users variable
//  function uniq(value, index, self){
//    return self.indexOf(value) === index
//  }
//  console.log(users.filter(uniq))

// //logging out the result in console



let multiple = [1,1,1,1,1,1,2,2,2,2,3,4,5,6,7,8,9]

function unique(value, index, self){
  return self.indexOf(value) === index
}

console.log(multiple.filter(unique))