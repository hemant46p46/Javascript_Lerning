// Singleton
// Object.create()

// Object Literals

const mySym = Symbol("key")
const mySym1 = Symbol("key1")

const JsUser = {
    name: "abc",
    mySym: "myKey",// this is wrong way to initialize a symbol
    [mySym1]: "myKey1",
    age: 19,
    location: "Varanasi",
    email: "abc@gmail.com",
    isLoggedIn: true,
    lastLogin:["Monday", "Sunday"]
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser["name"]);

console.log(typeof JsUser['mySym']);
console.log(typeof JsUser[mySym1]);

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS USER");
}


JsUser.greeting1 = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting);
// console.log(JsUser.greeting());
JsUser.greeting();
JsUser.greeting1();
