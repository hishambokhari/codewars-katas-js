// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name){

  let newName =name.toString().replace(/\s/g, '.')
   newName[0].toUpperCase() + newName.slice(1)
   let firstCap = newName[0]
   let final = []

  for(let i = 0; i < newName.length; i++){
    if (newName[i].includes(".")){
     final.push(firstCap.toUpperCase() + "." + (newName[i+1]).toUpperCase())
    }
  }
  
  return final.toString()

}
console.log(abbrevName("sam harris"))
// Test.assertEquals(abbrevName("Sam Harris"), "S.H");
// Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
// Test.assertEquals(abbrevName("Evan Cole"), "E.C");
// Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
// Test.assertEquals(abbrevName("David Mendieta"), "D.M");