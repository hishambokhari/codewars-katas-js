const newArr = [{id:1},{id:21},{id:14},{id:13},{id:51},{id:91}]

let filteredArr = newArr.filter(function(number){
 return  number.id>50
})

console.log(filteredArr)