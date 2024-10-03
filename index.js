
//Temporal Dead Zone
//type error :- 
//syntax error :- If we Duplicated The  Variable 
// reference error :- if user don't dont Refer any data to the variable

//Block  Scoped 
 
function x(){
 var a=7;

 function y(){
    console.log(a);

 }
 return y;


}

var z = x();

console.log(z);