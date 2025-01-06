const user ={
    username :'shubham',
    price: 767,
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        //this key word is use for access corrent context or refer the current context in a object
    },
    // welcomeMessage1 : () =>  {
    //     console.log(`${this.username}, welcome to website`);
    //     // console.log(this);
    //     //this key word is use for access corrent context or refer the current context in a object
    // }
}

// user.welcomeMessage()// => shubham, welcome to website
// user.username ='sam' // => context is chenged
// user.welcomeMessage() //=> sam, welcome to website

// console.log(this);node enviroment => empty object {} but in browser this value is =>  (window) 
function roy1 (){
    let username = 'shubham'
    // console.log(this); empty object {}
    // console.log(this.username); => undefined beacuse this keyword works on object but not work in functions
}
// roy1()
const roy = () =>  {
    let username = 'shubham'
    // console.log(this.username); => undefined beacuse this keyword works on object but not work in arrow functions 
// }
    // console.log(this); => empty object {}
}
roy()
// function addTwo () {} => this is normal function
// const addTwo = ()={} => arrow function
// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// const addTwo = (num1, num2) =>  { return num1+num2} => explicet return key word use {}=> required of return key word.
// const addTwo = (num1, num2) =>  (num1+num2) => implicet run the function ()=> no nead for return key word.
// const addTwo = (num1, num2) =>  {username:'shubam'}=>undefined
// const addTwo = (num1, num2) =>  ({username:'shubam'}) => need of () => { username: 'shubam' }
// console.log(addTwo(6, 7));