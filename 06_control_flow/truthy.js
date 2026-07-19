// Example of the truthy and falsy values.
// 1
/*
const userEmail = "basit@gmail.com"
if(userEmail){
    console.log("Got the user email.")
} 
else{
    console.log("Don't have user email.")
}
*/


// 2
/*
const userEmail = ""  // In this case empty string print else condition.
if(userEmail){
    console.log("Got the user email.")
} 
else{
    console.log("Don't have user email.")
}
*/


// 3
/*
const userEmail = []  // Array or square bracket print if condition.
if(userEmail){
    console.log("Got the user email.")
} 
else{
    console.log("Don't have user email.")
}
*/




// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}




/*
const userEmail = [] 
if(userEmail.length === 0){
    console.log("Array is empty")
}
else{
    console.log("Array is not empty")
}
*/



/*
const object = {}
if(Object.keys(object).length===0){
    console.log("Object is empty.")
}
else{
    console.log("Object is not empty.")
}
*/



/*
const object = {
    name: "Basit Ali"
}
if(Object.keys(object).length===0){
    console.log("Object is empty.")
}
else{
    console.log("Object is not empty.")
}
*/






// Nuslish Collescing operator (??): null undefined
/*
let value1 = 13
value1  ?? 8
console.log(`Resul is value1 ${value1}`)
*/




/*
let value1
value1  = undefined ?? 8
console.log(`Resul is value2 ${value1}`)
*/



/*
let value1
value1  = null ?? 10 ?? 20
console.log(value1)
*/




// Ternary Operator
// condition ? true : false
/*
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Price is less then 80") : console.log("Price is greater then 80")
*/





