// In English, all words at the begining of a sentence should begin with a capital letter.

// You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

// For example,

// input:

// "hello. my name is inigo montoya. you killed my father. prepare to die."

// output:

// "Hello. My name is inigo montoya. You killed my father. Prepare to die."

// You may assume:

// there will be no punctuation besides full stops and spaces

// all but the last full stop will be followed by a space and at least one word

// function fix(paragraph){

// let newParagraph = paragraph[0].toUpperCase() + paragraph.slice(1)



// }

// Test.assertEquals(fix(""), "")
// Test.assertEquals(fix("hi."), "Hi.")
// Test.assertEquals()
//   fix("hello. my name is inigo montoya. you killed my father. prepare to die."),
//   "Hello. My name is inigo montoya. You killed my father. Prepare to die.")

function fix(paragraph){
 
    let str = paragraph.split(". ")
  
    let myArray = []
    for(let i = 0; i < str.length; i++) {
  //    str += paragraph[i].charAt(0).toUpperCase()
      myArray.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
       
    }
    // console.log(str)

    return (myArray.join(". "))
    
  }

console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."))