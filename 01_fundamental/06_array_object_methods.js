// array iteration method

const products = ['Laptop', 'Mouse', 'Keyboard'];
products.forEach((product, index) => {
  console.log(`${index}: ${product}`);
});

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

const initialValue = 0;
const sum = numbers.reduce((acc, number) => acc + number, initialValue);
console.log(sum);

const userRoles = [
  { name: 'John', role: 'admin' },
  { name: 'Jane', role: 'user' },
  { name: 'Bob', role: 'admin' }
];

const roleCount = userRoles.reduce((acc, user) => {
  acc[user.role] = (acc[user.role] || 0) + 1;
  return acc;
}, {});
console.log(roleCount);

// array search methods
const scores = [85, 90, 78, 92, 88];
const firstHigh = scores.find((score) => score > 90);
console.log(firstHigh);

const user = userRoles.find((u) => u.role === 'admin');
console.log(user);

const index = scores.findIndex((score) => score > 90);
console.log(index);

// some() - Check if at least one element matches condition
const hasLowScore = scores.some((score) => score < 80);
console.log(hasLowScore);

// every() - Check if all elements match condition
const allPassed = scores.every((score) => score > 78);
console.log(allPassed);

// object methods
const person = {
  name: 'John',
  age: 20,
  city: 'Jakarta'
};
const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);

entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
})

// Object.fromEntries() - Create object from entries
const newEntries = [['a', 1], ['b', 2], ['c', 3]];
const newObj = Object.fromEntries(newEntries);
console.log(newObj);

const user1 = {
  name: 'John',
  age: 25
};

// Object.assign() - Merge objects (mutating)
const user2 = { city: 'Jakarta' };
const userMerged = Object.assign({}, user1, user2);
console.log(userMerged);

// Spread operator (preferred for copying) pass-by-value
const copied = { ...user1 };
console.log(copied);

// json conversion
const data = { name: 'John', age: 25, hobbies: ['reading', 'gaming'] };
console.log(JSON.stringify(data));

const formattedJSON = JSON.stringify(data, null, 2);
console.log(formattedJSON);

// JSON.parse() - Convert JSON string to object
const jsonString = `{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "skills": ["JavaScript", "HTML", "CSS"]
}`;

const parsed = JSON.parse(jsonString);
console.log(parsed);

// concat() - Combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined);

// sort() - Sort array with custom comparator
const items = [
  { name: 'Item C', price: 300 },
  { name: 'Item A', price: 100 },
  { name: 'Item B', price: 200 }
];

items.sort((a, b) => a.price - b.price);
console.log(items); 