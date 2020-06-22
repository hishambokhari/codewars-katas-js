// // closures

// const x = () => {
//   let i = 0;

//   const returnX = () => {
//     console.log(i);
//   };

//   return {
//     returnX 
//   }
// };

// x().returnX();

//example -  Interview Question

const counter = () => {
  let i = 0;

  return {
    add(val){
      i+= val
      return this
    },
    subtract(val){
      i -= val
      return this
    },
    print(val){
      return i;
    }
  }

};

const outerCounter = counter();

// console.log(outerCounter);


// chaining
let output = outerCounter.add(2).subtract(1).print();

console.log(output);