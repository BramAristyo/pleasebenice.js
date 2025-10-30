// ===== EXERCISE / PRACTICE QUESTIONS =====
// String Methods in JavaScript

/*
QUESTION 1: String Length and Case Conversion
Create function 'analyzeString' with parameter (str)
Return an object with:
- original: original string
- length: length of string
- uppercase: converted to uppercase
- lowercase: converted to lowercase
Test: analyzeString('Hello World')
*/

const analyzeString = (str) => {
  return {
    original: str,
    length: str.length,
    uppercase: str.toUpperCase(),
    lowercase: str.toLowerCase()
  }
};

console.log(analyzeString('Hello World'));

/*
QUESTION 2: Character Access and Info
Create function 'getCharacterInfo' with parameter (str, index)
Return object with:
- character: character at index
- charCode: character code (ASCII/Unicode)
- firstChar: first character
- lastChar: last character
Test: getCharacterInfo('JavaScript', 0)
*/

const getCharacterInfo = (str, index) => {
  return {
    character: str.charAt(index),
    charCode: str.charCodeAt(index),
    firstChar: str.charAt(0),
    lastCHar: str.charAt(str.length - 1)
  }
};

console.log(getCharacterInfo('Javascript', 0));

/*
QUESTION 3: Substring Extraction
Create function 'extractSubstring' with parameters (str, start, end)
Return object with:
- substring: using substring()
- slice: using slice()
- charAt: character at start position
Test: extractSubstring('Hello World', 0, 5)
*/

const extractSubstring = (str, start, end) => {
  return {
    substring: str.substring(start, end),
    slice: str.slice(start, end),
    charAt: str.charAt(start)
  }
};

console.log(extractSubstring('Hello World', 0, 5));

/*
QUESTION 4: Search and Find
Create function 'searchInString' with parameters (str, searchTerm)
Return object with:
- firstIndex: indexOf()
- lastIndex: lastIndexOf()
- isIncluded: includes()
- startsWithTerm: startsWith()
- endsWithTerm: endsWith()
Test: searchInString('hello world hello', 'hello')
*/

const searchInString = (str, searchTerm) => {
  return {
    firstIndex: str.indexOf(searchTerm),
    lastIndex: str.lastIndexOf(searchTerm),
    isIncluded: str.includes(searchTerm),
    startsWithTerm: str.startsWith(searchTerm),
    endsWithTerm: str.endsWith(searchTerm)
  }
};

console.log(searchInString('hello world hello', 'hello'));

/*
QUESTION 5: Replace Text
Create function 'replaceText' with parameters (str, oldText, newText)
Return object with:
- replaceFirst: replace() - only first occurrence
- replaceAll: replaceAll() - all occurrences
- countReplaced: how many replacements made
Test: replaceText('cat dog cat bird cat', 'cat', 'mouse')
*/

const replaceText = (str, oldText, newText) => {
  return {
    replaceFirst: str.replace(oldText, newText),
    replaceAll: str.replaceAll(oldText, newText)
  }
};

console.log(replaceText('cat dog cat bird cat', 'cat', 'mouse'));

/*
QUESTION 6: Trim and Clean
Create function 'cleanString' with parameter (str)
Return object with:
- original: original string
- trimmed: using trim()
- trimStart: using trimStart()
- trimEnd: using trimEnd()
- cleaned: trim + lowercase + no special chars (keep alphanumeric and spaces)
Test: cleanString('  Hello World!!!  ')
*/

const cleanString = (str) => {
  return {
    original: str,
    trimmed: str.trim(),
    trimStart: str.trimStart(),
    trimeEnd: str.trimEnd(),
    cleaned: str.trim().toLowerCase().replace(/[^a-z0-9 ]/g, '')
  }
}

console.log(cleanString('  Hello World!!!  '));

