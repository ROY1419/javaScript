// {}=> when it comes with if else, function then it called as scope of a particular fuction or if else try catch
// {}=> without it called as a object so some thing.
// const q=10
// let c=56
// var g=7788
// let c=7788 => independent globel scope
// {}=> variable declered out side the block scope is called globel scope
// valaue is used in block scope should not go out side the valaue 
if (true) {
    const q = 10
    let c = 56
    // console.log('INNER: ', c); => INNER:  56 local scopex
}

// console.log(q);=>q is not defined because q is in the block scope 
// console.log(c);=>c is not defined because c is in the block scope 
// console.log(g);
// console.log(c);=>7788

// nested scope => (closser)child function can access the parent variables but parent function can't access child variables
function one() {
    const username = 'shubahm'
    function two() {
        const website = 'youtube'
        // console.log(username);
    }
    // console.log(website); => website is not defined
    // two()
}
// one()

if (true) {
    const username = 'shubahm'
    if (username === 'roy') {
        const website = 'youtube'
        // console.log(username + website);
    }
    // console.log(website); => website is not defined
}
// console.log(username); => username is not defined

// console.log(addone(6))=>7
function addone (num){
    return num + 1
}
// console.log(addone(6)) => 7
// const addTwo => is function but it also called expersion in js or varible of a function
// console.log(addTwo(8)) => Cannot access 'addTwo' before initialization => hosting
const addTwo = function two (num){
    return num + 3
}
// console.log(addTwo(8))=>11