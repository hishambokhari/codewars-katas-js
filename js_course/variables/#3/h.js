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


  const add = (val) => {
    i += val;
  }

  const subtract = (val) => {
    i -= val;
  }

  const print = (val) => {
      return i;
  };

  return {
    add,
    subtract,
    print
  }

};

const outerCounter = counter();

// console.log(outerCounter);

outerCounter.add(2)
outerCounter.subtract(1)
console.log(outerCounter.print());