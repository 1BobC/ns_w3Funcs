//Attempt to reproduce functions
//w3 schools JavaScript Function Parameters
//Setting a default value to a parameter 1
const f= function(x, y){
    if(y=== undefined){
        y= 2;
    }
    return x * y;
}
    console.log(f(x= 4));
    document.getElementById("bobA").innerHTML= f(4);

//Setting a default value to a parameter 2
const g= function(x, y=2){
    return x + y;
}
    console.log(g(6));
    document.getElementById("bobB").innerHTML= g(6);

//w3 schools JavaScript The Arguments Object
//built-in object called the arguments object to find the highest value in a list of numbers
//does not work with const for i and max - why?
const findMax= function() {
    let i;
    let max= -Infinity;
    for (i= 0; i < arguments.length; i++) {
        if (arguments[i] > max){
            max= arguments[i];
        }        
    }
        return max;
}
console.log(findMax(1, 123, 500, 115, 44, 88));
document.getElementById("bobC").innerHTML= findMax(1, 123, 500, 115, 44, 88);

//built-in object called the arguments object to sum all input values
const sumAll= function() {
    let i;
    let sum= 0;
    for(i=0; i < arguments.length; i++) {
        sum += arguments[i];
    }
        return sum;
}
    console.log(sumAll(1, 123, 500, 115, 44, 88));
    document.getElementById("bobD").innerHTML= sumAll(1, 123, 500, 115, 44, 88);





//w3 schools JavaScript Function Definitions
//function expression1 
// const a= function(b, c){
//     return b / c;
// }
// console.log(a(10, 2));
// document.getElementById("bob").innerHTML= a(10, 2);

// //function expression 2
// const phrase= function(d, e){
//     return d + e;
// }
// console.log(phrase("Hello, ", "World!"));
// document.getElementById("bob1").innerHTML= phrase("Hello, ", "World!")

// //function expression 3
// const pchoice= function(rock){
//     return "rock";
// }
// console.log(pchoice());
// document.getElementById("bob2").innerHTML= pchoice()
 
// //function expression 4
// const cchoice= function(paper){
//     return "paper"
// }
// console.log(cchoice());
// document.getElementById("bob3").innerHTML= (cchoice());

//  //function expression 5
//  const game= function(winner){
//     const x= pchoice();
//     const y= cchoice();
//     if ((x== "rock") && (y== "paper")){
//     return "computer is the winner";
//     }else{return "void game"}
// }
// console.log(game());
// document.getElementById("bob4").innerHTML= game();