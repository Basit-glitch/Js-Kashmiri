// <<<<<<<<<<<<  Function part 2   >>>>>>>>>>>>>>>
/*
function calculatePrice(num1){
    return num1
}
console.log(calculatePrice(100, 200, 300))
*/


// Inside the function parameter 3 dot is known as rest state, and in array is known as spread state.
/*
function calculatePrice(...num1){
    return num1
}
console.log(calculatePrice(100, 200, 300))
*/


/*
const user = {  // Object
    username: "Basit",
    priceProduct: 199
}

function handleObject(anyObject){ // Function, function pass parameter random name
    console.log(`username is ${anyObject.username} and price is ${anyObject.priceProduct}`)
}

handleObject(user) // function execution pass argument object instead of parameter.
*/


/*
// const user = {  // Object
//     username: "Basit",
//     priceProduct: 199
// }

function handleObject(anyObject){ // Function, function pass parameter random name
    console.log(`username is ${anyObject.username} and price is ${anyObject.priceProduct}`)
}

// handleObject(user) // function execution pass argument object instead of parameter.
handleObject({  // another way of passing object value into the function name.
    username: "Basit",
    priceProduct: 787
})
*/




// <<<<<<<<<<<<<   How to pass the array    >>>>>>>>>>>>>>>
/*
// This is the way of declaring array value using array name into function argument pass.
const  myArray = [100, 200, 300, 400]
function returnArrayValue(getvalue){
    return getvalue[1]
}
console.log(returnArrayValue(myArray))
*/




/*
// This is the way of declaring array value using array values function argument pass.
const  myArray = [100, 200, 300, 400]
function returnArrayValue(getvalue){
    return getvalue[1]
}
console.log(returnArrayValue([100, 200, 300, 400]))
*/




