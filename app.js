// For In

// //The For In statement iterates over all
// enumerable properties of an object.


// For of

// The For of statement creates a loop
// iterating over iterable objects.



//////for In & For OF------->object

/*

const object = {
    name: "Abid",
    roll: 23
}

for (let prop in object) {
    console.log(`the prop  "${prop}" contains value ${object[prop]} `)  //agar ap direct ${object} likhengy to output nhi ayega.
}

////For Of not work in Object

////ForEach not work in Object

*/



//Alert
// object property get in-> prop & its value in -> object[prop]  <- like array
// object per "For In" work krta hai "For Of" nhi krta.



//////for In $ For OF------->Array

/*

const arr = ["a", "b", "c"];


console.log(`For in  display both Index,Values`)
for (const prop in arr) {
    console.log(`the prop index ${prop} and value at ${arr[prop]}`);    //agar ap direct ${arr} likhengy to complete array display hogi.
}


console.log(`For of only display Values and not work in objects`)
for (const prop of arr) {
    console.log(`the prop value ${prop}`);    //agar ap direct ${arr} likhengy to complete array display hogi.
}


arr.forEach((element, index) => {
    console.log(`forEach--> ${index} and ${element}`)
});

*/



//// .some      -->Return true if at least one element in the array returns
// true from the function passed to some Check if any element is greater than 1.

/*

let arr = [1, 2, 3, 4, 5];
console.log(arr.some(n => n > 1));

*/


////.every -->Return true if every element in the array returns
//true from the function passed to every Check if every element is greater than 1

/*

let arr = [1, 2, 3, 4, 5];
console.log(arr.every(n => n > 1));

*/


////.reduce  Reduce the array to one single value by starting the sum at the
// second value passed to reduce and updating the sum with the return
// value of each iteration Sum all the numbers in the array starting with 0

/*

let arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((a, b) => a - b))
console.log(arr.reduce((a, b) => a + b))
console.log(arr.reduce((a, b) => a * b))

*/


////    flat        -->concat sub-array too single array

/*

let arr = [1, 2, [3, 4], 5];
console.log("Normal array", arr);
console.log("Flat Array", arr.flat());

*/


////    find--->returned that matched

/*

let arr = [
    { type: "A", game: "football" },
    { type: "B", game: "cricket" },
    { type: "C", game: "Hockey" }
];
let game = arr.find((s) => s.type === "B");
console.log(game);

*/

////    findIndex

/*

let arr = [
    { type: "A", game: "football" },
    { type: "B", game: "cricket" },
    { type: "C", game: "Hockey" }
];
let game = arr.findIndex((s) => s.type === "C");
console.log(game);

*/

//--------------x---------------------------


//  Array Methods PDF

/*

const arr = ["Hello", "EveryOne", "Html", "CSS", "Nasa"];
console.log(`Original Array ${arr.length}-->${arr}`);

arr.unshift("first")
console.log(`shift method ${arr.length}-->${arr}`);

arr.shift()
console.log(`unshift method ${arr.length}-->${arr}`);

arr.push("last")
console.log(`push method ${arr.length}-->${arr}`);

arr.pop()
console.log(`pop method ${arr.length}-->${arr}`);

arr.reverse()
console.log(`reverse method ${arr.length}-->${arr}`);

let arrOut = arr.splice(1, 3, "Add1", "Add2")
console.log(`splice method(1,3) remove 3 values--> ${arr.length}-->${arr}`);
console.log(`arrOut SpliceOut values--> ${arrOut}`);
console.log(`slice method(1,3) show 2 values--> ${arr.slice(1, 3)}`)
*/

// Splice-->it Modifies The Array Return length of array
// Starting at the index specified by the first parameter, remove the number of elements
//  specified by the second parameter and then add elements to the array for all remaining parameters at the index specified by the first parameter

//--------------x---------------------------


//Array operation

//array.split() can't work

/*

let arr2 = ["learn", "abid"];
console.log(`original array--> ${arr2}`);
let arr3 = arr2.join(" and ");
console.log(`.join() convert into string--> ${arr3}`);
let arr4 = arr2.toString()
console.log(`.toString() also same work--> ${arr4}`)
console.log(`.indexOf() Abid--> ${arr2.indexOf("abid")}`) // if -1 means notfound
console.log(`.sort() sort AtoZ --> ${arr2.sort()}`)
console.log(`.length length--> ${arr2.length}`)  //        .lenght insteadof .length()

*/



//--------------x---------------------------


// String Methods in javascript


