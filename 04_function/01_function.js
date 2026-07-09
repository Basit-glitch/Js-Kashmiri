
// <<<<<<<<<<<<<<<<<<<<   Function Name Declared   >>>>>>>>>>>>>>>>>>>>>>

/*
function myFunctionName(){
    console.log("Basit")
    console.log("Aqib")
    console.log("Hamad")
    console.log("Shahnawaz")
    console.log("Sajid")
    console.log("Jawad")
}

myFunctionName()
*/




// One way to execute the function output
// function addTwoNumber(num1, num2){
//     console.log(num1+num2)
// }

// addTwoNumber(1, 2)









// Second way to execute the function output
// function addTwoNumber(num1, num2){
//     let result = num1 + num2
//     return result
// }

// const result = addTwoNumber(1, 2)
// console.log("Result is: ", result);







// Third way to execute the function output
// function addTwoNumber(num1, num2){
//     return num1 + num2
// }

// const result = addTwoNumber(4, 2)
// console.log("Result is: ", result);







/*
function logInUserMessage(username){
    return `${username} just logged in`
}
// logInUserMessage("Basit")
console.log(logInUserMessage("Basit"))
// console.log(logInUserMessage())
*/




/*
function logInUserMessage(username){
    // JavaScript way to declare if else statement
    // if(username === undefined){
    //     console.log("please enter a username")
    //     return
    // }

    // React way to declare if else statement
    if(!username){
        console.log("please enter a username")
        return
    }
}
console.log(logInUserMessage())
*/





/**/
function logInUserMessage(username = "Basit"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(logInUserMessage())







