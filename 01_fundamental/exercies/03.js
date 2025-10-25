// ===== EXERCISE / PRACTICE QUESTIONS =====
// Real-world Control Flow Scenarios

/*
QUESTION 1: Email Validation (Registration Form)
Create function 'validateEmail' with parameter (email)
Check if email:
- Is not empty
- Contains '@' symbol
- Contains '.' after @
- Length > 5
Return appropriate validation message
Test with: 'user@gmail.com', 'invalid.email', '', 'test@'
*/

const validateEmail = (email) => {
  if (!email) {
    return 'Email cannot be empty';
  } else if (!email.includes('@')) {
    return 'Email must contain @ symbol';
  } else if (!email.includes('.')) {
    return 'Email must contain . after @';
  } else if (email.length <= 5) {
    return 'Email length must be greater than 5';
  } else {
    return 'Email is valid';
  }
}

console.log(validateEmail('user@gmail.com'));
console.log(validateEmail('invalid.email'));
console.log(validateEmail(''));
console.log(validateEmail('test@'));

/*
QUESTION 2: Password Strength Checker (Registration)
Create function 'checkPasswordStrength' with parameter (password)
- If length < 6: return 'Weak - too short'
- If length >= 6 && length < 12: return 'Medium'
- If length >= 12 && contains numbers && contains uppercase: return 'Strong'
- Otherwise: return 'Medium'
Test with: '123456', 'myPassword123', 'Pass@123World'
*/

const checkPasswordStrength = (password) => {
  let length = password.length;

  const hasNumber = /\d/.test(password);        // cek apakah ada angka (0–9)
  const hasUppercase = /[A-Z]/.test(password); 

  if (length < 6) {
    return 'Weak - too short';
  } else if (length >= 6 && length < 12) {
    return 'Medium';
  } else if (length >= 12 && hasNumber && hasUppercase) {
    return 'Strong';
  } else {
    return 'Medium';
  }
}
console.log(checkPasswordStrength('123456'));
console.log(checkPasswordStrength('myPassword123'));
console.log(checkPasswordStrength('Pass@123World'));

/*
QUESTION 3: Login Authentication (Real Login System)
Create function 'authenticateUser' with parameters (username, password, storedPassword)
- If username is empty or password is empty: return 'Username and password required'
- If username length < 3: return 'Invalid username format'
- If password !== storedPassword: return 'Invalid credentials'
- If password === storedPassword: return 'Login successful'
Test with realistic scenarios
*/

const authenticateUser = (username, password, storedPassword) => {
  if (!username || !password) return 'Username and password required';
  if (username.length < 3) return 'Invalid username format';
  if (password !== storedPassword) return 'Invalid credentials';

  return 'Login successful';
}
console.log(authenticateUser('john', 'pass123', 'pass123'));
console.log(authenticateUser('jo', 'pass123', 'pass123'));
console.log(authenticateUser('john', 'wrong', 'pass123'));
console.log(authenticateUser('', 'pass123', 'pass123'));

/*
QUESTION 4: CHALLENGE - Complete User Registration System
Create function 'registerUser' with parameters:
(username, email, password, confirmPassword, age, agreeToTerms)

Validation checks (return error message on first failure):
1. All fields must be filled
2. username length >= 3
3. email must contain '@' and '.'
4. password length >= 8
5. password === confirmPassword
6. age >= 18
7. agreeToTerms must be true

If all pass: return {
  success: true,
  message: 'Registration successful',
  user: { username, email, age }
}

Test with:
- registerUser('jo', 'test@gmail.com', 'pass123', 'pass123', 20, true) → username too short
- registerUser('john', 'testgmail.com', 'password123', 'password123', 20, true) → invalid email
- registerUser('john', 'test@gmail.com', 'pass', 'pass', 20, true) → password too short
- registerUser('john', 'test@gmail.com', 'password', 'different', 20, true) → password mismatch
- registerUser('john', 'test@gmail.com', 'password123', 'password123', 15, true) → too young
- registerUser('john', 'test@gmail.com', 'password123', 'password123', 20, false) → not agreed
- registerUser('john', 'test@gmail.com', 'password123', 'password123', 20, true) → SUCCESS
*/

const registerUser = (
  username, 
  email, 
  password, 
  confirmPassword, 
  age, 
  agreeToTerms
) => {
  if (!username || !email || !password || !confirmPassword || !age) {
    return 'All fields must be filled';
  }

  if (username.length < 3) {
    return 'Username must be at least 3 characters long';
  }

  if (!email.includes('@') || !email.includes('.')) {
    return 'Email must contain @ and .';
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  }

  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }

  if (age < 18) {
    return 'You must be at least 18 years old';
  }

  if (!agreeToTerms) {
    return 'You must agree to the terms and conditions';
  }

  return {
    success: true,
    message: 'Registration successful',
    user: {
      username: username,
      email: email,
      age: age
    }
  }
};
console.log(registerUser('jo', 'test@gmail.com', 'pass123', 'pass123', 20, true));
console.log(registerUser('john', 'testgmail.com', 'password123', 'password123', 20, true));
console.log(registerUser('john', 'test@gmail.com', 'pass', 'pass', 20, true));
console.log(registerUser('john', 'test@gmail.com', 'password', 'different', 20, true));
console.log(registerUser('john', 'test@gmail.com', 'password123', 'password123', 15, true));
console.log(registerUser('john', 'test@gmail.com', 'password123', 'password123', 20, false));
console.log(registerUser('john', 'test@gmail.com', 'password123', 'password123', 20, true));

