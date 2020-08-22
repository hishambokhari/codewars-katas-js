// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {

if (n%x == 0 && n%y == 0){
  return true
}else {
  return false
}

}
console.log(isDivisible(12,3,4))
// Test.assertSimilar(isDivisible(3,3,4),false);
// Test.assertSimilar(isDivisible(12,3,4),true);
// Test.assertSimilar(isDivisible(8,3,4),false);
// Test.assertSimilar(isDivisible(48,3,4),true);