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