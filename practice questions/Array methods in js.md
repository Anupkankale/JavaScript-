//********************************Array methods in js*********************/
// 1.create polyfill for map, filter and reduce method
// const arr = [1,2, 3, 4, 8]
// // const newArr = arr.map((ele, index) => ele*2)
// // const newArr1 = arr.filter((e) => e == 2)
// // const result = arr.reduce((acc, ele) => acc+ele,0)
// // console.log(newArr1)
// // console.log(result)

// Array.prototype.myMap = function (cb) {
//   const temp = []
//   for (let i = 0; i < this.length; i++) {
//     const cal = cb(this[i], i)
//     temp.push(cal)
//   }

//   return temp;

// }



//************************Currying in js*********************** */
// 1. write a program to evaluate sum(6)(7)(2)
// the below program is known as currying in js
// currying is a technique in js where n arguments of a functions results in n functions with one of more arguments

// const sum = (a) => {
//   return function (b) {
//     return function(c) {
//       return a+b+c;
//     }
//   }
// }

// console.log(sum(6)(7)(2))

//2. write a program to implement infinite currying (here we can use recursion)
// const sum = (a) => {
//   return function(b) {
//     if (b) return sum(a+b);
//     return a;
//   }

// }

// console.log(sum(6)(7)(5)())
// console.log(sum(6)(7)(5)(1)())g