function Dom(){
    var Num1 = parseInt(prompt('Enter 1st Number'))
    var Num2 = parseInt(prompt('Enter 2nd Number'))
    var Num3 = parseInt(prompt('Enter 3rd Number'))
    var Num4 = parseInt(prompt('Enter 4th Number'))

    var Max = Math.max(Num1, Num2, Num3, Num4)
    document.getElementById('second-div').innerHTML = "Your Maximun Number is" + Max 
}



function Dom(){

var ObtainMarks = parseInt(prompt("Enter your Obtain Marks"))
var TotalMarks = parseInt(prompt("Enter your Total Marks"))
var total = (ObtainMarks/TotalMarks)*100

document.getElementById('second-div').innerHTML = " Your Percentage is " + total 

}




function Dom(){

var a = parseInt(prompt("Enter your first number"))
var b = parseInt(prompt("Enter your second number"))
var Operater = prompt("Enter your operater")

 switch (Operater){
    case '*': document.getElementById('second-div').innerHTML = " Your Answer is " + (a*b) 
    break;
    case '+': document.getElementById('second-div').innerHTML = " Your Answer is " + (a+b) 
    break;
    case '-': document.getElementById('second-div').innerHTML = " Your Answer is " + (a-b) 
    break;
    case '/': document.getElementById('second-div').innerHTML = " Your Answer is " + (a/b) 
    break;
    case '%': document.getElementById('second-div').innerHTML = " Your Answer is " + (a%b) 
    break;
    default: document.getElementById('second-div').innerHTML = " You Select wrong Opeerator "
 } 
}




function Dom(){

 var a = parseInt(prompt('Enter a number'))

  if(a > 0){
     document.getElementById('second-div').innerHTML = " Your Percentage is Positive" 

  }
  else if(a<0){
     document.getElementById('second-div').innerHTML = " Your Percentage is Negative" 

  }
  else {
    document.getElementById('second-div').innerHTML = " Your Percentage is Zero or Null" 

  }

}
