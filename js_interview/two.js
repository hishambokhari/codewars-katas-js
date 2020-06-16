// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name){

    const splt = name.split(' ')
   const first = splt[0][0].toUpperCase()
   const last = splt[1][0].toUpperCase()
   const join = first + "." + last
   
  
    return join;
}

console.log(abbrevName("hish bokhari"));

// Test.assertEquals(abbrevName("Sam Harris"), "S.H");
// Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
// Test.assertEquals(abbrevName("Evan Cole"), "E.C");
// Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
// Test.assertEquals(abbrevName("David Mendieta"), "D.M");