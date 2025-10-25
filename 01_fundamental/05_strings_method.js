// get the length of a string
const str = 'Hello World';
console.log(str.length);

// case conversion
// toUpperCase()
const text = 'hello js';
console.log(text.toUpperCase());

// toLowerCase()
const TEXT = 'HELLO JS';
console.log(TEXT.toLowerCase());

// get char at spesific index
const greeting = 'Javascript';
console.log(greeting.charAt(0));
console.log(greeting[1]);

// get char code (ASCII/Unicode)
console.log(greeting.charCodeAt(0));

// substring method
// substr(start, length)
const sentence = 'Javascript is awesome';
console.log(sentence.substring(0, 10)); // 0 - 9

// slice(start, end)
console.log(sentence.slice(11, 13));

// search methods
const message = 'hello hello world';
console.log(message.indexOf('hello', 0));
console.log(message.indexOf('hello', 1));

// lastIndexOf
console.log(message.lastIndexOf('hello'))

// includes
console.log(message.includes('world'));

// startWith
console.log(message.startsWith('world'))

// endWith
console.log(message.endsWith('world'));

// replacement methods
const textAnimal = 'pig pig cat bird'
console.log(textAnimal.replace('pig', 'mouse'));

// replace all
console.log(textAnimal.replaceAll('pig', 'mouse'));

// trim method
// remove whitespace from both ends
const spaceStr = '   Hello World    ';
console.log(spaceStr.trim());

// split method
const csv = 'apple,banana,orange,mango';
console.log(csv.split(','));

const words = 'The quick brown fox';
console.log(words.split(' '));

// split each char
console.log('hello'.split(''));

// join method
// join(separator)
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join(', '));
console.log(fruits.join(' - '));
console.log(fruits.join(''));

//concat
const first = 'hello';
const second = 'world';
console.log(first.concat('_', second));

// multiple strings
console.log('hello'.concat(' ', 'my', ' ', 'world'));

// repeat method
// console.log('hello'.repeat(3));