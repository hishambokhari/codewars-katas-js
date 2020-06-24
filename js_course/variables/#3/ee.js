// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  // 4 total quarters of 3 months each.
  // q1 - month 1 to 3, q2 - 4-6, q3 - 7-9, q4 10-12
  
  if(month >= 1 && month <= 3){
    return 1;
  } else if(month >=4 && month <= 6){
    return 2;
  } else if(month >= 7 && month <= 9){
    return 3;
  } else {
    return 4;
  }
  
}

console.log(quarterOf(11));

// Test.describe("Basic Tests", () =>{
//   Test.assertEquals(quarterOf(3), 1)
//   Test.assertEquals(quarterOf(8), 3)
//   Test.assertEquals(quarterOf(11), 4)
// });