
// function declaration
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet('John'));

// function expression
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3));

// named function expresion
const multiply = function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));

// arrow function
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(10, 3));

// arrow function with implicit
const divide = (a, b) => a / b;
console.log(divide(20, 4));

// arrow function square
const square = x => x * x;
console.log(square(10));

// arrow function with no parameters
const getRandomNumber = () => Math.random()
console.log(getRandomNumber());

// default parameters
function calculateDiscount(price, discountPercent = 10) {
  return price - (price * discountPercent / 100);
}
console.log(calculateDiscount(5000));
console.log(calculateDiscount(5000, 20));

// rest parameters (...)
const sumAll = (...numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }

  return total;
}
console.log(sumAll(1, 2, 3, 4, 5));

// spread operator in function call
const arr = [10, 20, 30];
console.log(Math.max(...arr));

// returning object
function getUserInfo(id) {
  return {
    id: id,
    name: 'John Doe',
    email: 'john@example.com'
  }
}
const user = getUserInfo(1);
console.log(user);

// scope
const globalVar = 'I am global';

function demonstrateScope() {
  const localVar = 'I am local';
  console.log(globalVar); // can access
  console.log(localVar); // can access

  if (true) {
    const blockVar = 'I am block scope';
    console.log(blockVar);
    console.log(globalVar); // can access
  }

  // console.log(blockVar); // Error - blockVar is not defined
}

demonstrateScope()

function scopeExample() {
  if (true) {
    var varVariable = 'var';
    let letVariable = 'let';
    const constVariable = 'const';
  }

  console.log(varVariable) // can access
  // console.log(letVariable) // Error - letVariable is not defined
  // console.log(constVariable) // Error - constVariable is not defined
}

scopeExample()

// hoisting function 
// function declarations are hoisted (can be called before defined)
// function expressions are NOT hoisted
console.log(hoistedFunction());
function hoistedFunction() {
  return 'this function is hoisted';
}

// function as first-class objects
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const resultAdd = applyOperation(3, 5, (x, y) => x + y);
console.log(resultAdd);

// Returning a function from a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor
  }
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5));
console.log(triple(5));

// closures
function counter() {
  let count = 0;

  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    getCount: () => {
      return count;
    }
  }
}

const myCounter = counter();
console.log(myCounter.increment());  // 1
console.log(myCounter.increment());  // 2
console.log(myCounter.decrement());  // 1
console.log(myCounter.getCount());  // 1

// callback function 
// function passed to another function to be executed later
const processUserData = (userId, callback) => {
  const userData = {
    id: userId,
    name: 'Alexander'
  };

  callback(userData)
};

processUserData(1, (user) => {
  console.log('Successfuly get: ', user);
});

// immediately invoked function expression (IIFE)
(function() {
  const privateVar = 'I am private';
  console.log(privateVar);
})();

// IIFE with parameters 
(function(name) {
  console.log(`Hello from IIFE, ${name}`);
})('Alice');

//arrow function IIFE
(() => {
  console.log('Arrow function IIFE');
})();

// recursive function 
const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n-1);
}
console.log(factorial(3));

const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(2));

// function composition
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;

const addThenMultiply = compose(multiplyByThree, addTwo);
console.log(addThenMultiply(5));
