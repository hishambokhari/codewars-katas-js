// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmiScore = weight/(height*height)
  if(bmiScore <= 18.5){
    return "Underweight"
  } else if(bmiScore > 18.5 && bmiScore <= 25.0){
    return "Normal"
  } else if(bmiScore > 25.0 && bmiScore <= 30.0){
    return "Overweight"
  } else {
    return "Obese"
  }
}

console.log(bmi(80, 1.8));

// Test.assertEquals(bmi(80, 1.80), "Normal");
