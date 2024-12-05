const score = 400

console.log(score);

const balance = new Number(100);
console.log(balance);


console.log(balance.toString());
console.log(balance.toFixed(2));

// const otherNumber = 23.8;
// const otherNumber = 123.89932;
const otherNumber = 1123.89923;


console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));


const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-US'));
console.log(hundreds.toLocaleString('en-IN'));

console.log("------------------------");

// ++++++++++++ MATHS ++++++++++++
console.log(Math);
console.log(Math.abs(-43.234));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log("------------------------");
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);
console.log("------------- 5 random values [10-20] -----------");

const min = 10;
const max = 20;

for(let i=0;i<5;i++){
    console.log(Math.floor(Math.random()*(max-min + 1)) + min);
}
