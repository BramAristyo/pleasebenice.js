// ===== EXERCISE / PRACTICE QUESTIONS =====
// Loops in JavaScript

/*
QUESTION 1: For Loop - Basic Iteration
Create function 'printNumbers' with parameter (n)
Print numbers from 1 to n using for loop
Return array of numbers
Test: printNumbers(5) → [1, 2, 3, 4, 5]
*/

/*
QUESTION 2: For Loop - Sum and Average
Create function 'calculateStats' with parameter (n)
Calculate sum of numbers from 1 to n AND average
Return object: {sum: total, average: avg}
Test: calculateStats(5) → {sum: 15, average: 3}
*/

/*
QUESTION 3: For Loop - Nested (Multiplication Table)
Create function 'printMultiplicationTable' with parameter (num)
Print multiplication table for num (1 to 10) using for loop
Return array of results
Test: printMultiplicationTable(5) → [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
*/

/*
QUESTION 4: For Loop - Array Processing
Create function 'processArray' with parameters (array, multiplier)
Loop through array and multiply each element
Skip negative numbers (use continue)
Return new array with results
Test: processArray([1, -2, 3, 4, -5], 2) → [2, 6, 8]
*/

/*
QUESTION 5: While Loop - Find Power of 2
Create function 'findPowerOfTwo' with parameter (limit)
Use while loop to find all powers of 2 up to limit
Return array of powers: [1, 2, 4, 8, 16, 32, ...]
Test: findPowerOfTwo(100) → [1, 2, 4, 8, 16, 32, 64]
*/

/*
QUESTION 6: Do...While Loop - Input Validation Simulator
Create function 'validateInput' with parameter (attempts)
Simulate checking input attempts using do...while
Each attempt has 70% success rate
Return: {successOnAttempt: n, totalAttempts: n}
Test: validateInput(5)
*/

/*
QUESTION 7: Nested Loops - Matrix Creation
Create function 'createMatrix' with parameters (rows, cols, value)
Create 2D array (matrix) using nested loops
Fill with value or index position
Return the matrix
Test: createMatrix(3, 3, 'X') → [['X','X','X'], ['X','X','X'], ['X','X','X']]
*/

/*
QUESTION 8: For...Of Loop - Object Array Processing
Create function 'getTotalExpenses' with parameter (expenses)
expenses = [{category: 'Food', amount: 50000}, {category: 'Transport', amount: 30000}]
Use for...of to iterate and sum amounts
Return: {total: sum, itemCount: count, averagePerItem: avg}
Test with real expense data
*/

/*
QUESTION 9: For...In Loop - Dynamic Object Stats
Create function 'getObjectStats' with parameter (obj)
Use for...in to loop through object
Count properties, find min/max values (if numbers)
Return: {propertyCount: n, propertyNames: [], numericValues: []}
Test: getObjectStats({name: 'John', age: 25, score: 85})
*/

/*
QUESTION 10: CHALLENGE - Pattern Generator with Multiple Loops
Create function 'generatePattern' with parameter (n)
Use loops to generate diamond pattern
Example: generatePattern(3)
  *
 * *
* * *
 * *
  *
Return: array of strings representing each row
Test: generatePattern(4)
*/