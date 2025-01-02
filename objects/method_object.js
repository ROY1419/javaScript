// JavaScript Object methods 
// Below is a detailed explanation of all the Object static methods in JavaScript,
// along with code examples for each:

// 1. Object.create()

// Creates a new object with a specified prototype.
// const prototype = {
//   greet() {
//     return "Hello!";
//   }
// };

// const obj = Object.create(prototype);
// console.log(obj.greet()); // Output: Hello!
// console.log(Object.getPrototypeOf(obj) === prototype); // Output: true

// 2. Object.getPrototypeOf()

// Returns the prototype of the specified object.
// const prototype = { greet: "Hi" };
// const obj = Object.create(prototype);
// console.log(Object.getPrototypeOf(obj)); // Output: { greet: "Hi" }

// 3. Object.setPrototypeOf()

// Sets the prototype of an object.
// const obj = {};
// const prototype = { greet: "Hello" };
// Object.setPrototypeOf(obj, prototype);
// console.log(obj.greet); // Output: Hello

// 4. Object.defineProperty()

// Defines or modifies a property on an object.
// const obj = {};
// Object.defineProperty(obj, 'name', {
//   value: 'John',
//   writable: false, // Cannot modify
//   enumerable: true, // Appears in loops
//   configurable: false // Cannot delete or redefine
// });

// console.log(obj.name); // Output: John
// obj.name = "Jane"; // No effect
// console.log(obj.name); // Output: John

// 5. Object.defineProperties()

// Defines multiple properties on an object.
// const obj = {};
// Object.defineProperties(obj, {
//   name: { value: 'John', writable: true },
//   age: { value: 30, enumerable: true }
// });

// console.log(obj.name); // Output: John
// console.log(obj.age); // Output: 30

// 6. Object.getOwnPropertyDescriptor()

// Gets a descriptor for a specific property.
// const obj = { a: 1 };
// const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
// console.log(descriptor);
// // Output: { value: 1, writable: true, enumerable: true, configurable: true }

// 7. Object.getOwnPropertyDescriptors()

// Gets descriptors for all properties of an object.
// const obj = { a: 1 };
// const descriptors = Object.getOwnPropertyDescriptors(obj);
// console.log(descriptors);
// /*
// Output:
// {
//   a: {
//     value: 1,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }
// */

// 8. Object.keys()

// Returns an array of an object’s own enumerable property names.
// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj)); // Output: ['a', 'b', 'c']

// 9. Object.values()

// Returns an array of an object’s own enumerable property values.
// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.values(obj)); // Output: [1, 2, 3]

// 10. Object.entries()

// Returns an array of key-value pairs for an object’s enumerable properties.
// const obj = { a: 1, b: 2 };
// console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2]]

// 11. Object.getOwnPropertyNames()

// Returns an array of all property names (including non-enumerable).
// const obj = { a: 1 };
// Object.defineProperty(obj, 'b', { value: 2, enumerable: false });

// console.log(Object.getOwnPropertyNames(obj)); // Output: ['a', 'b']

// 12. Object.getOwnPropertySymbols()

// Returns an array of all symbol properties on an object.
// const symbol = Symbol('key');
// const obj = { [symbol]: 'value' };

// console.log(Object.getOwnPropertySymbols(obj)); // Output: [Symbol(key)]

// 13. Object.hasOwn() (Introduced in ES2022)

// Checks if an object has a property as its own (not inherited).
// const obj = { a: 1 };
// console.log(Object.hasOwn(obj, 'a')); // Output: true
// console.log(Object.hasOwn(obj, 'b')); // Output: false

// 14. Object.freeze()

// Freezes an object, preventing modification of its properties.
// const obj = { a: 1 };
// Object.freeze(obj);

// obj.a = 2; // No effect
// console.log(obj.a); // Output: 1

// 15. Object.isFrozen()

// Checks if an object is frozen.
// const obj = { a: 1 };
// Object.freeze(obj);

// console.log(Object.isFrozen(obj)); // Output: true

// 16. Object.seal()

// Seals an object, preventing new properties from being added or removed.
// const obj = { a: 1 };
// Object.seal(obj);

// obj.b = 2; // No effect
// console.log(obj.b); // Output: undefined

// 17. Object.isSealed()

// Checks if an object is sealed.
// const obj = { a: 1 };
// Object.seal(obj);

// console.log(Object.isSealed(obj)); // Output: true

// 18. Object.preventExtensions()

// Prevents new properties from being added to an object.
// const obj = { a: 1 };
// Object.preventExtensions(obj);

// obj.b = 2; // No effect
// console.log(obj.b); // Output: undefined

// 19. Object.isExtensible()

// Checks if an object is extensible.
// const obj = {};
// console.log(Object.isExtensible(obj)); // Output: true

// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj)); // Output: false

// 20. Object.is()

// Compares two values for strict equality.
// console.log(Object.is(25, 25)); // Output: true
// console.log(Object.is(NaN, NaN)); // Output: true
// console.log(Object.is(0, -0)); // Output: false

// 21. Object.fromEntries()

// Converts an array of key-value pairs into an object.
// const entries = [['a', 1], ['b', 2]];
// const obj = Object.fromEntries(entries);

// console.log(obj); // Output: { a: 1, b: 2 }

// 22. Object.prototype.toString()

// Returns a string representation of the object.
// console.log(Object.prototype.toString.call([])); // Output: [object Array]
// console.log(Object.prototype.toString.call({})); // Output: [object Object]

// These are all the key static methods of the Object class, explained with examples.
// If you’d like additional details or use cases, let me know!

