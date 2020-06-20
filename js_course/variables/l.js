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

profile.kids.push({name: "joe",age: 5})

console.log(profile.kids)