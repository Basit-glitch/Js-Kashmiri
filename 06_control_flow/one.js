// <, >, <=, >=, ==, !=, ===, !==


// if(2!=3){
//     console.log("Executed")
// }


// === This is known as strict equal
// if(2==="3"){
//     console.log("Executed")
// }



// if(2!=3){
//     console.log("Executed")
// }


// !== This is known as anti pattern operator
// if(2!=3){
//     console.log("Executed")
// }




/*
const temp = 41
if(temp === 40){
    console.log("Temperature is less then 50")
}
else{
    console.log("Temprature is greater then 50")
}
*/




/*
// Scope Issue on this code.
const score = 200
if(score > 100){
    let power = "fly"
    console.log(`Power os score is ${power}`)
}
console.log(`Power of score is ${power}`)
*/


/*
const balance = 1000
if(balance>500)console.log("Test") // Implicit Scope code
*/



/*
const balance = 1100
if(balance < 500){
    console.log("Balance is less then 500")
} else if(balance<900){
    console.log("balance is less then 900")
} else{
    console.log("Balamce is less then 1200")
}
*/


/*
const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard && 2==2){
    console.log("User can go to the shopping Mall")
}
*/



/*
const userLoggedIn = true
const debitCard = true
const userLoginGoogle = true
const userLoginEmail = false
if(userLoggedIn && debitCard && 2==2){
    console.log("User can go to the shopping Mall")
}

if(userLoginGoogle || userLoginEmail){
    console.log("User log in")
}
*/


