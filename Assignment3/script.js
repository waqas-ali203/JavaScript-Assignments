 // ************ SWITCH CASE *****////

 var a = parseInt(prompt("Enter your first number"))
 var b = parseInt(prompt("Enter your second number"))
 var Operater = prompt("Enter your operater")

 switch (a,b,Operater){
    case '*': console.log(a*b)
    break;
    case '+': console.log(a+b)
    break;
    case '-': console.log(a-b)
    break;
    case '/': console.log(a/b)
    break;
    case '%': console.log(a%b)
    break;
    default: console.log("You select wrong operater")
 } 