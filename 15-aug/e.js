function fix(paragraph){

  let str = paragraph.split(". ")
  let final = []

  for (let i = 0; i<str.length;i++){
    final.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
  }
  return final.join('. ')
}

console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."))

