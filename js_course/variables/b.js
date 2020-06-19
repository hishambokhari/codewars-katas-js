// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  
 let xCount = 0;
 let yCount = 0;

 for(i=0;i<str.length;i++){
   if(str[i].match(/X/i)){
      xCount++; 
   } else if (str[i].match(/O/i)){
     yCount++;
   }
 }

 return xCount == yCount;

}

console.log(XO("xxOo"));

// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);