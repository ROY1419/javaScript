// console.log('s');
// console.log('h');
// console.log('u');
// console.log('b');
// console.log('h');
// sayName => is function name, {} => this is function scope
// function sayName() {
//     console.log('s');
//     console.log('h');
//     console.log('u');
//     console.log('b');
//     console.log('h');
// } this is function definition
// sayName() => this is function reference after added () =>  execute the function
// function sayName() {
//     console.log('s');
//     console.log('h');
//     console.log('u');
//     console.log('b');
//     console.log('h');
// }
// sayName()

function addTwoNumber (number1, number2) {
    console.log(number1 + number2);
}
// } the o/p is right but it is coming with undefind beace their is not defind of result in function 
function addTwoNumber (number1, number2) {
    let result = number1 + number2
    return result
}
// } the o/p is right but it is coming with undefind beace their is not defind of result in function 
function addTwoNumber (number1, number2) {
    // let result = number1 + number2
    // return result // this under function scope => {return number1 + number 2}
    return number1 + number2
}

const result = addTwoNumber(4, 5)
// console.log("result :", result);

function loginUser(username){
    // if(username === undefined){
    //     console.log('please enter a user name');
    //     return
    // }
    if(!username){
        console.log('please enter a user name');
        return
    }
    return `${username} just logged in`
}
// console.log(loginUser('shubham'));
// console.log(loginUser());  => undefined 
// (...num1) => rest operator === (...sperd operator) 
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 400)) => array [ 200, 300, 400 ]
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, 500)) => array ..num1 will add 400, 500 just to add in the array => [ 400, 500 ]

// const user = {
//     username:'shubham',
//     price:656
// } => username is shubham and price is656
function handleobject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)
// handleobject({x
//     username:'roy',
//     price: 5776
// }) => username is roy and price is 5776

const myNewArray =[200, 400, 500, 600]
function returnSecoundValue(getArray){
    return getArray[3]
}
// console.log(returnSecoundValue(myNewArray)); => 3 INDEX WILL PRINT 600
// console.log(returnSecoundValue([400, 4000, true, 'hbhjbuh']));  => 3 INDEX WILL PRINT hbhjbuh

