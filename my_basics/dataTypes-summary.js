// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;

// let userEmail;

// const id = Symbol('123')

// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3455667788995445654655n;

// const heros = ["Shaktiman","Batman","Superman"]

// let theObj = {
//     name: "shubham",
//     age: 29,
//     address: "Pune"
// }

// const myFunction = function(){
//     console.log("Hello Shubham!");    
// }

// console.log(typeof bigNumber);


// Reference (Non Primitive)

// Array, Objects, Functions

// Stack (Primitive), Heap (Non-Primitive)

// let myYoutubeChannel = "Shubham Bihade";

// console.log(myYoutubeChannel);

// let anotherName = myYoutubeChannel;

// console.log(anotherName);

let userOne = {
    email: "sabby@google.com",
    upi: "user@ybl"
}


let userTwo = userOne;

userTwo.email = "shubham@google.com"

console.log(userOne.email);
console.log(userTwo.email);

