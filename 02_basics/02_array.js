const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel);
// console.log(marvel[3][2]);
/*
[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
batman
*/
//---------------------------------------------------------------------------
// const allHeros = marvel.concat(dc);
// console.log(allHeros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//---------------------------------------------------------------------------

// const allNewHeros = [...marvel, ...dc]
// console.log(allNewHeros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//---------------------------------------------------------------------------

const arr = [1, 2, 3, [10, 11, 12], 4, [5, 6, 7, [8, 9]]];
console.log(arr);

const newFlatArray = arr.flat(Infinity);
console.log(newFlatArray);


console.log(Array.isArray("abc"));

console.log(Array.from("abc"));

console.log(Array.from({name: "xyz"}));


const s1 = 100;
const s2 = 100;
const s3 = 100;
const s4 = 100;

console.log(Array.of(s1, s2, s3, s4));
