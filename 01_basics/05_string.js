const name = "abc";
const repoCount = 40;

console.log(name + repoCount +" Value");

// backticks (`) are the best for the concatenating the string
// String interposition: we make placeholder and we can inject them into string using 
// curly brackets{}.


console.log(`Hello My name is ${name} and my count is ${repoCount}`);

const gameName = new String('Contra');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0, 4);
console.log(newString);
console.log(gameName.substring(3));
console.log(gameName.substring(2));