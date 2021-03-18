//Attempt to reproduce functions
//function
const x= dFunction(3, 4);
console.log(x);
document.getElementById("bobs").innerHTML= dFunction(3, 4);
//Function Hoisting
function dFunction(a, b){
    return a * b
}

//function expression 1
const y= function(a, b){
    return(a * b)
};
    console.log(y(5, 6));
    document.getElementById("bob").innerHTML= y(5, 6);
//function expression 2
const z= function(a, b){
    return(a * b)
};
console.log(z(6, 7));
document.getElementById("bob1").innerHTML= z(6, 7);
//function expression 3
const a= function(a, b){
    return (a * b)
};
    console.log(a(7,9));
    document.getElementById("bob2").innerHTML = a(7, 9);

//function expression to string 4
const b= function(c, d){
    return c / d;
}
document.getElementById("bob3").innerHTML = b.toString();

//arrow functions
const c= (e, f) => {
   return e - f;
}
document.getElementById("bob4").innerHTML= c(89, 45);
console.log(c(89, 45));