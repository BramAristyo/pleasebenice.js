// ===== EXERCISE / PRACTICE QUESTIONS =====
// Real-case Loop Scenarios (5 soal)

/*
QUESTION 1: E-COMMERCE - Cart Validation & Total
Create function 'validateCart' with parameter (cartItems)
Each item: { id, name, price, quantity, stock }

Using for...of:
- If quantity === 0: skip item (continue)
- If price <= 0: add error "Invalid price: {name}"
- If quantity > stock: add error "Insufficient stock: {name}"
- Otherwise add (price * quantity) to totalPrice and increment itemCount

Return:
{
  isValid: boolean (no errors),
  totalPrice: number,
  itemCount: number,
  errors: []
}
*/

const cartItems_Q1 = [
  {id:1, name:'Laptop', price:15000000, quantity:1, stock:5},
  {id:2, name:'Mouse', price:200000, quantity:3, stock:2},
  {id:3, name:'Keyboard', price:500000, quantity:0, stock:10}
];

const validateCart = (cartItems) => {
  let totalPrice = 0;
  let itemCount = 0;
  const errors = [];

  for (const item of cartItems) {
    const { name, price, quantity, stock } = item;

    if (quantity === 0) {
      continue;
    }

    if (price <= 0) {
      errors.push(`Invalid price: ${name}`);
    } else if (quantity > stock) {
      errors.push(`Insufficient stock: ${name}`);
    } else {
      totalPrice += price * quantity;
      itemCount++;
    }
  }

  return {
    isValid: errors.length === 0,
    totalPrice,
    itemCount,
    errors
  };
}

console.log(validateCart(cartItems_Q1));

/*
QUESTION 2: BILLING - Invoice Calculator
Create function 'calculateInvoice' with parameter (items)
Each item: { description, hours, rate }

Using for...of with destructuring:
- For each item compute amount = hours * rate
- Build items array with {description, hours, rate, amount}
- subtotal = sum(amount)
- tax = subtotal * 0.1
- total = subtotal + tax

Return: { items: [...], subtotal, tax, total }
*/

const invoiceItems_Q2 = [
  {description:'Web Dev', hours:40, rate:500000},
  {description:'Design', hours:20, rate:300000}
];

const calculateInvoice = (items) => {
  let subtotal = 0;
  const updatedItems = [];

  for (const item of items) {
    const { description, hours, rate } = item;
    const amount = hours * rate;

    updatedItems.push({ description, hours, rate, amount });
    subtotal += amount;
  }

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return { items: updatedItems, subtotal, tax, total };
}

console.log(calculateInvoice(invoiceItems_Q2));

/*
QUESTION 3: INVENTORY - Status & Value Analysis
Create function 'manageInventory' with parameter (inventory)
Each entry: { sku, name, stock, minStock, price }

Using loops:
- Skip items with stock === 0
- totalValue += price * stock
- If stock < minStock and stock > 0 => push to lowStockItems
- If stock === 0 => push to criticalItems (skip earlier)
- Build byStatus counts: OK (stock >= minStock), 'Low Stock', Critical (stock === 0)

Return:
{
  totalItems: number (count of processed items),
  totalValue: number,
  lowStockItems: [...],
  criticalItems: [...],
  byStatus: { OK: n, 'Low Stock': n, Critical: n }
}
*/

const inventory_Q3 = [
  {sku:'LAP001', name:'Laptop', stock:5, minStock:10, price:15000000},
  {sku:'MOU001', name:'Mouse', stock:25, minStock:20, price:200000},
  {sku:'KEY001', name:'Keyboard', stock:0, minStock:15, price:500000}
];

const manageInventory = (inventory) => {
  let totalValue = 0;
  const lowStockItems = [];
  const criticalItems = [];
  const byStatus = { OK: 0, 'Low Stock': 0, Critical: 0 };

  for (const item of inventory) {
    const { name, stock, minStock, price } = item;

    if (stock === 0) {
      criticalItems.push(name);
      continue;
    }

    totalValue += price * stock;

    if (stock < minStock) {
      lowStockItems.push(name);
    }

    byStatus[stock >= minStock ? 'OK' : 'Low Stock']++;
  }

  return {
    totalItems: inventory.length - criticalItems.length,
    totalValue,
    lowStockItems,
    criticalItems,
    byStatus
  };
}

console.log(manageInventory(inventory_Q3));

/*
QUESTION 4: AUTH - Login Retry System
Create function 'loginWithRetry' with parameters (maxAttempts, correctPassword, attemptFn)
Use a while loop to simulate attempts:
- Each attempt call attemptFn(attemptNumber) to get candidate password
- If candidate === correctPassword => return { success:true, attempts:n }
- If attempts reach maxAttempts => return { success:false, attempts:n, message:'Account locked' }
*/

const passwords_Q4 = ['wrong1', 'wrong2', 'SecurePass123'];

const loginWithRetry = (maxAttempts, correctPassword, attemptFn) => {
  let attempts = 0;
  let success = false;
  let candidate = '';

  while (attempts < maxAttempts && !success) {
    attempts++;
    candidate = attemptFn(attempts);

    if (candidate === correctPassword) {
      success = true;
    }
  }

  return success
    ? { success: true, attempts }
    : { success: false, attempts, message: 'Account locked' };
}

console.log(loginWithRetry(3, 'SecurePass123', (attempt) => passwords_Q4[attempt - 1]));

/*
QUESTION 5: UI - Seating Chart & Reservation
Create function 'createSeatingChart' with parameters (rows, cols, reservedSeats)
- Build 2D array of seats with nested loops: each seat { row, col, available:true }
- reservedSeats = array of positions [{row, col}, ...]
- Loop through reservedSeats and mark matching seat.available = false
- Count available seats

Return:
{ chart: 2D array, availableCount: number }
*/

const reservedSeats_Q5 = [{row:0, col:1}, {row:1, col:2}];

const createSeatingChart = (rows, cols, reservedSeats) => {
  const chart = [];
  let availableCount = 0;

  for (let row = 0; row < rows; row++) {
    const rowArray = [];
    for (let col = 0; col < cols; col++) {
      const isReserved = reservedSeats.some(seat => seat.row === row && seat.col === col);
      const seat = { row, col, available: !isReserved };

      rowArray.push(seat);

      if (seat.available) {
        availableCount++;
      }
    }
    chart.push(rowArray);
  }

  return { chart, availableCount };
}

console.log(createSeatingChart(3, 4, reservedSeats_Q5));