// ===== EXERCISE / PRACTICE QUESTIONS =====

/*
QUESTION 1: String Operations
Create a variable named 'fullName' with value "John Doe"
Display the length of the string
Convert it to uppercase
*/

let fullName = 'John Doe';
console.log(fullName.length);

const fullNameUppercase = fullName.toUpperCase();
console.log(fullNameUppercase);

/*
QUESTION 2: Number Operations
Create variable price = 25000.75 and discount = 15.5
Calculate total price after discount
Display the result with correct data type
*/

let price = 25000.75;
let discount = 15.5;

const result = price - (price * discount/100);
console.log(result, typeof result);

/*
QUESTION 3: Array Manipulation
Create an array named 'numbers' with values [10, 20, 30, 40]
Add element 50 at the end
Remove the first element
Display all elements that have value > 20
*/

let numbers = [
  10,
  20,
  30,
  40
];

numbers.push(50);
numbers.shift();

console.log(numbers);

const filteredNumbers = numbers.filter(item => item > 20);

console.log(filteredNumbers);

/*
QUESTION 4: Array Methods
Create array 'fruits' = ['Apple', 'Banana', 'Orange', 'Mango']
Use map() to add " is a fruit" to each element
Use filter() to show only fruits with more than 5 characters
Use join() to combine with " | " separator
*/

let fruits = [
  'Apple',
  'Banana',
  'Orange',
  'Mango'
];

const fruitsResult = fruits.filter(item => item.length > 5).map(item => item + ' is a fruit').join(' | ');

console.log(fruits);
console.log(fruitsResult);

/*
QUESTION 5: Object Operations
Create an object 'student' with properties: name, age, grade, address
Add a 'phoneNumber' property
Update the 'grade' property with a new value
Display all keys from the object
*/

let student = {
  name: 'John',
  age: 20,
  grade: 12,
  address: '123 Main St'
};

student.phoneNumber = '555-1234';
student.grade = 11;

console.log(Object.keys(student));
console.log(student);

/*
QUESTION 6: Object & Array Combination
Create an array 'students' containing 3 student objects
Each object has: name, age, grade
Display the name of the 2nd student
Update the grade of the 1st student
*/

let students = [
  {
    name: 'John',
    age: 20,
    grade: 12
  },
  {
    name: 'Jane',
    age: 19,
    grade: 11
  },
  {
    name: 'Alex',
    age: 18,
    grade: 10
  },
];

console.log(students[1].name);

students[0].grade = 11;

console.log(students);

/*
QUESTION 7: Type Conversion
Create variable string_number = "500"
Convert to number and add 100
Create variable number_value = 1000
Convert to string and concatenate with "000"
*/

let string_number = '500';

const string_numberResult = parseInt(string_number) + 100;
console.log(string_numberResult);

let number_value = 1000;

const number_valueResult = String(number_value) + '0000';
console.log(number_valueResult);

/*
QUESTION 8: Destructuring
Create array [100, 200, 300] and use destructuring to get the 1st and 3rd elements
Create object {id: 5, name: "Product", price: 50000}
Use destructuring to get only name and price
*/

let array = [
  100,
  200,
  300
];

let [firstArr, , thirdArr] = array;

console.log(firstArr);
console.log(thirdArr);

const { nameObject, priceObject } = {
  id: 5,
  name: 'Product',
  price: 50000
};

console.log(nameObject);    // Product
console.log(priceObject);   // 50000

/*
QUESTION 9: Merge Objects
Create object user = {name: "Alex", age: 25}
Create object address = {city: "Jakarta", country: "Indonesia"}
Merge both objects using Object.assign() and spread operator
Display the result
*/

let user = {
  name: 'Alex',
  age: 25
};

let address = {
  city: 'Jakarta',
  country: 'Indonesia'
};

const mergedObject = Object.assign(user, address);
console.log(mergedObject);

const spreadMerge = {...user, ...address};
console.log(spreadMerge);

/*
QUESTION 10: Challenge - Nested Data Structure
Create an object 'company' with structure:
- name: company name
- employees: array containing 2 employee objects
- each employee has: id, name, department
Add a 3rd employee
Change the department of the 1st employee
Display names of all employees
*/

let company = {
  name: 'company name',
  employees:[
    {
      id: 1,
      name: 'John',
      department: 'IT'
    },
    {
      id: 2,
      name: 'Doe',
      department: 'Accounting'
    }
  ]
};

company.employees.push({
  id: 3,
  name: 'Jane',
  department: 'HR'
});

company.employees[0].department = 'Software Engineer';
console.log(company.employees[0].name);
console.log(company.employees[1].name);
console.log(company.employees[2].name);