/*

let str = "    Deep Learn ES6 Deep";
console.log(`strin-->${str}`)
str = "Deep Learn ES6 Deep";
console.log(`trim() remove space--> ${str.trim()}`);
console.log(`.substring() extracts a part of a string `);
console.log(`.substring(1,3)Deep  --> ${str.substring(1, 3)}`);
console.log(`indexOf() "d"--> ${str.indexOf("D")}`)     //-1 means not found
console.log(`lastindexOf() "d"--> ${str.lastIndexOf("Deep")}`)
console.log(`toUppercase()---> ${str.toUpperCase()}`);
console.log(`toUppercase()---> ${str.toLowerCase()}`);
console.log(`concat() add "Abid"--> ${str.concat(' Abid')}`)
console.log(`repalce() D->Q${str.replace("D", " Q")}`)
console.log(`repalce() All by /D/g ${str.replace(/D/g, " Q")}`)
console.log(`include() return ture if found--> ${str.includes("Learn")}`)
console.log(`slice(1,10) -->${str.slice(1, 10)}`)           //10-1=>9 elements
console.log(`.substr(1,10) like slice--> ${str.substr(1, 10)}`) //10 elements
console.log(`padStart()  padEnd():nhi aya smj`)
console.log(`split()---> ${str.split('')}`)
console.log(`charAt(15)--> ${str.charAt(15)}`) //D
console.log(`charCodeAt() show ST-Code---> ${str.charCodeAt(15)}`)//D=68


*/



//--------------x---------------------------        Sorting Methodes

/*

// Sort of Alphabets

let arr2 = ["learn", "abid"];
console.log(`array--> ${arr2}`)
console.log(`.sort() sort AtoZ --> ${arr2.sort()}`)

// Sort of Numbers


let numArr = [10, 3, 44, 55, 100];
console.log(`numberArr--> ${numArr}`)
console.log(`sorting of number--->${numArr.sort((a, b) => a - b)}`) //if you want to sort numeric values you need to pass callback Function
console.log(`sorting of number--->${numArr.sort((a, b) => b - a)}`) //if you want to sort numeric values you need to pass callback Function


// Sort of Numbers& Alphabets


let items = ["item4", "item2", "item1", "item3"]
console.log(items)
const sorted = items.sort((a, b) => {
    return +a.slice(-1) - +b.slice(-1)
})
console.log(sorted)


*/

//--------------x---------------------------        Linked test JS

/*

let animals = [{ type: "lion" }, "tiger"];
let clones = animals.slice();

clones[0].type = "bear";        //ye original ko bhi edit kryga
clones[1] = "sheep";            //ye original ko edit nhi kryga  :/


console.log(animals[0].type, clones[0].type);
console.log(animals[1], clones[1]);

// Alert

// Upper Type wala dono me change ho rha hai q k "type" as a refrence ban rha hai dono k liye
// jbhi 1 me change too dono me change

*/

//--------------x---------------------------        Linked test JS

/*

let cat = { type: "tiger", size: "large" };
let json = JSON.stringify(cat)                  //{ "type": "tiger", "size": "large" }
// let json = JSON.stringify(cat, ["type"])        //{"type":"tiger"}
console.log(json);
let jsonStr = JSON.parse(json)
console.log(jsonStr);

*/

//--------------x---------------------------        Linked test JS

/*

// example internet
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);   //Object.create--> create instanse of object that already create upside

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

*/


/*


//      now test

let cat = Object.create({ type: "lion" });      //ye type ki kuch nhi kryga too "cat" empty object hoga
// console.log(cat)                         //empty object
cat.size = "large";                         // new value add
let copyCat = { ...cat };                   //copy
cat.type = "tiger";                         //easi koye property cat me nhi hai too kuch nhi hoga
console.log(copyCat.type, copyCat.size);    // jbhi copyCat.type ->undefined


*/


//--------------x---------------------------        Linked test JS

/*

var thing;
let func = (str = 'no arg') => {
    console.log(str);
}
func(thing);   //thing=undefined so str=no arg
func(null);     //str=null
func("Abid")    //str="abid"


*/

//--------------x---------------------------        Linked test JS

/*

let score = [];
score.push(1, 2);
score.pop();
score.push(3, 4);
score.pop();
score = score.reduce((a, b) => a + b);
console.log(score);     //4

*/

//--------------x---------------------------        Linked test JS

/*

A = () => {
    console.log(ans);
    let ans = 1;
};
A();
A();

*/


// options
// 1 then 1
// 1 then undefined
// undefined then 1
// undefined then undefined



//--------------x---------------------------        Linked test JS

/*
let value1 = 2;
let value2 = 4;
value1 *= value1 + (value2 * value2) / value1; //4*4=>16/2=>8+2=>10*2=>20
console.log(value1);

// check
// let value3 = 3;
// value3 *= 6;
// console.log(value3);

*/

//--------------x---------------------------        Linked test JS

/*

var items = ["ball", "bat", "cat", "football"];
items.pop();
console.log(items.pop());   //guess output xD

*/

//--------------x---------------------------        Linked test JS

/*

if (true) {
    var first = "you";
}
function fScope() {
    var sec = "got this!";
}

fScope();
console.log(first); //you
console.log(sec);   //reference Error

*/



//--------------x---------------------------

//  /Javascript_Advanced_Concepts_1654440034.pdf

/*

//Function Scope
function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("final", i); // returns final 5
}
//Block Scope
function loop2() {
    for (let i = 0; i < 5; i++) {
        // can access i here
    }
    console.log("final", i); // returns an error here due to "let"
}
loop();

//  1
//  2
//  3
//  4
//  final 5

loop2();
// ReferenceError: i is not defined


*/


