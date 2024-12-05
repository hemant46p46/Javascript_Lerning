// array

const mArray = [10, "hello", 23.34, [10, 20], {name:"Raghav",age:12}];

console.log(mArray);

// while copying javascript array, will make shallow copy
// shallow copy of an object is a copy whose properties shared the same
// reference as those of source from which the copy was made


const player = ["Shawn", "Mike", "Jake"]
const mArray1 = [2, 4, 6, 8, 10];

console.log(mArray1);
console.log(mArray1.push(20));
console.log(mArray1);
console.log(mArray1.pop());
console.log(mArray1);


console.log(mArray1.unshift(0));
console.log(mArray1);


console.log(mArray1.unshift(9));
console.log(mArray1);

console.log(mArray1.shift());
console.log(mArray1);



console.log(mArray1.includes(9));
console.log(mArray1.includes(8));

const newArray = [1, 2,].join();

console.log(newArray);

console.log("_________________________________");
// slice : Simple slice of Array
// splice : It Removes and separate the array make new array and
// OG array changes as new array of remaining elements

const mArr = [0, 1, 2, 3, 4, 5];

console.log("Starting Array: ", mArr);

console.log("--After slicing array--");
const mArr1 = mArr.slice(1, 3);
console.log("Sliced Array: " , mArr1);
console.log("OG Array: ", mArr);


console.log("--After splicing array--");
const mArr2 = mArr.splice(1,3);
console.log("Spliced Array: ", mArr2);
console.log("OG array: ", mArr);