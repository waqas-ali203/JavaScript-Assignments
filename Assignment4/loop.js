// var n = 1
// while (n <= 10) {
//     console.log(n)
//     n++;
// }

// REVERSE NUMBER**************////

// var n = 10
// while (n >= 1) {
//     console.log(n)
//     n--;
// }

// ALL ALPHABET LETTER

// var alphabet = 'A'
// while(alphabet <= 'Z'){
//     console.log(alphabet)
//     alphabet++;
// }

// ALL EVEN NUMBER

// var n = 1

// while (n <= 100) {
//     if (n % 2 == 0) {
//     console.log(n)
//     }
//     n++
// }
// ALL ODD NUMBER

// var n = 1

// while (n <= 100) {
//     if (n % 2 != 0) {
//     console.log(n)
//     }
//     n++
// }

// TOTAL SUM OF NUMBER
// var n = 1
// var sum = 0
// while (n <= 10) {
//     console.log(n)
//     sum = sum + n
//     n++
// }
// console.log("The total  sum of is " + sum)

// TOTAL SUM OF ALL EEN NUMBER

// var n = 1
// var sum = 0

// while (n <= 10){
//     if (n % 2 == 0) {
//         console.log(n)
//         sum = sum + n
//     }
//     n++
// }
// console.log("THE TOTAL SUM OF ALL EVEN NUMBER IS " + sum)

// TOTAL SUM OF ALL ODD NUMBER

// var n = 1
// var sum = 0

// while (n <= 10){
//     if (n % 2 != 0) {
//         console.log(n)
//         sum = sum + n
//     }
//     n++
// }
// console.log("THE TOTAL SUM OF ALL ODD NUMBER IS " + sum)

// TABLE OF A NUMBER//

// var n = 1
// var TableNumber= 3

// while (n <= 10) {
//     console.log( `${TableNumber} x  ${n} = ${TableNumber * n}`  )
//     n++;
// }

//  FIND THE NUMBER OF DIGITS IOF A NUMBER//

// const inputNumber = 12345;
// const numString = inputNumber.toString();
// const digitCount = numString.length;
// console.log( "Number of digits in " + `${inputNumber}: ${digitCount}`);

// FIRST AND LAST DIGIT OF A NUMBER//

// const inputNumber = 12345;
// const numString = inputNumber.toString();
// const firstDigit = numString.charAt(0);
// const lastDigit = numString.charAt(numString.length - 1);
// console.log(`${firstDigit}`+ " fIRST DIGIT");
// console.log(`${lastDigit}` + " LAST DIGIT");

// FIRST SUM OF first and LAST DIGIT OF A NUMBER//

// const inputNumber = 742;
// const numString = inputNumber.toString();
// const firstDigit = parseInt(numString.charAt(0));
// const lastDigit = parseInt(numString.charAt(numString.length - 1));
// const sum = firstDigit + lastDigit;
// console.log(`Sum of the first and last digits of ${inputNumber}: ${sum}`);

// FIND THE SUM OF DIGITS OF A NUMBER  //////

// let number = 12345;
// let num = Math.abs(number);
// let digitSum = 0;

// while (num > 0) {
//   const lastDigit = num % 10;
//   digitSum += lastDigit;
//   num = Math.floor(num / 10);
// }

// console.log(`Sum of the digits of ${number} is ${digitSum}`);

// FIND THE product  OF DIGITS OF A NUMBER  //////

// let number = 12345345;
// let num = Math.abs(number);

// let digitProduct = 1;

// while (num > 0) {
//   const lastDigit = num % 10;
//   digitProduct *= lastDigit;
//   num = Math.floor(num / 10);
// }
// console.log(`Product of the digits of ${number} is ${digitProduct}`);


// PRINT THE REVERSE NUMBER ////

// const userInput = prompt("Enter a number:");
// const reversedInput = userInput.split('').reverse().join('');
// console.log("Reversed number: " + reversedInput);

// NUMBER IS PALINDRONE OR NOT 


// const userInput = prompt("Enter a number:");
// const numberStr = userInput.toString();
// const reversedStr = numberStr.split('').reverse().join('');

// if (numberStr === reversedStr) {
//   console.log(`${userInput} is a palindrome.`);
// } else {
//   console.log(`${userInput} is not a palindrome.`);
// }


// NUMBER  INTO WORDS

// 
// const userInput = prompt("Enter a num
//  if (num == 0) {
//     console.log("")
//  }
// else if (num == 1) {
//     console.log("one")
// }
// else if (num == 2) {
//     console.log("two")
// }
// else if (num == 3) {
//     console.log("three")
// }
// else if (num == 4) {
//     console.log("four")
// }
// else if (num == 5) {
//     console.log("five")
// }
// else if (num == 6) {
//     console.log("six")
// }
// else if (num == 7) {
//     console.log("seven")
// }
// else if (num == 8) {
//     console.log("eight")
// }
// else if (num == 9) {
//     console.log("nine")
// }
// else{
//     console.log("i have no search item ")
// }


/// ASCII CHARACTORS //////

// for (let i = 0; i < 128; i++) {
//     const character = String.fromCharCode(i);
//     console.log(`Character: ${character}   ASCII Value: ${i}`);
//   }
  
///  FIND THE VALUE OF POWER OF A NUMBER///


// let base = 5; 
// let exponent = 7; 
// let result = 1;

// if (exponent < 0) {
//   console.log("Exponent should be a non-negative integer.");
// } else {

//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }

//   console.log(`${base}^${exponent} = ${result}`);
// }


//  FIND FACTOR FACTOR  OF A NUMBER

// let number = 44; 

// console.log(`Factors of ${number}:`);

// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//   }
// }

/// FICTORIAL OF A NUMBER////

// let number = 5; 
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//   factorial *= i;
// }

// console.log(`Factorial of ${number} is ${factorial}`);


var digit = parseInt(binary, 2);
var binary = "1101000" // code for 104
var digit = binary.toString(10); // Convert String or Digit (But it does not work !)
console.log(digit);
//  Run code snippet

