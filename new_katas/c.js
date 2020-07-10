// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {

  const seen = new Set();
  return s
    .split(' ').filter(word => {
      if (seen.has(word)) return false;
      seen.add(word);
      return true;
    }).join(' ');
  
}
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
))
// Test.describe('Example tests', _ => {
//   Test.it('should handle example case', _ => {
//     Test.assertEquals(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
//   });
// });