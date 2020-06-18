// undefined

let myDogsName;

myDogsName = 'cujo';

// console.log(myDogsName); // gives undefined


// type of




// null - where you manually give a value of null

myDogsName = null; // type of null is an object

console.log(typeof(myDogsName));


// Math methods

console.log(Math.pow(10,2)) // find 10 to the power 2

console.log(Math.min(10,2,3,4)) //  finds the min number

console.log(Math.abs(4)) // turns negative into positive

// Math.random()

let rand = Math.random(); // does not produce number more than 1
console.log(rand);

// convert random  number to int

// let rando = Math.random() * 100; // does not produce number more than 1
// console.log(rando);

// Floor
let max = 2;
let random = Math.floor(Math.random() * 100) // no floating numbers using floor
console.log(random);