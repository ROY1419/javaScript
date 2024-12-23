const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}).map((num) => num +1).filter((num) => (num >= 40))
// if you use {} then return on local scope. () = this is not required of return keyword
// nested loops is the loops which can run multiple loops or loop method on a function or given parameter
const newNums = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums);