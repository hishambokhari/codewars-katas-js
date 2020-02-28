// Grade book
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  const meanValue = ((s1+s2+s3)/3)
  if ( meanValue >= 90 && meanValue <= 100) {
    return 'A' 
  }
  if ( meanValue >= 80 && meanValue <= 90) {
    return 'B' 
  }
  if ( meanValue >= 70 && meanValue <= 80) {
    return 'C' 
  }
  if ( meanValue >= 60 && meanValue <= 70) {
    return 'D' 
  }
  if ( meanValue >= 0 && meanValue <= 60) {
    return 'F' 
  }
}

console.log(getGrade(20, 35, 22));