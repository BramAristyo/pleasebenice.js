// if statement
const age = 20;

if (age >= 18) {
  console.log('You are an adult');
}

// if...else if...else statement
const grade = 85;

if (grade >= 90) {
  console.log('Grade A');
} else if (grade >= 80) {
  console.log('Grade B');
} else if (grade >= 70) {
  console.log('Grade C');
} else if (grade >= 60) {
  console.log('Grade D');
} else {
  console.log('Grade F');
}

//switch 
const num = 2;
let numberStr;

switch (num) {
  case 1:
    numberStr = 'One';
    break;
  case 2:
    numberStr = 'Two';
    break;
  case 3:
    numberStr = 'Three';
    break;
  default:
    numberStr = 'num not in the list';
}

console.log(numberStr);

// ternary operation
const userStatus = age >= 18 ? 'Adult' : 'Minor';
console.log(userStatus);

