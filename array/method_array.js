// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg) => it execute function under it.
// console.log(Array.from('full'));
// console.log(Array.from([1, 2, 3], (x) => x * x));


// Array.fromAsync(arrayLike)
// Array.fromAsync(arrayLike, mapFn)
// Array.fromAsync(arrayLike, mapFn, thisArg)
// Array.fromAsync() is almost equivalent to Array.from() in terms of behavior, except the following:
// Array.fromAsync() handles async iterable objects.
// Array.fromAsync() returns a Promise that fulfills to the array instance.
// If Array.fromAsync() is called with a non-async iterable object, each element to be added to the array is first awaited.
// If a mapFn is provided, its input and output are internally awaited.


// Array.isArray(value)=>true if value is an Array; otherwise, false.
// Array.isArray() is a JavaScript function that checks if a value is an array, without checking its prototype chain or relying on the Array constructor.
// It returns true for values created using array literal syntax or the Array constructor, making it safe for cross-realm objects.
// It also rejects objects with Array.prototype in their prototype chain, which would not be accepted by an instance of Array.
// console.log(Array.isArray((1, 3, 5))); o/p => false
// console.log(Array.isArray(['hindi', 'english'])); o/p => true
// console.log(Array.isArray(new Array(5, 'hindi', 'english'))); o/p => true
// console.log(Array.isArray(new Int16Array([15, 33]))); o/p => false
// console.log(typeof Array.from({name: "shubham"})) => [] becasue you access the array only by key or value.



// Array.of()
// Array.of(element1)
// Array.of(element1, element2)
// Array.of(element1, element2, /* …, */ elementN)
// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3)); => [ 100, 200, 300 ] by taking variables and convert into array.

// at(index)=>The at() method returns an array element with a zero-based index converted to an integer. 
// Negative index counts back from the end of the array, if index < 0, index + array.length is accessed. 
// The return value is the element in the array matching the given index. 
// If index < -array.length or index >= array.length, the method returns undefined. 
// The at() method is equivalent to bracket notation when index is a non-negative integer.
//  However, when counting elements from the end of the array, array[-1] cannot be used,
//  as all values inside square brackets are treated as string properties. 
// The at() method allows relative indexing, shortened to array.at(-1). 
// Combining at() with with() allows reading and writing an array using negative indices. 
// The at() method is generic and expects a length property and integer-keyed properties.
// const array1 = [5, 12, 8, 130, 44];
// let index = 2;
// console.log(`An index of ${index} returns ${array1.at(index)}`);=> An index of 2 returns 8
// let i = -1;
// console.log(`An index of ${i} returns ${array1.at(i)}`); => An index of -1 returns 44.


// concat()
// concat(value1)
// concat(value1, value2) => A new Array instance.
// concat(value1, value2, /* …, */ valueN) => is the method which add two or more array into a single array.
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3); => [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// copyWithin(target, start)
// copyWithin(target, start, end)=>
// const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// console.log(array1.copyWithin(1, 3, 5)); => [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(array1.copyWithin(2, 4));; => [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// entries() => The entries() method is a generic function that iterates empty slots in sparse arrays, 
// expecting them to have a length property and integer-keyed properties, and returns a new iterable iterator object.
// const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);


// every(callbackFn)
// every(callbackFn, thisArg) => The every() method is an iterative method that calls a provided callbackFn function for each element in an array, returning a truthy value if the element passes the test and a false value otherwise. 
// The function is called with the arguments element, index, array, and thisArg optional. 
// If the callbackFn returns a falsy value, every() returns false and stops iterating through the array. 
// If the callbackFn returns a truthy value for all elements, every() returns true. 
// This method acts like the "for all" quantifier in mathematics, returning true for an empty array. 
// CallbackFn is invoked only for array indexes with assigned values, not for empty slots in sparse arrays. 
// The every() method is generic, expecting a length property and integer-keyed properties for the value.
// const isBelowThreshold = (currentValue) => currentValue <= 45;
// const array1 = [1, 30, 45, 29, 10, 13];
// console.log(array1.every(isBelowThreshold)); => true


// fill(value)
// fill(value, start)
// fill(value, start, end)=> in this function there are three arguments passed [original value is converted into gievn value or element],
// [start stands for from which index do you want to start]
// [end stands for till which index to convert]
// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0, 2, 4)); => [ 1, 2, 0, 0 ]
// console.log(array1.fill(5, 1)); => [ 1, 5, 5, 5 ]
// console.log(array1.fill(6)); => [ 6, 6, 6, 6 ]


// filter(callbackFn)
// filter(callbackFn, thisArg) => this function is use for filter the array,
// The filter() method is an iterative function that calls a provided callbackFn function once for each element in an array,
// constructing a new array of all values for which callbackFn returns a truthy value.
// The function is invoked for array indexes with assigned values, not for empty slots in sparse arrays.
// The arguments for the function include element, index, array, thisArg Optional, and return value. 
// If no elements pass the test, an empty array is returned.The filter() method is generic, expecting a length property and integer - keyed properties for the value. 
// It is invoked only for array indexes with assigned values and is not invoked for empty slots in sparse arrays.
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6); => [ 'exuberant', 'destruction', 'present' ]
// const result = words.filter((word) => word.length > 4); => [ 'spray', 'elite', 'exuberant', 'destruction', 'present' ]
// console.log(result);


