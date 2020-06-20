// const  gList = ["bread","milk","eggs","tomato"];

// // print all the names below

// let len = gList.length;

// // for(let i = 0; i <= len -1;i++){
// //   console.log(`${i} - ${gList[i]}`)
// // }

// // gList.forEach((item, index)=> {
// //   console.log(`${index} - ${item}`)
// // })

//Objects

const profile = {
  name: "john",
  age: 30,
  single: true,
  "got a job": true,
  kids: [{
    name: "peter",
    age: 3
  }, {
    name: "kate",
    age: 2
  }]
};

// profile.kids.push({name: "joe",age: 5})
// console.log(profile.kids)

//itterating objects
// for(let prop in profile){
// console.log(`key:${prop} - value:${profile[prop]}`)
// }

// Destructuring

// const obj = { x:1, y:2};

// let {x, y} = obj;

// console.log(y)


// maps using callbacks

//  const numAry = [1,2,3];

//  const cb = function(e){
//    if(e%2===0){
//    return e
//   } else {
//     return e*2
//   }
//  }


//  const newArray = numAry.map(cb);


 // using filter ro remove even values value


//  const numAry = [1,2,3];

//  const cb = function(e){
//    if(e%2===0){
  
//   } else {
//     return e*2
//   }
//  }


//  const newArray = numAry.filter(cb);


//  console.log(newArray);

//sorting

// const ary = [1,2,5,8,3,9,4,22];



// const cb = function(a,b){
//   return a-b
// }

// ary.sort(cb)

// console.log(ary)