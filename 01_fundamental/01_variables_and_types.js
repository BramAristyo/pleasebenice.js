// VARIABLE DECLARATION 

const companyName = "TechIn";
let email = "user@example.com";

// PRIMITIVE TYPES

// string
const productName = "Laptop";
const description = "High performance device";
console.log(typeof productName);

// number
const price = 800000;
const discount = 20.5;
const intDiscount = parseInt(discount);
console.log(typeof intDiscount);

// boolean
const isAvailable = true;
const isExpired = false;
console.log(typeof isAvailable);

// array
let productList = [
  'Laptop',
  'Mouse',
  'Keyboard'
];

console.log(productList[0]);
console.log(typeof productList);
console.log(productList.length);

// array operation
productList.push('Monitor'); // add element
console.log(productList);

productList.pop(); // remove element
console.log(productList);

productList.unshift('Headset'); // add at beginning
console.log(productList);

productList.shift(); // remove from beginning
console.log(productList);

const indexMouse = productList.indexOf('Mouse'); // find index
console.log(indexMouse);

const hasKeyboard = productList.includes('Keyboard'); // check if contains
console.log(hasKeyboard);

const sliced = productList.slice(0, 2); // slice copy portions
console.log(sliced);

const upperCaseList = productList.map(item => item.toUpperCase() + ' GAMING'); // map - transform each element
console.log(upperCaseList)

const filtered = productList.filter(item => item.length > 5); // filter - get matching elements
console.log(filtered);

const joinedString = productList.join(' -- '); // join - combine array to string
console.log(joinedString);

// object
let productDetails = {
  'id': 1001,
  'name': 'Gaming Laptop',
  'brand': 'Lenovo',
  'price': 1500000,
  'inStock': true,
  'specs': {
    'processor': 'intel i9',
    'ram': '32GB',
    'storage': '1TB SSD'
  }
};

//object operations
productDetails.warranty = '2 years'; // add property
console.log(productDetails);

productDetails.price = 1400000; // update property
console.log(productDetails);

delete productDetails.warranty; // delete property
console.log(productDetails);

const objectKeys = Object.keys(productDetails); // get all keys
console.log(objectKeys);

const hasPrice = productDetails.hasOwnProperty('price'); // check if propery exist
console.log(hasPrice);

// merge objects
const additionalInfo = {
  'color': 'black',
  'weight': 1.8
}

const mergedObject = Object.assign(productDetails, additionalInfo);
console.log(mergedObject);

//spread operator
const spreadMerge = { ...productDetails, ...additionalInfo};
console.log(spreadMerge);


console.log(productDetails);
console.log(productDetails.name);
console.log(productDetails['specs'].ram);
console.log(typeof productDetails);

