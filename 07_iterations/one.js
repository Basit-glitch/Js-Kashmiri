// for loop
/*
for(let i=0; i<10; i++){
    const element = i;
    if(element==5){
        console.log("5 is best number.")
    }
    console.log(element);
}
*/



/*
for(let i=0; i<=5; i++){
    console.log(`Element of outer loop is ${i}`)
    for(let j=0; j<=10; j++){
        // console.log(`Element of inner loop is ${j} and inner loop is ${i}`)
        console.log(i + `*` + j + `=` + i*j)
    }

}
*/


/*
let array = ["Basit", "Ali", "Sheikh", "Kashmiri"]
console.log(array.length)
for(let i=0; i<array.length; i++){
    let values = array[i];
    console.log(`${values}`);
}
*/





/*
// break on Control flow.
for(let i=0; i<=10; i++){
    if (i==5){
        console.log(`Detected value is: ${i}`)
        break // this keyword break the control flow 
    }
    console.log(`value of array is: ${i}`)
}
*/




// Continue keyword use to continue the control flow.
for(let i=0; i<=10; i++){
    if (i==5){
        console.log(`Detected value is: ${i}`)
        continue // this keyword use to continue the control flow 
    }
    console.log(`value of array is: ${i}`)
}







