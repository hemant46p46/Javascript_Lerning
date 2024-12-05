const tinderUser = new Object(); //singleton object
const tinderUser2 = new Object(); // non-singleton object

tinderUser.id = 101;
tinderUser.name = "samay";
tinderUser.isLoggedIn = true;

console.log(tinderUser);
console.log(tinderUser2);


const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        firstName: "abc",
        lastName: "xyz",
    },
    address: "myAddress"
}


console.log(regularUser);
console.log(regularUser.fullname.lastName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1, obj2};
const obj4 = Object.assign({}, obj1, obj2);
const obj5 = {...obj1, ...obj2, };

console.log(obj3);
console.log(obj4);
console.log(obj5);

const user = [
    {},
    {},
    {},
    {},
]