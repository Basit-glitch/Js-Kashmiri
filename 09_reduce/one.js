// Reduce Basic is here..
// Reduce is a method in which array value are reduce and give us final result of the total value.

// Syntax
/*
array.reduce((accumulator, currentValue) => {
    // logic
}, initialValue);
*/



// Let start with example.
/*
const array = [1, 2, 3, 4]
// Full function with scope
const total = array.reduce( (acc, curval) => {
    console.log(acc)
    return acc + curval;
}, 0)
console.log(total)
*/



/*
const array = ["John", "Doe", "Smith", "Martin"]

const total = array.reduce( (acc, curval) => {
    console.log(acc)
    return acc + curval;
}, "Chris")
console.log(total)
*/


/*
const array = [1, 2, 3, 4]
// Arrow function
const total = array.reduce( (acc, curval) => acc + curval, 0)
console.log(total)
*/





// Let take example of object.

const myCourse = [
    {
        course: "Java Script",
        price: 2500,
    },
    {
        course: "Python",
        price: 1500,
    },
    {
        course: "C Plus Plus",
        price: 3500,
    },
    {
        course: "Mobile app dev",
        price: 9500,
    },
    {
        course: "Java",
        price: 3500,
    },
]

// const totalPay = myCourse.reduce( (acc, payment) => acc + payment.price, 0)
// console.log(`total payment of courses is: ${totalPay}`)

// const totalCourse = myCourse.reduce( (acc, title) => acc + title.course , 0)
// console.log(`total learning courses is: ${ totalCourse}`)

