piyush Garg

Variable 
=========
var -> global, reassign , we can use any were (Its a older Version)
let -> reassign, local variable, we can only use in local are
const->local scope, we ca not reassign the variable

Datatype And Operators
=======================
1) Number
2) String
3) Booleans
4) Null
5) Undefined
6) Objects

- Conditional Satements
======================
Switch Case we can use for Calculate program for conditional more so we can use Switch

##Turnaey

condition ? expressionIfTrue : expressionIfFalse;

let canVote = (age >= 18) ? "Yes" : "No";

 example:-

 if(age>=18){
    console.log("Yes You can Vote")
 }else{
    console.log("No Your age is not valid")
 }

example:-
  if(age>=18){
    console.log("Yes You can Vote")
 }else if{
    console.log("No Your age is not valid")
}else {
    console.log("No Your age is not valid")
 }

 Confunsed in Switch Case
  ==========================
 const option=2;
 switch(option) {
    case 1:
        console.log("Namaste");
        break;
    case 2:
        console.log("Namaste Case 2");
        break;
    case 3:   
        console.log("Namaste");
        break;
    default:
        console.log("Invalid Option");
}

Logical Operators in JavaScript
================================
1. And -> All Condition Shoud be Check (&&)
        -> All the Condition must be true

if( age>=18 &&  gender =='male' ){
    console.log("You are adult male")
}

2. Or  -> At lets One Condition Shoude Be Folled (||)
       -> 
  
  if( age>=18 || gender =='male' ){
    console.log("You are adult male")
}

3. Not -> it chanage the condition yes to no , true to false (!)
         ->!= 0  ! its show Zero is not equal to the value
    if( number % 2 != 0 ) 
 
Loops
=======
1. for
      ## When We know number of itration how many times to run we use for loop

2. while
    ## When we know condition but does not know how much time run loop

     **Example**
     let ip = 0;
     let house=100;

     while(ip != house){
     ip = ip + 1;
     console.log("Step Taken" + ip)
     }

3. do_while


Functions
------------
its have argument keyword

Arrow Functions
----------------
1. Syntax
    
    **Example**
          const sayhello= () => {
            consol.log("Hello Java Script)
          }

    **Example**
        const addv2=(a,b) => {
            return a+b;
        }

     **Example**
         const addv2(a,b) => a+b; // one liner

2. argument it's not available 
    we need to use sprade oprator

    **Example**
    const addnumber =(...nums) => {
        consol.log(nums)
    }

3. Hoisting it's also not available in arrow function

  



4. This Keyword is not available in arrow function
          
   
High Order Function and Callbacks
-----------------------------------   
A function take a function as a argument its know as higher order function

**Example**
function add( a, b,cb){
    let result= a+b;
    cb(result);
}

add(2,4, function(val){
    console.log(val);
})