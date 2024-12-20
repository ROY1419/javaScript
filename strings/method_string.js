// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const index = 11;
// (at method)
// console.log(`The character at index ${index} is ${sentence.at(index)}`);
// charAt()
// console.log(`The character at index ${index} is ${sentence.charAt(index)}`); => this method as same as at but in this method you can access the char at which index is it in place.
// charCodeAt()
// console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`); => his method is use for to convert char to numeric value from 0-65535, if the character is in not in sting then is show the -1.


// const str1 = 'Cats are the best!';
// const str2 = 'Is this a question?';
// concat()
// console.log(str1.concat(' ', str2)); => // Expected output: "shubham Roy"
// concat is use for combine two or more string with "with space sperated".
// console.log(str2.concat(' ', str1)); => // Expected output: "Roy shubham"

// endsWith()
// console.log(str1.endsWith('best!')); => // Expected output: true
// This method lets you determine whether or not a string ends with another string. This method is case-sensitive.
// this method contans two arguments one is searchString, second is ending index of that string.
// console.log(str1.endsWith('are', 8)); => // output: true

// includes()
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'rox';
// includes() use for checking the string whether the searchString is in the another string or not.
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// it gives boolen value in this case the o/p is false


// indexOfFirst(), lastIndexOF()
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// const searchTerm = 'Ruth';
// const indexOfFirst = paragraph.indexOfFirst(searchTerm);
// const lastIndexOf = paragraph.lastIndexOf(searchTerm);
// is thye searchStringterm is nort in the sentence then it will the o/p is -1.
// in this method first index to be chose as a given searchTerm
// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// console.log(`Index of the lastTerm ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`)
// lastIndexof() is use for to detect last term and last index of given searchterm in the given string sentence.
// console.log(`The index of the second "${searchTerm}" is ${paragraph.indexOf(searchTerm,indexOfFirst + 1)}`);
// in this console.log indexOfFirst + 1 will print the second searchTerm of the sentence. 


// padEnd()
// const str3 = 'Breaded Mushrooms';
// const str4 = '200';
// console.log(str3.padEnd(20, '.'));
// Breaded Mushrooms... padEnd() is use for add the gievn string to the end of the sring.
// console.log(str4.padEnd(5, '+'));
// 200++,padEnd() is use for add the gievn string to the end of the sring, it take two argumnets string and index limit.

// padStart()
// const str1 = '500';
// console.log(str1.padStart(4, '0')); => adding the given element before given string => 0500
// const fullNumber = '5518 1810 5370';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber);=> adding the given element after given string beacuse slice(-4).

// repeat(count) 
// const mood = 'Happy! ';
// console.log(`I feel ${mood.repeat(2)}`);=> just to repeat given string into the another string by given value => I feel Happy! Happy! 


// replace(pattern, replacement) => 
// replaceAll(pattern, replacement) =>  new string
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.replace("Ruth's", 'my')); => Expected output: "I think my dog is cuter than your dog!"
// console.log(paragraph.replaceAll('dog', 'monkey')); => Expected output: "I think Ruth's monkey is cuter than your monkey!"
// const regex = /Dog/i;
// console.log(paragraph.replace(regex, 'ferret')); => I think Ruth's ferret is cuter than your dog!
// console.log(paragraph.replaceAll(regex, 'ferret')); => Expected output: "I think Ruth's ferret is cuter than your ferret!"


// slice(indexStart)
// slice(indexStart, indexEnd) => new string
// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.slice(31)); => Expected output: "the lazy dog."
// console.log(str.slice(4, 19)); => Expected output: "quick brown fox"
// console.log(str.slice(-4)); => Expected output: "dog."
// console.log(str.slice(-9, -5)); => Expected output: "lazy"


// split(separator)
// split(separator, limit) => the Array
// const str = 'The quick brown fox jumps over the lazy dog.';
// const words = str.split(' ');
// console.log(words[3]);=> Expected output: "fox" => string
// const chars = str.split('');
// console.log(chars[8]);=> Expected output: "k" => strinfg
// const strCopy = str.split();
// console.log(strCopy); => Expected output: Array ["The quick brown fox jumps over the lazy dog."] => object


// startsWith(searchString) => this method is use for to check the given string with each string after compare the strings.
// startsWith(searchString, position) => Boolean
// const str1 = 'Saturday night plans';
// console.log(str1.startsWith('Sat')); => Expected output: true
// console.log(str1.startsWith('Sat', 3)); => Expected output: false


// substring(indexStart)
// substring(indexStart, indexEnd) => new String
// const str = 'Mozilla';
// console.log(str.substring(1, 3)); => Expected output: "oz"
// console.log(str.substring(2));=> Expected output: "zilla"


// toLocaleLowerCase() => this method use for convert local upper case to local lower case
// toLocaleLowerCase(locales) => new string
// const dotted = 'İstanbul';
// console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);=>Expected output:"EN-US: i̇stanbul"
// console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);=> Expected output: "TR: istanbul"


// toLowerCase() => this method use for convert upper case to lowercase
// const sentence = 'The Quick Brown fox Jumps Over The Lazy Dog.';
// console.log(sentence.toLowerCase());=>Expected output: "the quick brown fox jumps over the lazy dog."


// toLocaleUpperCase()=>this method is use for convert local lower case into local upper case
// toLocaleUpperCase(locales) => new string
// const city = 'istanbul';
// console.log(city.toLocaleUpperCase('en-US')); =>Expected output: "ISTANBUL"
// console.log(city.toLocaleUpperCase('TR'));=> Expected output: "İSTANBUL"


// toUpperCase()=>this method is use for convert lower case into upper case
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.toUpperCase());=> Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


// toString() => string => this method is use for convert any data-type to string.
// const stringObj = new String('foo');
// console.log(typeof stringObj);=> Expected output: String { "foo" } => object
// console.log(typeof stringObj.toString()); => Expected output: "foo" => string


// trim() => this method is use for to trim unnessarry spaces frm the string
// const greeting = '   Hello world!   ';
// console.log(greeting); => Expected output: "   Hello world!   ";
// console.log(greeting.trim());=> Expected output: "Hello world!";


// trimEnd(),trimRight() => this method is use for to trim unnessarry spaces from the END of the string.
// const greeting = '   Hello world!   ';
// console.log(greeting);=> Expected output: "   Hello world!   ";
// console.log(greeting.trimEnd());=> Expected output: "   Hello world!";


// trimStart(),trimLeft()=> this method is use for to trim unnessarry spaces from the start of the string.
// const greeting = '   Hello world!   ';
// console.log(greeting);=> Expected output: "   Hello world!   ";
// console.log(greeting.trimStart());=> Expected output: "Hello world!   ";


// valueOf()
// const stringObj = new String('foo');
// console.log(stringObj); =>Expected output: String { "foo" }
// console.log(stringObj.valueOf());=> Expected output: "foo"


// string[Symbol.iterator]()
// const str = "The quick red fox jumped over the lazy dog's back.";
// const iterator = str[Symbol.iterator]();
// let theChar = iterator.next();
// while (!theChar.done && theChar.value !== ' ') {console.log(theChar.value);
//     theChar = iterator.next();
//     // Expected output: "T"
//     //                  "h"
//     //                  "e"
// }