// find(callbackFn)
// find(callbackFn, thisArg) => The find() method is an iterative method that calls a callbackFn function for each element in an array,
// returning a truthy value if a matching element is found, and a false value otherwise. 
// The function is called with the arguments element, index, array, thisArg optional, and return value. 
// If the callbackFn function returns a truthy value, the element is returned, and the iteration stops. 
// If the callbackFn function never returns a truthy value, the method returns undefined. 
// The find() method is invoked for every index of the array, not just those with assigned values. 
// Empty slots in sparse arrays behave the same as undefined.
// The find() method is generic, expecting a length property and integer-keyed properties.
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 100);
// console.log(found); => 130


// findIndex(callbackFn)
// findIndex(callbackFn, thisArg) => this function is use for to detect the argument which is passed on it,
// hecks the index of the argument which passess the argumats
// const array1 = [5, 12, 20, 44, 130];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber)); => 2 index


// findLast(callbackFn)
// findLast(callbackFn, thisArg)=> in this method the arrow function exectue the condition, 
// if it satisfied then it check greater rhen also last value in the array. like 44
// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg) =>in this method the arrow function exectue the condition, 
// if it satisfied then it check greater then also print last value INDEX in the array. like 4
// const array1 = [5, 12, 50, 130, 44];
// const found = array1.findLast((element) => element > 40);
// console.log(found); => 44 
// console.log(array1.findLastIndex(isLargeNumber));=> 4 Index


// flat()
// flat(depth) => deal with nested array convert into single array
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat()); => expected output: Array [0, 1, 2, 3, 4]
// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat());=> expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
// console.log(arr2.flat(2)); => expected output: Array [0, 1, 2, 3, Array [4, 5]]
// console.log(arr2.flat(Infinity));


// flatMap(callbackFn)
// flatMap(callbackFn, thisArg) => 
// const arr1 = [1, 2, 1];
// const result = arr1.flatMap((num) => (num === 1 ? [4, 4] : 1));
// console.log(result); => [ 4, 4, 1, 4, 4 ]


// forEach(callbackFn)
// forEach(callbackFn, thisArg)=>




// join()
// join(separator) => convert all the elements into a single string
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());=> Expected output: "Fire,Air,Water"
// console.log(elements.join('')); =>  Expected output: "FireAirWater"\
// console.log(elements.join('-'));=> Fire-Air-Water


// keys() => deals with the key of the array or index of the array
// const array1 = ['a', 'b', 'c', 'd'];
// const iterator = array1.keys();
// for (const key of iterator) {console.log(key); => 0, 1, 2, 3}


// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex) => delas with index, as given searchterm, is in the array or not,
// if in the array then which index on the is present that searchTerm
// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));=> Expected output: 3 index
// console.log(animals.lastIndexOf('Tiger'));=> Expected output: 1 index



// map(callbackFn)
// map(callbackFn, thisArg) 
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1); => [ 2, 8, 18, 32 ]


// some(callbackFn)
// some(callbackFn, thisArg) => The some() method is an iterative function that calls a provided callbackFn function once for each element in an array,
// until the function returns a truthy value. If an element is found, some() returns true and stops iterating through the array.
// If callbackFn returns a falsy value for all elements, some() returns false. The some() method acts like the "there exists" quantifier in mathematics, 
// returning false for an empty array. CallbackFn is invoked only for array indexes with assigned values, not empty slots in sparse arrays. 
// Some() does not mutate the array on which it is called, but the function provided can. The length of the array is saved before the first invocation of callbackFn,
// and changes to already-visited indexes do not cause callbackFn to be invoked again. If an existing, yet-unvisited element is changed by callbackFn,
// its value passed to callbackFn will be the value at the time that element gets visited. Concurrent modifications of the some() method are generally avoided.
// const array = [1, 3, 5, 7, 9];
// const array1 = [1, 2, 3, 4, 5];
// const odd = (element) => ((element % 2) === 1);
// const even = (element) => ((element % 2) === 0);
// console.log(array.some(odd));
// console.log(array1.some(even));






