// For In

// //The For In statement iterates over all
// enumerable properties of an object.


// For of

// The For of statement creates a loop
// iterating over iterable objects.

/*

const object = {
    name: "Abid",
    roll: 23
}

//////for In-------->object


for (let prop in object) {
    console.log(`the prop  "${prop}" contains value ${object[prop]} `)  //agar ap direct ${object} likhengy to output nhi ayega. 
}

////For Of not work in Object


*/
//Alert
// object property get in-> prop & its value in -> object[prop]  <- like array 

// object per "For In" work krta hai "For Of" nhi krta. 



const arr = ["a", "b", "c"];

//////for In-------->Array

/*
console.log(`For of  display both Index,Values`)
for (const prop in arr) {
    console.log(`the prop index ${prop} and value at ${arr[prop]}`);    //agar ap direct ${arr} likhengy to complete array display hogi. 
}

*/

//////for of-------->Array

console.log(`For of only display Values and not work in objects`)
for (const prop of arr) {
    console.log(`the prop value ${prop}`);    //agar ap direct ${arr} likhengy to complete array display hogi. 
}
