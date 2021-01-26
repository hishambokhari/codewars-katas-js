// Given a month as an integer from 1 to 12, 
// return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), 
// is part of the fourth quarter.


// 4 quarters:
// 1st quarter = Jan - March
// 2nd quarter = April - June
// 3rd quarter = July - Sep
// 4th quarter = Oct - Dec

// if the month is equal to or in between the quarter return that quarter.

function quarterOf(month){

  let firstQ = 1 
  let secondQ = 2
  let thirdQ = 3
  let fourthQ = 4

  if(month >=1 && month <= 3){
   return firstQ
  }
  else if(month >= 4 && month <= 6){
   return secondQ
  }else if(month >= 7 && month <= 9){
    return thirdQ
  } else {
    return fourthQ
  }

}
console.log(quarterOf(11))

// Test.describe("Basic Tests", () =>{
//   Test.assertEquals(quarterOf(3), 1)
//   Test.assertEquals(quarterOf(8), 3)
//   Test.assertEquals(quarterOf(11), 4)
// });