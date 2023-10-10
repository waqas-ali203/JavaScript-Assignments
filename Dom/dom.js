//  **************   SWAP IMAGE    ********//////

// function ChangeImage(id){
//     document.getElementById(id).src = "https://p1.pxfuel.com/preview/653/702/399/rose-flower-flowers-red-rose-royalty-free-thumbnail.jpg"
// }
// function ChangeImageleave(id){
//     document.getElementById(id).src = "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg"
// }

// function ChangeColorParagraph(){
//     var Maindiv = document.getElementById('maindiv')
//     var paragraph = Maindiv.getElementsByTagName('p')

//     for(var i=0; i < paragraph.length ; i++){
//         paragraph[i].style.color= 'green'
//     }
// }


// function mypic(id){
    
//     document.getElementById("change-image").style.border = "2px solid red";
//     document.getElementById("change-image").style.borderRadius = "40px";
// }
// function mypicleave(id){
    
//     document.getElementById("change-image").style.border = "0px";
//     document.getElementById("change-image").style.borderRadius = "0px";
// }



// var a =document.childNodes[1].childNodes[1].childNodes[1].childNodes[2];
// console.log(a).innerHTML


// function UnderstandingNodes(){
//     var main = document.getElementById('maindiv')
//     var nodes = main.childNodes

//        for (var i = 0; i < nodes.length; i++) {
//         var elementype = nodes[i].nodeType;
//         console.log("elementype ", i, "=", elementype, nodes[i]); 
//         if (elementype == 1) {
//                     console.log("this is tag");
//                 }
//                 else {
//                     console.log("this is blankspace");
//                 } 
//     }
// }
// UnderstandingNodes()

// var First = document.childNodes[1]
// console.log("First is", First)

// var Forparent =  document.getElementById('maindiv')
// var Check  = Forparent.parentNode
// var Check  = Forparent.nextSibling
// var Check  = Forparent.previousSibling.tagName.toLowerCase()
// var Check  = Forparent.nextSibling.nodeType
// console.log(" maindiv is", Check)


var Forlist = document.getElementsByTagName('ol')
console.log(Forlist)