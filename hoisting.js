/*
  the process where declarations (variables and functions) are moved to the top of their containing scope
  during the compile phase, before the code is executed.

 Not define :-When you try to reference a variable that hasn’t been declared
  anywhere in your code, you get a ReferenceError with the message "x is not defined".


  Undefine :-  When a variable is declared but hasn't been assigned a value,
   its value is undefined.

*/

function studyUndefined(){
    var x
 console.log(x)
}

// hello();
// console.log(hello)
// console.log(a);
// var a
// function hello(){

//     console.log("Wecome to the Code With JavaScript")

// }


studyUndefined()
console.log(y) //  ReferenceError: y is not defined

var y=10;