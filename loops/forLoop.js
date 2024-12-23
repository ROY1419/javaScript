// for loop
// for(let index = 0; index < 10; index++){
//     const element = index;
//     // console.log(element);
// }
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log('5 is best number');
    }
    // this condition will print upto 5 then run another console.log()
    // console.log(element);
}
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    // outer loop run 1 time after excevution of outer loop then inner loop execute thats why 
    for (let j = 0; j <= 10; j++) {
        // first run outer loop one time then run inner loop 10 times
        // console.log(`Inner loop value${j} and Outer loop value: ${i}`);
        // console.log(i + '*' + j + '=' + i * j);
        // table print 0 to 10 
    }
}
let myArray = ['iron man', 'batman', 'spiderman', 'flash']
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++){
    const element = myArray[index]
    // console.log(element);
}


// keyWords => break, continue

// for (let index = 1; index <= 20; index++){
//     if (index == 10){
//         console.log(`detected 10`);
//         break => when is given parameter is detected then it stoped and comes out of loop
//     }
//     console.log(`value of index is ${index}`);
// }
for (let index = 1; index <= 20; index++){
    if (index == 10){
        // console.log(`detected 10`);
        // continue => this stands for skip the deteced parameter and run after the ditected parameter
    }
    // console.log(`value of index is ${index}`);
}