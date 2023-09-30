var ObtainMarks = parseInt(prompt("Enter your Obtain Marks"))
var TotalMarks = parseInt(prompt("Enter your Total Marks"))
var total = (ObtainMarks/TotalMarks)*100
document.write("Your percentage is " , total);

if(total >= 90){
    document.write("<br>Your grade is A")
}
else if(total >= 80 ){
    document.write("<br>Your grade is B")
}
else if(total >= 60 ){
    document.write("<br>Your grade is C")
}
else if(total >= 40 ){
    document.write("<br>Your grade is D")
}
else{
    document.write("<br>Your grade is F")
}