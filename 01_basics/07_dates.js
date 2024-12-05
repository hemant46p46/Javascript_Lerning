// Dates

// let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toTimeString().toString());

// console.log(myDate.toDateString().toString());
// console.log(myDate.toJSON());
// console.log(myDate.toJSON().toString());
// console.log(myDate.toISOString());
// console.log(myDate.toISOString());


let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());


let myCreatedDate1 = new Date("2024-12-04");
console.log(myCreatedDate1.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());


console.log(Math.floor(Date.now()/1000));