// ===== EXERCISE / PRACTICE QUESTIONS =====

/*
QUESTION 1: Function Declaration vs Expression
Create function declaration 'calculateRectangleArea' with parameters (length, width)
Create function expression 'calculateCircleArea' with parameter (radius)
Call both and display results
*/

function calculateRectangleArea(length, width) {
  return length * width;
}

const calculateCircleArea = function(radius) {
  return Math.PI * radius * radius;
}

/*
QUESTION 2: Arrow Functions
Convert to arrow functions:
a) addNumbers(a, b) - add two numbers
b) greetUser(name) - return greeting message
c) generateRandomNumber() - return random number
d) checkIsEven(num) - check if number is even
*/

const addNumber = (a, b) => a + b;
const greetUser = (name) => `Hello, ${name}`;
const generateRandomNumber = () => Math.random();
const checkIsEven = (num) => num % 2 == 0;

/*
QUESTION 3: Default Parameters
Create 'createUser' function with parameters:
- name (required)
- age (default 18)
- email (default 'no-email@example.com')
- country (default 'Indonesia')
Call with different parameter combinations
*/

const createUser = (name, age = 18, email = 'no-email@example.com', country = 'Indonesia') => ({
  name: name,
  age: age,
  email: email,
  country: country
});
console.log(createUser('John', 21, 'john@example.com', 'Singapore'));

/*
QUESTION 4: Rest Parameters
Create 'calculateAverage' function that accepts any number of scores
Calculate and return average
Test: calculateAverage(80, 90, 85) and calculateAverage(75, 85, 90, 95, 88)
*/

const calculateAverage = (...nums) => {
  let total = 0;
  for (let num of nums) {
    total += num;
  }

  return total / nums.length;
}

console.log(calculateAverage(80, 90, 85));
console.log(calculateAverage(75, 85, 90, 95, 88));

/*
QUESTION 5: Return Values
Create 'getUserProfile' - returns object with id, name, email
Create 'getStudentGrades' - returns array of grades
Use destructuring to extract values and display them
*/

const getUserProfile = (id, name, email) => ({
    id: id,
    name: name,
    email: email,
  });

const getStudentGrades = () => [11, 12, 13];

let user = getUserProfile(1, 'John', 'john@example.com')

const { id: idProfile , name: nameProfile, email: emailProfile } = user;
const [grade1, grade2, grade3] = getStudentGrades();

console.log(nameProfile, emailProfile, grade1);

/*
QUESTION 6: Scope and Closures
Create 'bankAccount' function with private balance variable
Return object with methods: deposit(amount), withdraw(amount), getBalance()
Test: deposit 1000, withdraw 200, check balance, withdraw 300, check balance
*/

function bankAccount() {
  let balance = 0;

  return {
    deposit: (nominal) => {
      balance += nominal;
      return balance;
    },
    withdraw: (nominal) => {
      balance -= nominal;
      return balance;
    },
    getBalance: () => balance
  }
}

const myAccount = bankAccount();
myAccount.deposit(1000);
myAccount.withdraw(200);
console.log(myAccount.getBalance());
myAccount.deposit(300);
console.log(myAccount.getBalance());


/*
QUESTION 7: Function as Parameter (Callback)
Create 'processArray' function with parameters (array, callback)
Test with: processArray([1,2,3,4], num => num * 2)
Test with: processArray([1,2,3,4], num => num + 10)
Test with: processArray([1,2,3,4], num => num * num)
*/

const processArray = (array = [], callback) => {
  return array.map(item => callback(item));
};

console.log(processArray([1,2,3,4], num => num * 2));
console.log(processArray([1,2,3,4], num => num + 10));
console.log(processArray([1,2,3,4], num => num * num));

/*
QUESTION 8: Returning Functions
Create 'createMultiplier' function with parameter (factor)
Returns a function that multiplies numbers by that factor
Create 'double' and 'triple' instances
Multiply: 5, 10, 15 with both
*/

const createMultiplier = (factor) => {
  return (number) => number * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(double(10));
console.log(double(15));

console.log(triple(5));
console.log(triple(10));
console.log(triple(15));

/*
QUESTION 9: IIFE (Immediately Invoked Function Expression)
Create IIFE 'cartManager' that manages shopping cart
Private cart array, public methods: addItem(name, price, qty), removeItem(name), getCart(), getTotalPrice()
Test: add Laptop ($1000, qty1), add Mouse ($25, qty2), remove Mouse, display total
*/

const cartManager = (() => {
  let cart = [];

  return {
    addItem: (name, price, qty) => {
      cart.push({
        name: name, 
        price: price, 
        qty: qty
      });
    }, 
    getCart: () => cart,
    removeItem: (name) => {
      cart = cart.filter(item => item.name !== name)
    },
    getTotalPrice: () => {
      return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    }
  }
})();

cartManager.addItem("Laptop", 1000, 1);
cartManager.addItem("Mouse", 25, 2);
cartManager.removeItem("Mouse");

console.log(cartManager.getCart())
console.log(cartManager.getTotalPrice());

/*
QUESTION 10: Recursive Functions & Higher Order Functions Challenge

Create 'sumRange(n)' - recursive function that returns sum 1 to n

Create 'reverseString(str)' - recursive function that reverses string

Given products array: [{name:'Laptop', price:1000, stock:5}, {name:'Mouse', price:25, stock:50}, {name:'Keyboard', price:75, stock:30}]

Map to get names, filter price > 50, reduce to calculate total inventory value (price * stock)
*/

const sumRange = (n) => {
  if (n == 1) return 1;
  return n + sumRange(n - 1);
}

const reverseString = (str) => {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

const products = [
  {
    name:'Laptop', 
    price:1000, 
    stock:5
  }, 
  {
    name:'Mouse', 
    price:25, 
    stock:50
  }, 
  {
    name:'Keyboard', 
    price:75, 
    stock:30
  }
];

const productNames = products.map(p => p.name);
console.log(productNames);

const productExpensiveFilter = products.filter(p => p.price > 50);
console.log(productExpensiveFilter); 

const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.stock), 0);
console.log(totalInventoryValue);
