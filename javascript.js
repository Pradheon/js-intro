// JavaScript goes here!
console.log("Hello, World!");

// Task: Working with variables
/*
    let admin;
    let name = "John";
    admin = name;
    alert(admin);
*/

// Task: Giving the right name
/*
    let ourPlanetName = "Earth";
    let currentUserName = "John";
*/

// Task: Uppercase const?
/*
    const BIRTHDAY = '18.04.1982'; // hardcoded, so it can be UPPERCASE
    const age = someCode(birthday); // computed at runtime, may change so best to keep it lowercase
*/

// MDN Web Docs - JS Numbers
/*
    const myInt = 5;
    const myFloat = 6.667;
    console.log(myInt);
    console.log(myFloat);
    let intType = typeof myInt;
    let floatType = typeof myFloat;
    console.log(intType);
    console.log(floatType);
*/

// Task: The postifx and prefix forms
/*
    let a = 1, b = 1;
    let c = ++a; //2
    let d = b++; //1
*/
/*
    a = 2
    b = 2
    c = 2
    d = 1
*/

// Task: Assignment result
/*
    let a = 2;
    let x = 1 + (a *= 2);
*/
/*
    a = 4
    x = 5
*/

// Task: Type conversions
/*
    "" + 1 + 0 // "10"
    "" - 1 + 0 // -1
    true + false // 1
    6 / "3" // 2
    "2" * "3" // 6
    4 + 5 + "px" // "9px"
    "$" + 4 + 5 // "$45"
    "4" - 2 // 2
    "4px" - 2 // NaN
    "  -9  " + 5 // "  -9  5"
    "  -9  " - 5 // -14
    null + 1 // NaN
    undefined + 1 // NaN
    " \t \n" - 2 // -2
*/

// Task: Fix the addition
/*
    let a = prompt("First number?", 1);
    let b = prompt("Second number?", 2);
    alert(+a + +b); // 12
*/

// The Odin Project: Assignment
console.log(23 + 97);

let sequenceOfSixNums = 1 + 2 + 4 + 8 + 16 + 32;
console.log(sequenceOfSixNums);

let equation1 = (4 + 6 + 9) / 77;
console.log(equation1.toFixed(5));

let a = 10;
console.log(a);
console.log(9 * a);
let b = 7 * a; // returns undefined, cannot declare and assign value to variable and red it's value in same line 
console.log(b);

const MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;
console.log(percentage.toFixed(4));