// Let and Const
// Trying to access a let or const variable before it is declared
// or outside of its block without returning it will result in a Reference Error

//--------------x---------------------------




// Immediately Invoked Function Expression or more simply IIFE is a JavaScript function
// that runs as soon as it is defined.Can also be referred to as a Self - Executing Anonymous Function.

// Grouping Operator () creates a lexical scope
// (function () {
// statements
// })();

// Immediately invokes the function with 2nd set of ()

// Takeaways: Avoid polluting the global namespace or scope when possible.

//--------------x---------------------------

/*

// Function Execution Context creates arguments object
function showArgs(arg1, arg2) {
    console.log('arguments showArgs: ', arguments); ////arguments <-keyword for parameters
    return `argument 1 is: ${arg1} and argument 2 is: ${arg2}`; //parameter return
}
showArgs("hello", "world");
// arguments: { 0: 'hello', 1: 'world' }
// argument 1 is hello and argument 2 is world
function noArgs() {
    console.log('arguments noArgs: ', arguments);   //arguments <-keyword for parameters
}
noArgs();
// arguments: {}
// even though there are no arguments, the object is still created

*/


// Alert

// The keyword arguments can be dangerous to use in your code as is.In ES6, a few
// methods were introduced that can help better use arguments

//--------------x---------------------------

/*

function showArgs(arg1, arg2) {
    console.log("arguments in object: ", arguments);
    console.log("arguments in Array", Array.from(arguments));
}
showArgs("hello", "world");
// arguments: { 0: 'hello', 1: 'world' }
// [ 'hello', 'world' ]
function showArgs2(...args) {
    console.log("arguments in 2nd object: ", args);
    console.log(Array.from(arguments));
    return `${args[0]} ${args[1]}`;
}


let returnD = showArgs2("hello", "world");
console.log(`return Data--> ${returnD}`)
// arguments: [ 'hello', 'world' ]
// [ 'hello', 'world' ]
// hello world

*/


// Alert

// The keyword arguments can be dangerous to use in your code as is.In ES6, a few
// methods were introduced that can help better use arguments

//--------------x---------------------------

// 'this' keyword

/*

var name = "Fatema";

function fun() {
    // some code here
    console.log(this.name); //work on browser not in vscode terminal
}
const user = {
    name: "Marium",
    yearOfBirth: 1999,
    calcAge: function () {
        const currentYear = (new Date()).getFullYear();
        console.log(currentYear - this.yearOfBirth);
    }
}
fun(); // 'this' is global. Logs "Fatema"
user.calcAge(); // 'this' is the user object
fun.call(user); // 'this' is the user object. Logs "Marium"

*/

//--------------x---------------------------


//////////////////// .call .bind  .apply
// maybe they are JUST apply on object or in Methods(function in object)


/*

// .call example
//// syntax       doSomething.call(object,arg1,arg2...)

let display = {
   show: function (para1, para2) { //<----Method
       console.log(`fullname is --> ${this.firstName} ${this.lastName}  ${para1} ${para2}`)
   }
}

let data = {
   firstName: "Abid",
   lastName: "Khan",
}

display.show.call(data, "value1", "Value2");

*/


//--------------x---------------------------



// .apply() The apply() method is similar to the call() method

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
//// syntax       doSomething.apply(object,array)
/*

let display = {
    show: function (para1, para2) { //<----Method
        console.log(`fullname is --> ${this.firstName} ${this.lastName}  ${para1} ${para2}`)
    }
}

let data = {
    firstName: "Abid",
    lastName: "Khan",
}

display.show.apply(data, ["value1", "Value2"]);

*/

//--------------x---------------------------


// .bind----> With this method, an object can borrow a method from another object

/*

let display = {
    firstName: "Sajid",
    lastName: "Ahmed",
    show: function () { //<----Method
        return `fullname is --> ${this.firstName} ${this.lastName} `
    }
}
console.log(display.show())

let data = {
    firstName: "Abid",
    lastName: "Khan",
}

let dis = display.show.bind(data);
console.log(dis)

*/

// Alert
// bind k result function ki body arahi hai to sahi sy smj nhi aya just
// ye join kr rha hai



//--------------x---------------------------.call/.apply/.bind new example

// syntax
//  const bound =doSomething.bind(object)
// bound(arg1,arg2...)

/*

const u1 = {
    id: 1,
    DOB: '1988-12-12'
}
const u2 = {
    id: 2,
    DOB: '2003-6-12'
}
const currentYear = new Date().getFullYear()
const u1Year = new Date(u1.DOB).getFullYear()
const u2Year = new Date(u2.DOB).getFullYear()
const calcAge = (currentYear, userYear) => (currentYear - userYear);

// console.log(calcAge(currentYear, u2Year));
console.log("call-->", calcAge.call(u1, currentYear, u2Year))
console.log("Apply-->", calcAge.apply(u1, [currentYear, u1Year]))

const bound = calcAge.bind(u1Year)
console.log("Bind--->", bound(currentYear, u2Year))

*/


