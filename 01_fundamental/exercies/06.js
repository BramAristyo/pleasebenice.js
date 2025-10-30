// ===== EXERCISE / PRACTICE QUESTIONS =====
// Array & Object Methods in JavaScript

/*
QUESTION 1: E-COMMERCE - Product Filter & Transform
Create function 'filterAndTransformProducts' with parameter (products)
Each product: { id, name, price, category, inStock }

Using filter() and map():
- Filter only products that are inStock
- Transform to new format: { id, name, discountedPrice (price * 0.9), category }
- Return array

Test data:
[
  {id:1, name:'Laptop', price:15000000, category:'Electronics', inStock:true},
  {id:2, name:'Mouse', price:200000, category:'Accessories', inStock:false},
  {id:3, name:'Keyboard', price:500000, category:'Accessories', inStock:true}
]
*/

const products_Q1 = [
  {id:1, name:'Laptop', price:15000000, category:'Electronics', inStock:true},
  {id:2, name:'Mouse', price:200000, category:'Accessories', inStock:false},
  {id:3, name:'Keyboard', price:500000, category:'Accessories', inStock:true}
];

const filterAndTransformProducts = (products) => {
  return products.filter((p) => p.inStock === true)
  .map((p) => ({
    id: p.id,
    name: p.name,
    discountedPrice: p.price * 0.9
  }));
}

console.log(filterAndTransformProducts(products_Q1));

/*
QUESTION 2: BILLING - Calculate Invoice with Grouped Items
Create function 'groupAndCalculateInvoice' with parameter (invoiceItems)
Each item: { description, hours, rate }

Using reduce():
- Group items by rate (create object with rate as key)
- For each group, calculate: totalHours (sum), totalAmount (sum of hours*rate)
- Return: { byRate: {...}, grandTotal: number }

Test data:
[
  {description:'Web Dev', hours:40, rate:500000},
  {description:'Design', hours:20, rate:300000},
  {description:'Frontend', hours:30, rate:500000}
]
*/

const invoiceItems_Q2 = [
  {description:'Web Dev', hours:40, rate:500000},
  {description:'Design', hours:20, rate:300000},
  {description:'Frontend', hours:30, rate:500000}
];

const groupAndCalculateInvoice = (invoiceItems) => {
  const grouped = invoiceItems.reduce((acc, item) => {
    if (!acc[item.rate]) acc[item.rate] = [];
    acc[item.rate].push(item)
    return acc;
  }, {})

  const byRate = Object.entries(grouped).reduce((acc, [rate, items]) => {
    const totals = items.reduce((acc, item) => {
      acc.totalHours += item.hours;
      acc.totalAmount += item.rate * item.hours;
      return acc;
    }, {totalHours: 0, totalAmount: 0});
    acc[rate] = totals;
    return acc;
  }, {});

  const grandTotal = Object.entries(byRate).reduce((acc, [rate, item]) => {
    acc += item.totalAmount;
    return acc;
  }, 0)

  return {
    byRate: byRate,
    grandTotal: grandTotal
  }
}

console.log(groupAndCalculateInvoice(invoiceItems_Q2));

/*
QUESTION 3: INVENTORY - Analyze Stock & Categorize
Create function 'analyzeInventory' with parameter (inventory)
Each item: { sku, name, stock, minStock, price, category }

Using Object methods (keys, values, entries, fromEntries):
- Extract all SKUs
- Create price list object: { sku: price, ... }
- Categorize by status: OK (stock >= minStock), LOW (0 < stock < minStock), CRITICAL (stock === 0)
- Count items per category

Return: { skus: [], priceList: {...}, statusCount: {...} }

Test data:
[
  {sku:'LAP001', name:'Laptop', stock:5, minStock:10, price:15000000, category:'Electronics'},
  {sku:'MOU001', name:'Mouse', stock:25, minStock:20, price:200000, category:'Accessories'},
  {sku:'KEY001', name:'Keyboard', stock:0, minStock:15, price:500000, category:'Accessories'}
]
*/

const inventory_Q3 = [
  {sku:'LAP001', name:'Laptop', stock:5, minStock:10, price:15000000, category:'Electronics'},
  {sku:'MOU001', name:'Mouse', stock:25, minStock:20, price:200000, category:'Accessories'},
  {sku:'KEY001', name:'Keyboard', stock:0, minStock:15, price:500000, category:'Accessories'}
];

const analyzeInventory = (inventory) => {
  const sku = inventory.map(item => item.sku);
  const priceList = Object.fromEntries(inventory.map(item => [item.sku, item.price]));
  const statusCount = inventory.reduce((acc, item) => {
    if (item.stock >= item.minStock) acc.OK++;
    if (0 < item.stock && item.stock < item.minStock) acc.LOW++;
    if (item.stock === 0) acc.CRITICAL++;
    return acc;
  }, {
    OK: 0,
    LOW: 0,
    CRITICAL: 0
  })

  return {
    skus: sku,
    priceList: priceList,
    statusCount: statusCount
  }
}

console.log(analyzeInventory(inventory_Q3));

