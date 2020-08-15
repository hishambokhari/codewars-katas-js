function digitize(n) {
 return n.toString().split('').map(Number).reverse()
}
console.log(digitize(35231))
// Test.assertDeepEquals(digitize(35231),[1,3,2,5,3]);
