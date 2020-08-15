// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 

function initials(name){
let capNames = []
let firstCap = name[0].toUpperCase()
let arr = name.split(' ')
let lastName = arr[arr.length-1]
let finalLastName = lastName.slice(1)

for (let i = 0; i < name.length; i++){
  if (name[i+1] == " "){
    capNames.push(name[i+2].toUpperCase())
  }
}
 let finalCap = capNames.toString().replace(/,/g,".")
 
return firstCap + "." + finalCap + finalLastName
}
console.log(initials("code wars"))
// Test.assertSimilar(initials('code wars'),'C.Wars');
// Test.assertSimilar(initials('Barack hussain obama'),'B.H.Obama');
// Test.assertSimilar(initials('barack hussain Obama'),'B.H.Obama');