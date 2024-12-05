// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Symbol : is used to make a variable unique
// we just wrap into symbol to make variable unique

const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;// undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id==anotherId);//verified that Symbol stores unique value

// Reference Type (Non Primitive)
// Array, Objects, Functions,

const heros = ["Shaktiman", "nagrajs", "doga"]

let myObj = {
    name: "abc",
    age: 10,
    address: "xyz"
}

const myFunction = function(){
    console.log("Hello Function");
}

console.log(typeof scoreValue);


// Stack(Primitive), Non Primitive(Heap)
let youTubeName = "abc";
let anotherName = youTubeName;
anotherName = "xyz"

console.log(youTubeName); //abc
console.log(anotherName); //xyz : copied values changed, but OG is same


let userOne = {
    email : "aasdf@gmail.com",
    upi : "23432421@upi"
}

let userTwo = userOne;

userTwo.email = "mnbv@gmail.com";
// here both object share same reference so value will be changed of both
console.log(userOne.email); // mnbv@gmail.com
console.log(userTwo.email); // mnbv@gmail.com

