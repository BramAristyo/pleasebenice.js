// for loop
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i< fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop
for (const fruit of fruits) {
  console.log(fruit)
}

// for..of destructuring 
const users = [
  {
    name: 'John', 
    age: 25
  },
  {
    name: 'Jane',
    age: 27
  }
];

for (const {name, age} of users) {
  console.log(`${name} is ${age} years old`);
}

// for...in loop (object properties)
const person = {
  name: 'John',
  age: 25,
  city: 'Jakarta',
  email: 'john@gmail.com'
}

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// nested with for...of
const groups = [
  { name: 'Group A', members: ['John', 'Jane'] },
  { name: 'Group B', members: ['Bob', 'Alice'] }
];

for (const group of groups) {
  console.log(group.name);
  for (const member of group.members) {
    console.log(` -${member}`);
  }
}