/*
QUESTION 7: Split and Join Operations
Create function 'manipulateString' with parameter (str)
- Split string by space into array
- Join array back with different separators
Return object with:
- wordsArray: split result
- joinedDash: joined with '-'
- joinedComma: joined with ', '
- joinedEmpty: joined with ''
Test: manipulateString('The quick brown fox')
*/

const manipulateString = (str) => {
  let arrayStr = str.split(' ');

  return {
    wordsArray: arrayStr,
    joinedDash: arrayStr.join('-'),
    joinedComma: arrayStr.join(', '),
    joinedEmpty: arrayStr.join('')
  }
};

console.log(manipulateString('The quick brown fox'));

/*
QUESTION 8: String Concatenation and Repeat
Create function 'buildString' with parameters (str1, str2, repeatCount)
Return object with:
- concat: combined using concat()
- template: combined using template literal
- repeated: str1 repeated repeatCount times
- bordered: create bordered text (str1 centered with str2 as border)
Test: buildString('Hello', '=', 3)
*/

const buildString = (str1, str2, repeatCount) => {
  return {
    concat: str1.concat(str2),
    template: `${str1}${str2}`,
    repeated: str1.repeat(repeatCount),
  }
};

console.log(buildString('Hello', '=', 3));

/*
QUESTION 9: Template Literals and Formatting
Create function 'createUserProfile' with parameters (name, age, email, city, salary)
Use template literals to create:
- simpleInfo: one-line format
- cardFormat: multi-line card format with borders
- salaryMasked: salary shown as X's except last 3 digits
Return object with all three formats
Test: createUserProfile('John Doe', 28, 'john@email.com', 'Jakarta', 150000000)
*/

const createUserProfile = (name, age, email, city, salary) => {
  const salaryStr = salary.toString();
  const salaryMasked = 'X'.repeat(salaryStr.length - 3) + salaryStr.slice(-3);

  const simpleInfo = `Name: ${name} | Age: ${age} | Email: ${email} | City: ${city} | Salary: Rp${salary}`;
  
  const cardFormat = `
==============================
USER PROFILE
==============================
Name   : ${name}
Age    : ${age}
Email  : ${email}
City   : ${city}
Salary : Rp${salary}
==============================
`;

  return { 
    simpleInfo, 
    cardFormat, 
    salaryMasked 
  };
};


console.log(createUserProfile('John Doe', 28, 'john@email.com', 'Jakarta', 150000000));

/*
QUESTION 10: CHALLENGE - Email Validator and Formatter
Create function 'processEmail' with parameter (email)
Validation checks:
- Not empty
- Contains '@'
- Contains '.' after '@'
- No spaces
- Username part >= 3 chars
- Domain part >= 5 chars
Return object: {
  isValid: boolean,
  errors: [],
  formatted: lowercase trimmed version,
  username: part before '@',
  domain: part after '@'
}
Test with: 'user@gmail.com', ' Invalid.email', 'a@b.c', 'test@domain.co'
*/

const processEmail = (email) => {
  const errors = [];
  if (!email) errors.push('Email is empty');
  if (email.includes(' ')) errors.push('Contains spaces');
  if (!email.includes('@')) errors.push("Missing '@'");
  
  const trimmed = email.trim().toLowerCase();
  const atIndex = trimmed.indexOf('@');
  const dotIndex = trimmed.lastIndexOf('.');
  
  if (atIndex === -1 || dotIndex === -1 || dotIndex < atIndex) errors.push("Invalid domain format");
  
  const username = trimmed.split('@')[0] || '';
  const domain = trimmed.split('@')[1] || '';
  
  if (username.length < 3) errors.push('Username too short');
  if (domain.length < 5) errors.push('Domain too short');
  
  const isValid = errors.length === 0;
  
  return { isValid, errors, formatted: trimmed, username, domain };
};

console.log(processEmail('user@gmail.com'));
console.log(processEmail(' Invalid.email'));
console.log(processEmail('a@b.c'));
console.log(processEmail('test@domain.co'));