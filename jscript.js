//Function Definitions
//Function Declaration
const x = myFunction(4, 3);   //var let but not const!
document.getElementById("demo1").innerHTML = x;

function myFunction(a, b) {
  return a * b;
 } //a function declaration is not an executable statement, it is not common to end it with a semicolon.
 
//  //Function Expression anonymous functions and invoked (called) using the variable name.
 const y= function (a, b) {return a * b};            
document.getElementById("demo2").innerHTML = y;
// //Function Expression
const z = function (a, b) {return a * b};
document.getElementById("demo3").innerHTML = z(4, 3);

//The Function() Constructor
const aFunction = new Function("a", "b", "return a * b");
document.getElementById("demo4").innerHTML = aFunction(4, 3);
//The Function() Constructor but without new or capital F
const bFunction = function (a, b) {return a * b}
document.getElementById("demo5").innerHTML = bFunction(4, 3);

//Self-Invoking Functions
(function () {
    document.getElementById("demo6").innerHTML = "Hello! I called myself";
})();

//Functions Can Be Used as Values
function cFunction(a, b) {
    return a * b;
  }
  const c = cFunction(4, 3);
  document.getElementById("demo7").innerHTML = c;
  console.log(c);

