
//Immediately invoked function experssion (IIFE)
(function db1 (){
    // this named iife
    // console.log(`DB CONNECTED`);
})();
// if we add two iife function in single file we should add ; for sepration of function
((name) => {
    // console.log(`DB CONNECTED ${name}`);
})('shubham')