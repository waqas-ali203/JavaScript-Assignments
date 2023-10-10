// var Number = [ 10 , 20 , 30 , 40]
// console.log(Number[0] , Number[1] , Number[2] )


// let MixArray = [ "Waqas" , 123 , "Ali" , true , false , 234]

// console.log( MixArray[0], MixArray[1], MixArray[2] , MixArray[3] , MixArray[5]);
// console.log( typeof MixArray[0], typeof MixArray[1], typeof MixArray[2] , typeof MixArray[3] , typeof MixArray[5]);


/********   pop or removing last elemnt method of array ***** */

// let cityNames = ["Multan", "Faisalabad", "Lahore", "DG Khan", "Peshawareness", "Gujranwala", "Islamabad"]
// cityNames.pop();
// console.log(cityNames);


/******  ADDING or push  ELEMENTS IN LAST ****/ 


// let city_Names = ["Multan", "Faisalabad", "Lahore", "DG Khan", "Peshawareness", "Gujranwala", "Islamabad"]
// // city_Names.push(["Muree", "Aptabad"])
// city_Names.push("MUREE")  ///// PUSH ARRAY IN LAST IN ARRAY 
// city_Names.push("Mian city")
// console.log(city_Names);



/******  REMOVING FIRST ELEMENT IN ARRAY  ****/ 

// let friend_Names = ["Abdul", "Waqas", "Faizan", "Ali", "Talha", "Zeeshan"]
// friend_Names.shift();
// console.log(friend_Names);



/******  ADDING FIRST ELEMENT IN ARRAY  ****/ 

// let friend_Names = ["Abdul", "Waqas", "Faizan", "Ali", "Talha", "Zeeshan"]
// friend_Names.unshift("HAMZA");
// console.log(friend_Names);


/******  ADDING  ELEMENTS ON YOUR CHOISE IN ARRAY  ****/ 


// let friend_Names = ["Abdul", "Waqas", "Faizan", "Ali", "Talha", "Zeeshan"]
// friend_Names.splice(3,3,"ayan","shayan")
// document.write(friend_Names);



/*   MERGER ARRAY FROM EACH OTHER */

// let fruit = ["banan" , "apple", "orange", "melon"]
// let vegetable = ["potato" , "onion", "tomato"]

// var NewArray = fruit.concat(vegetable)
// console.log(NewArray);



/*   EVERY() */

// let rollNumber = [20 , 30 , 40 ,  10]
// var newArray = rollNumber.every((value) => value>12)
// console.log(newArray);



/*   FILTER() */

// let rollNumber = [20 , 30 , 40 ,  10]
// var newArray = rollNumber.filter((value) => value > 20)
// console.log(newArray);


/*   FOR EACH() */

// let rollNumber = [20 , 30 , 40 ,  10]
// var newArray = rollNumber.forEach((value,index,array)=>{
    
//     console.log("value",value,index,array);
    
//     })
    
    
//     /*   INDEXOF() */
//     /*   lastINDEXOF() */

// let Number =[34,50,12,24,12]
// var indexof = Number.indexOf(12)
// var lastindexof = Number.lastIndexOf(12)
// console.log("indexof", indexof);
// console.log("lastindexof", lastindexof);



//     /*   JOIN() */

// let names = [1, 2, 3, 4]
// let newArray = names.join("-")
// console.log(newArray);
// console.log(typeof(newArray))


//     /*   MAP() */


// var fruitsNames = ["apple", "banana", "orange"]
// console.log("fruistName", fruitsNames);
// // map();
// var newArray = fruitsNames.map((element, index) => {
//     console.log("elemet", element);
//     console.log("index", index);
//     var newElement = element + "abc"
//     return newElement
// });
// console.log("newArray", newArray);
// console.log("fruitsName",fruitsNames);


//     /*   REDUCE()    */

// let Elements = [1,2,3,5,7]

// var NewElement = Elements.reduce((a , b) =>{
//     console.log(a , b);
//     return a+b
// })
// console.log("THE TOTAL IS ",NewElement)