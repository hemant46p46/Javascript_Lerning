
// let score = "33";
// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true;
// let score = "";
let score = "abc";




console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// 33 => 33
// "33abc" => NaN
// true => 1; false => 0


//----------------------------------------

// let isLoggedIn = 1;
// let isLoggedIn = "";
let isLoggedIn = "abc";


let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "abc" => true


let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);



// ***************************** Operation *****************************

let value = 3
let negValue = -value;
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello";
let str2 = " world";

let str3 = str1 + str2;
console.log(str3);


console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "3");//33

console.log((3 + 4) * 5 % 3);

console.log(+true);
// console.log(true+);// wrong expression
console.log(+"");

let n1, n2, n3;
n1 = n2 = n3 = 2 + 2;

let gameCounter = 100;
console.log(++gameCounter);
console.log(gameCounter++);
