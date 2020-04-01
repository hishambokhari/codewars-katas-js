// Wilson primes satisfy the following condition.
//  Let P represent a prime number.

// Then ((P-1)! + 1) / (P * P) should give a whole number.

// Your task is to create a function
//  that returns true if the given number is a Wilson prime.

function amIWilson(p) {
  // "The only known Wilson primes are 5, 13 and 563."
  return p==5 || p==13 || p==563
}

  console.log(amIWilson(5))

//   Test.assertEquals(amIWilson(5), true)
// Test.assertEquals(amIWilson(9), false)
// Test.assertEquals(amIWilson(6), false)