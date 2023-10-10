let NewElement = prompt("")
var NewElement2 = NewElement.slice(0,1).toUpperCase()
console.log(NewElement2)

var NewElement3 = NewElement.slice(length-1).toUpperCase()
console.log(NewElement3)
var NewElement4 = NewElement2 + NewElement.slice(1,length-2) + NewElement3 
console.log(NewElement4)