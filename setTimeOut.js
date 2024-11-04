// console.log("Start");

// //Its Set'a Dealy Of 1000 ms
// //setTimeout is a built-in JavaScript function
// // that sets a timer to execute a function after a specified delay
// setTimeout(function cd() {
//   console.log("Callbacks");
// }, 1000);

// console.log("End");

console.log("Start");

document.getElementById("btn")
.addEventListener("click", function cb(){
    console.log("CallBack");
});

console.log("END");