// if 
// if (condition){}
// const isUserLoggedIn = true
// if (3 !== 2 ){
//     console.log('executed'); => executed
// }
const temp = 60
if (temp <50){
    // console.log('temprature is less then 50'); 40 => executed
}else{
    // console.log('tempreature is greter then 50'); 60 => executed
}
// console.log('executed');
// <, >, <=, =>, ==, =, ===, !=, !==

const score = 200
if (score > 100){
    let power = 'fly'
    // console.log(`User power ${power}`); => User power fly because it is in the scope
}
// console.log(`User power ${power}`) => power is not defined because it is out of the scope

const balance = 1000
// if (balance > 500) console.log('test'); => test
// if (balance < 500){
//     console.log('less then 500');
// }else if (balance < 750){
//     console.log('less then 750');
// }else if (balance < 900){
//     console.log('less tehn 900');
// }else{
//     console.log('less then 1200'); => less then 1200
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
// if (userLoggedIn | debitCard | 2==3){
//     console.log('allow to but course'); => allow to but course
// }
// if (loggedInFromGoogle || loggedInFromEmail){
//     console.log('all to acceses');=> all to acceses
// }