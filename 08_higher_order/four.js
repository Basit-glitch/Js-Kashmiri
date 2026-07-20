
/*
const coding = ["js", "java", "python", "dart", "rubby"]
coding.forEach( (item) => {
    console.log(item)
})
*/


/*
const coding = ["js", "java", "python", "dart", "rubby"]
const values = coding.forEach( (item) => {
    console.log(item)
    return item
})
console.log(values)
*/


/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums)
*/



// Flter method
/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
    return num > 4 // in curly braces the return keryword is compulosory to return output.
} )
console.log(newNums)
*/


/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums)
*/


/*
const myPlayer = ["Shaheen", "Babar", "Rizwan", "Amir", "Haris"]
const newPlayer = []
myPlayer.forEach( (player) => {
    if(player > "Babar"){
        newPlayer.push(player)
    }
})
console.log(newPlayer)
*/



/*
const books = [
    {title: "Book1", genre: "fiction", 
        publish: 1981, edition: 2004
    },
    {title: "Book2", genre: "non-fiction", 
        publish: 1982, edition: 2005
    },
    {title: "Book3", genre: "history", 
        publish: 1983, edition: 2006
    },
    {title: "Book4", genre: "fiction", 
        publish: 1985, edition: 2005
    },
    {title: "Book5", genre: "non-fiction", 
        publish: 1987, edition: 2007
    },
    {title: "Book6", genre: "fiction", 
        publish: 1982, edition: 2006
    },
    {title: "Book7", genre: "history", 
        publish: 1984, edition: 2004
    },
    {title: "Book8", genre: "science", 
        publish: 1985, edition: 2008
    },
]

// let userbooks = books.filter ( (bk) => bk.genre === "history")
// console.log(userbooks)
*/



/*
const books = [
    {title: "Book1", genre: "fiction", 
        publish: 1981, edition: 2004
    },
    {title: "Book2", genre: "non-fiction", 
        publish: 1982, edition: 2005
    },
    {title: "Book3", genre: "history", 
        publish: 1983, edition: 2006
    },
    {title: "Book4", genre: "fiction", 
        publish: 1985, edition: 2005
    },
    {title: "Book5", genre: "non-fiction", 
        publish: 1987, edition: 2007
    },
    {title: "Book6", genre: "fiction", 
        publish: 1982, edition: 2006
    },
    {title: "Book7", genre: "history", 
        publish: 1984, edition: 2004
    },
    {title: "Book8", genre: "science", 
        publish: 1985, edition: 2008
    },
]
let userbooks = books.filter ( (bk) => { return bk.edition >= 2006})
console.log(userbooks)
*/



/*
const books = [
    {title: "Book1", genre: "fiction", 
        publish: 1981, edition: 2004
    },
    {title: "Book2", genre: "non-fiction", 
        publish: 1982, edition: 2005
    },
    {title: "Book3", genre: "history", 
        publish: 1983, edition: 2006
    },
    {title: "Book4", genre: "fiction", 
        publish: 1985, edition: 2005
    },
    {title: "Book5", genre: "non-fiction", 
        publish: 1987, edition: 2007
    },
    {title: "Book6", genre: "fiction", 
        publish: 1982, edition: 2006
    },
    {title: "Book7", genre: "history", 
        publish: 1984, edition: 2004
    },
    {title: "Book8", genre: "science", 
        publish: 1985, edition: 2008
    },
]
let userbooks = books.filter ( (bk) => { 
    return bk.edition >= 2006 && bk.genre === "history"
})
console.log(userbooks)
*/




