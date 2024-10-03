// //Function

// // function have in method arguments its use full acpet unlimited input form user

// /*
// function add() {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i = i + 1) {
//     sum = sum + arguments[i] 
// }
// return sum 
// }

// let result = add(10, 20, 15, 20, 45) 
// console.log(result);
// */

// //Arrow Functions

// // function add( a, b,cb){
// //     let result= a+b;
// //     cb(result);
// // }

// // add(2,4, function(val){
// //     console.log(val);
// //


// let name = 2024
// console.log(typeof name)

// console.log(name + 1)


// 12. Create an object book with properties title, author, and pages.
// Create a function getBookDetails that takes a book object as a parameter and returns
// if the book has more than 100 pages.

const book = {
    title : "jai mata di",
    author : "mata di pucblication",
    pages : 1
} 

const getBookDetails = ({pages}) => {
    if (pages >= 100) {
        return "Yes book have 100+ pages"
    }

    return "no! sorry book does not have 100 pages"
}

console.log(getBookDetails(book))