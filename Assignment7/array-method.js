/* Write a JavaScript program that uses the `push()` method to add an element to the end of an array. Prompt the user for an element and display the updated array. */

// let Class = ["first", "seccond", "third", "fourth"];
// let NewArray = Class.push(prompt());
// console.log(Class);



/*  Create a program that uses the `pop()` method to remove the last element from an array. Display both the removed element and the modified array.*/


// let Class = ["first", "seccond", "third", "fourth"];
// console.log("last element to be deleted", Class.pop());
// console.log(Class)


/*   Write a JavaScript function that utilizes the `shift()` method to remove the first element from an array. Display both the removed element and the updated array.  */


// let Class = ["first", "seccond", "third", "fourth"];
// console.log("first element to be deleted", Class.shift());
// console.log(Class)

/*  Develop a program that uses the `unshift()` method to add an element to the beginning of an array. Prompt the user for an element and display the modified array. */


// let Class = ["first", "seccond", "third", "fourth"];
// let NewArray = Class.unshift(prompt());
// console.log(Class);


/* Write a JavaScript function that uses the `concat()` method to concatenate two arrays. Prompt the user for two arrays and display the resulting concatenated array. */

// let Input1 = prompt('Enter the 1st array element')
// let Input2 = prompt('Enter the 2st array element')
// let Array1 = Input1.split(",")
// let Array2 = Input1.split(",")
// let NewArray = Array1.concat(Array2)
// console.log(NewArray);


/** Create a program that employs the `slice()` method to extract a portion of an array. Prompt the user for the starting and ending indices and display the sliced array.  */

// const employs = ["ali" , "ahmad" , "zain" , "akbar" , "raza"];

// const subArray = employs.slice(2,4);
// console.log(subArray);


/**  Write a JavaScript program that utilizes the `forEach()` method to iterate through an array of names and display each name with a greeting message. */

// let rollNumber = [20 , 30 , 40 ,  10]
// var newArray = rollNumber.forEach((value,index,array)=>{
    
//     console.log('This is element at ' ,index  ,'index of this array',value,index,array);
    
//     })


/**  Develop a program that uses the `filter()` method to filter an array of numbers, keeping only even numbers. Display the filtered array. */

// let rollNumber = [20 , 30 , 40 , 13, 17, 34 , 44, 50, 7 , 3 , 10]
// var newArray = rollNumber.filter((value) => value % 2 == 0)
// console.log(newArray);


/** Write a JavaScript function that employs the `map()` method to double each element in an array of numbers. Display the original and modified arrays. */

// var employe = ["ali", "ahmad", "zohaib" , "shahzaib", "shayan"]
// console.log("Employe array originol", employe);
// var newArray = employe.map((element, index) => {
//     var newElement = element +  element
//     return newElement
// });
// console.log("newArray", newArray);
// console.log("employe array",employe);

/**  Create a program that uses the `reduce()` method to calculate the sum of all elements in an array of numbers. Display the result. */

// let Elements = [1,21,13,5,7,20,45,]
// var NewElement = Elements.reduce((a , b) =>{
//     return a+b
// })
// console.log("THE TOTAL IS ",NewElement)


/**  Create a program that utilizes the `indexOf()` method to find the index of a specific element in an array of strings. Display the index or a message if not found. */

// let IndexFind = [1, 23 , 34 , 44 , 56 ,37 ,48]

// let newelement = IndexFind.indexOf(56)
// console.log(newelement);


/**  Write a JavaScript function that uses the `reverse()` method to reverse the order of elements in an array. Display the reversed array. */


// let OriginaoArray = [1, 23 , 34 , 44 , 56 ,37 ,48]

// let Newwarray = OriginaoArray.reverse()
// console.log(Newwarray);

/** Write a JavaScript function that calculates and displays the length of an array. */

// let OriginaoArray = [1, 23 , 34 , 44 , 56 ,37 ,48]

// let newarray =  OriginaoArray.length
// console.log(newarray);

/** FIND */

// let Rollnumber = [ 20 , 40 , 12 , 15 , 23 , 17 , 11 , 9]
// let Newarray =  Rollnumber.find((element) =>
// {
// return element  20
// }
// )
// console.log(Newarray);

/** Develop a program that uses the `includes()` method to check if a specific element exists in an array of numbers. Display whether the element is found. */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const elementFind = 5; 

// if (numbers.includes(elementFind)) {
//   console.log(`The element ${elementFind} is found in the array.`);
// } else {
//   console.log(`The element ${elementFind} is not found in the array.`);
// }

/** Create a program that employs the `sort()` method to sort an array of strings in alphabetical order. Display the sorted array. */

// let fruitname = ["banana" , "watermelon" , "orange" , "melon" , "cherry"]
// fruitname.sort()
// console.log(fruitname)





// let number  =  [23 , 45 , 24 , 26 ,  14 , 12 ,22 ,78 ,13]
// let number2  = number.findIndex(() =>{ return number % 2 == 0} )
// console.log(number2);

