//Primitive (these use call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 243242344234243432423423423423423423n


//Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["Captain America", "Ironman", "Hulk"]

let myObj = {
    name: "Vinay",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object