// For In

// //The For In statement iterates over all
// enumerable properties of an object.


// For of

// The For of statement creates a loop
// iterating over iterable objects.



//////for In $ For OF------->object


/*
const object = {
    name: "Abid",
    roll: 23
}

for (let prop in object) {
    console.log(`the prop  "${prop}" contains value ${object[prop]} `)  //agar ap direct ${object} likhengy to output nhi ayega.
}

////For Of not work in Object


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

*/

//// .some

/*

let arr = [1, 2, 3, 4, 5];
arr.some(arr => {
    console.log(arr)
})

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

//--------------x---------------------------


//Array operation

//array.split() can't work


/*

let arr2 = ["learn", "abid"];
console.log(`original array--> ${arr2}`);
let arr3 = arr2.join();
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