/*
QUESTION 4: DATA PROCESSING - Convert & Parse API Response
Create function 'processApiResponse' with parameter (jsonString)

Using JSON methods:
- Parse JSON string to object
- Extract users array
- Transform: filter active users only
- Group by role: { admin: [...], user: [...], viewer: [...] }
- Return: { totalUsers: n, activeUsers: n, byRole: {...} }

Test data (JSON string):
{
  "users": [
    {"id":1, "name":"John", "role":"admin", "active":true},
    {"id":2, "name":"Jane", "role":"user", "active":false},
    {"id":3, "name":"Bob", "role":"admin", "active":true},
    {"id":4, "name":"Alice", "role":"viewer", "active":true}
  ]
}
*/

const apiResponse_Q4 = `{
  "users": [
    {"id":1, "name":"John", "role":"admin", "active":true},
    {"id":2, "name":"Jane", "role":"user", "active":false},
    {"id":3, "name":"Bob", "role":"admin", "active":true},
    {"id":4, "name":"Alice", "role":"viewer", "active":true}
  ]
}`;

const processApiResponse = (jsonString) => {
  const usersObject = JSON.parse(jsonString);
  const usersArray = usersObject.users;
  const activeUsers = usersArray.filter((item) => item.active === true);

  const grouped = activeUsers.reduce((acc, item) => {
    if (!acc[item.role]) acc[item.role] = [];
    acc[item.role].push(item);
    return acc;
  },{})

  return {
    totalUsers: usersArray.length,
    activeUsers: activeUsers.length,
    byRole: grouped
  }
}

console.log(processApiResponse(apiResponse_Q4));

/*
QUESTION 5: ADVANCED - Multi-level Data Analysis
Create function 'analyzeOrdersWithMetrics' with parameter (orders)
Each order: { id, customerId, status, items: [{productId, quantity, price}], date }

Using chaining methods (filter, map, reduce, find, sort):
1. Calculate total revenue per customer: { customerId: revenue, ... }
2. Find top 3 customers by revenue
3. Calculate status breakdown: { completed: n, pending: n, cancelled: n }
4. Find best selling product (by total quantity sold)

Return: {
  revenuePerCustomer: {...},
  topCustomers: [...],
  statusBreakdown: {...},
  bestSellingProduct: number (productId)
}

Test data:
[
  {id:1, customerId:101, status:'completed', items:[{productId:1, quantity:2, price:100000}], date:'2024-01-01'},
  {id:2, customerId:102, status:'completed', items:[{productId:1, quantity:1, price:100000}, {productId:2, quantity:3, price:50000}], date:'2024-01-02'},
  {id:3, customerId:101, status:'pending', items:[{productId:2, quantity:2, price:50000}], date:'2024-01-03'}
]
*/

const orders_Q5 = [
  {id:1, customerId:101, status:'completed', items:[{productId:1, quantity:2, price:100000}], date:'2024-01-01'},
  {id:2, customerId:102, status:'completed', items:[{productId:1, quantity:1, price:100000}, {productId:2, quantity:3, price:50000}], date:'2024-01-02'},
  {id:3, customerId:101, status:'pending', items:[{productId:2, quantity:2, price:50000}], date:'2024-01-03'}
];

const analyzeOrdersWithMetrics = (orders) => {
  const groupedByCustomer = orders.reduce((acc, order) => {
    if(!acc[order.customerId]) acc[order.customerId] = [];
    acc[order.customerId].push(order);
    return acc;
  }, {})

  const revenuePerCustomer = Object.entries(groupedByCustomer).reduce((acc, [customerId, orders]) => {
    const totalRevenue = orders.reduce((acc, order) => {
      const totalRevenuePerProduct = Object.entries(order.items).reduce((acc, [index, item]) => {
        acc += item.price * item.quantity;
        return acc;
      }, 0);
      acc += totalRevenuePerProduct;
      return acc;
    }, 0)
    acc[customerId] = totalRevenue;
    return acc;
  }, {});

  const topCustomers = Object.entries(revenuePerCustomer)
  .sort((a, b) => b[1] - a[1]) 
  .slice(0, 3)             
  .map(([customerId, revenue]) => Number(customerId));


  const items = orders.flatMap(order => order.items);
  const groupedItems = items.reduce((acc, item) => {
    if(!acc[item.productId]) acc[item.productId] = 0;
    acc[item.productId] += item.quantity;
    return acc;
  },{});

  const bestSellingProduct = Object.entries(groupedItems).reduce((best, [productId, quantity]) => {
    if (quantity > best.quantity) {
      best = { productId, quantity };
    }
    return best;
  }, { productId: null, quantity: 0 });

  const statusBreakdown = orders.reduce((acc, order) => {
    if (order.status === 'completed') acc.completed++;
    if (order.status === 'pending') acc.pending++;
    if (order.status === 'cancelled') acc.cancelled++;
    return acc;
  }, {
    completed: 0,
    pending: 0,
    cancelled: 0
  })

  return{
    revenuePerCustomer: revenuePerCustomer,
    topCustomers: topCustomers,
    statusBreakdown: statusBreakdown,
    bestSellingProduct: bestSellingProduct.productId
  }
}

console.log(analyzeOrdersWithMetrics(orders_Q5));