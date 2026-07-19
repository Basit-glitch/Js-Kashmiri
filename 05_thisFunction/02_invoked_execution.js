// <<<<<<<<<<<    Immediately Invoked Function Expression    >>>>>>>>>

/*
// This is the simple form of function execution..
function chai(){
    console.log(`DB CONNECTED`)
}
chai()
*/



// Immediately Invoked Function Execeution.

// Sysntax of the immediatly invoked.
// function definition parenthesis () execution parenthesis ()

// IIFE is mostly used to protect from the global scope pollution.



// When we execute two or multi function at a time through IIFE rules, then first function will be end with semicolon.
/*
// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`)
})();


// arrow function, without named IIFE
( () => {
    console.log(`DB CONNECTED TWO`)
})();

( () => {
    console.log(`DB CONNECTED THREE`)
})();

( () => {
    console.log(`DB CONNECTED FOUR`)
})()
*/




// we can pass argument same as normal function in the IIFE.
/*
( (name, email, id, age) => {
    console.log("===== Developer Data =====")
    console.log(`Name is: ${name} \nEmail is: ${email} \nCNIC is: ${id} \nAge is: ${age}`)
})("Basit Ali", "basit@gmail.com", "8250103658403", 23)
*/





( (data) => {
    console.log(`DB have ${data}`)
})("personal information")



