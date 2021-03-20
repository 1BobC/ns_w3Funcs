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
    document.getElementById("bobA").innerHTML= 'setting a default value 1 = ' + f(4);

//Setting a default value to a parameter 2
const g= function(x, y=2){
    return x + y;
}
    console.log(g(6));
    document.getElementById("bobB").innerHTML="setting a default value 2 = " + g(6);

//Setting a default value to a parameter mine1
//x or y can be unterchanged if correct position used when calling
const h= function(x, y){
    if(x=== undefined);
    x= 2;
    return x * y;
}
    console.log(h(x, 16));
    document.getElementById("mine1").innerHTML="setting a default value mine 1 = " + h(x, 16);

//Setting a default value to a parameter mine2
//x or y can be unterchanged if correct position used when calling
const j= function(x, y= 2){
    return x * y;
}
    console.log(j(16));
    document.getElementById("mine2").innerHTML="setting a default value mine 2 = " + j(16);

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
document.getElementById("bobC").innerHTML= "the arguments object 1  to find the highest value in a list of numbers = " + findMax(1, 123, 500, 115, 44, 88);

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
    document.getElementById("bobD").innerHTML= "the arguments object 2 to sum all input values = " + sumAll(1, 123, 500, 115, 44, 88);

//mine 3 - built-in object called the arguments object to find the highest value in a list of numbers
//does not work with const for i and max - why?
const topNum= function(){
    let i;
    let max= -Infinity;
    for(i= 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
        return max;
}
    console.log(topNum(1, 123, 500, 8504, 115, 44, 88));
    document.getElementById("mine3").innerHTML= "the arguments object mine 3  to find the highest value in a list of numbers = " + topNum(1, 123, 500, 8504, 115, 44, 88);

//mine 4 built-in object called the arguments object to sum all input values
const addUp= function(){
    let i;
    let tot= 0;
    for (i=0; i < arguments.length; i++){
        tot += arguments[i];
    }
    return tot;
}
    console.log(addUp(1, 123, 500, 8504, 115, 44, 88));
    console.log(addUp(1));
    console.log(addUp(1, 123));
    console.log(addUp(1, 123, 500));
    console.log(addUp(1, 123, 500, 8504));
    console.log(addUp(1, 123, 500, 8504, 115));
    console.log(addUp(1, 123, 500, 8504, 115, 44));
    console.log(addUp(1, 123, 500, 8504, 115, 44, 88));
    document.getElementById("mine4").innerHTML= "the arguments object mine 4 to sum all input values = " + addUp(1, 123, 500, 8504, 115, 44, 88);

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