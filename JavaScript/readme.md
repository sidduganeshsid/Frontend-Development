Have patience!!
# what is JS?
It is a programming language.
It works as standalone with the help of NodeJS.


# Why JS ?


# What are JS Engines ?

V8
SpiderMonkey...

# How ?
write code snippets and Run the Code in browser console.
also possible to write and run in IDE'S using the NodeJS
 and other..

# which version of JS we have to use ?
ES version of JS
ECMA script = gave standards to scripting languages.
in earlier days there are lots of scripting languages.
JS follows the standards of ECMA script.
ES 6 was the major one.
babel 

#code
```
console.log("hello world")
```

# variables
var, let and const

# operators
+ - * / %

conditional opertors returns the boolean result
relation opertors compares the two or more.

## operators precedence
mdn - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

#Data Types
js is a dynamically type programming lang.

```
var firstName = "SidduGanesh"
var lastName = "Musa"
var email = "sidduganeshengineer"

var isLoggedIn = true
var loginCount = 0;
var paymentMode = "creditCard";

var isLoggedInFromGoogle = false;
var isLoggedInFromApple = false;
var isLoggedInFromFacebook = false;
```

```
//interpolation and backticks
console.log(`
    unique id : ${uid}
    name : ${username}
    email : ${useremail}
    phno : ${userphno}
`)
```

```
//Terinary operator
var authenticated = true;
authenticated ? console.log("SignOut button") : console.log("Login");
```

```
//conditional stmts

```


```
//switch for role based access in JS
//fall-throught
switch(role){
    case "admin" : console.log("gets full access" );
    case "subadmin" : console.lgo
}
```


```
//typeof
console.log(typeof true)
```

```
//coercion and falsy values
//falsy values
//undefined
//null
//0
//''
//""
//NaN


```

```
//basic functions in js
//regular functions
function sayHello(){
    console.log("hello there, sidduganesh here")
}

sayHello();//calling the function
sayHello;//referencing the function

//regular function with parameter
function sayHello(name){
    console.log(`hello there, ${name} here`)
}
sayHello(sidduganesh);

function sayNamestay(){
    return "Namestay";
}


var greetings = sayNamestay();
console.log(greetings);
console.log(sayNamestay());

```

```
//functions in variables
var getUserRole = function (name,role){
    switch(role){
        case "admin": return `${name} full access to platform`;

        case "subadmin":

        case "testprep":

        case "user":

        default :
            break;
    }
}

getUserRole("hitesh","admin");
getUserRole("Nitin","subadmin");
getUserRole("sidduganeh","user");
```

```
//arrow function
var getUserRole = (name,role) => {
    switch(role){
        case "admin": return `${name} full access to platform`;

        case "subadmin":

        case "testprep":

        case "user":

        default :
            break;
    }
}

getUserRole("hitesh","admin");
getUserRole("Nitin","subadmin");
getUserRole("sidduganeh","user");
```


```
//context in JS
//global scope of browser is window
//global context differs in the nodejs and browser
//even nodejs has global context, but it is not window,it's different

//works fine
sayHello()

function sayHello(){
    console.log("Hello India");
}

name = "sidhu"

if(name===window.name){console.log("true stmt");}

```

```CONTEXT

ExecutionContext : Variable Object, Scope Chain, this
ExecutionContext
ExecutionContext
GlobalContext




```

```
//once you understand context then debugging becomes simple
//Hoisting
//Function declarations are scanned and made available.
//variable declarations are scanned and made undefined.

tipper("5");
function tipper(a){
    <!-- var bill = a; -->
    var bill = parseInt(a);
    console.log(bill + 5)
}

bigTipper("100"); //error 

var bigTipper = function (a){
    var bill = parseInt(a)
    console.log(bill + 50) 
}


//variable object
console.log(name)
var name = "sidduganesh"


```

```
//Scope Chaining
var friend = "siddu"

myFriend();

function myFriend(){
    var friend = "ganesh"
    console.log(friend)
}

console.log("name of friend"+friend)


```

```
//scope
{

}

//this is not scope
if(){
    
}

//this is scope
function hai(){

}
```

```
//IMP
//this keyword

//to find what is our global context 
console.log(this);
//also check inside the browser


console.log(this);
var game = "chess"

funtion scope(){
    var name = "sg"
    console.log(this);
}
scope()

//vs - both looks same but has different scope

var scope2 = function(){
    var name = "ag"
    console.log(this);
}


```

```
//imp in programming are
//arrays
//objects
//loops

//understanding of api is necessary

```

```
//arrays
//spend time in reading docs or at lest practice MDN , w3 is little //bit
//array is collection of data

var countries = ["India","australia"]

var states = new Array("Rajasthan","Delhi")
console.log(states)

//inbuilt methods and properties
console.log(states.length)
states[0] = "Telangana" //gets replaced
console.log(states.length)

//example udemy 

var sidduganesh = ["343jjfAjjf","sidduganesh musa","sidduganeshengineer@gmail.com",5,4,true]
//but this is not good DS, so we use objects

sidduganesh.pop() //last value is removed
sidduganesh.unshift("1") //value is added to first and other values are moved
sidduganesh.shift() //removes the first value

//building to do list, tasks, t-shirt store
console.log(sidduganesh.indexOf(5))
//searching and deleting it is useful
//if not found the -1 (super handy)

//string to array || 2 to 3 days to study
console.log(Array.from("sidduganesh"))

```

```
callback function and arrow function in array
function isEven(elem){
    //if(elem%2===0){
    //    return true;
    //}
    //return false;

    return elem%2===0;
}

console.log(isEven(3))

//variable function
var isEven = function (elem){
    return elem%2===0;
}

console.log(isEven(4))

//Arrow Function
var isEven = (elem) => {
    return elem%2===0;
}

console.log(isEven(5))


//callback function in array
var result = [2,4,6,8].every(isEven) //passing reference
//check with every element in an array
console.log(result)
//other concepts = filters, maps


//callback function 
//() => ()
//() => {return ;} //return keyword is required
console.log([1,3,5,7].every((e)=>(e%2===0)))

//mostly used in frameworks like react and angular.

```
