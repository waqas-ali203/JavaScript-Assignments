let Head = prompt("What is your name?")
let Tail = prompt("What is your name?")
 
let value = Math.random()*2
// let NewNumber = Math.floor(value)
let NewNumber = Math.floor(value)
    if (NewNumber == 1){
        alert("You won the toss",Head)
     }
     else{
         alert("You win the toss",Tail)
     }
console.log(NewNumber)