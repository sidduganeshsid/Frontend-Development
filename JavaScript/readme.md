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


```
//once you understand context then debugging becomes simple
//Hoisting

```