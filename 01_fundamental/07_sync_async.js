// SYNCHRONOUS CODE

console.log('Start');

const add = (a, b) => {
  return a + b;
}

console.log(add(5, 3));

// ASYNCHRONOUS CODE BASICS 
// console.log('Before setTimeout');

// setTimeout(() => {
//   console.log('Inside setTimeout - 2 second later')
// }, 2000);

// console.log('After setTimeout');

// Callback function
function fetchData(callback) {
  console.log('Fetching data...');

  setTimeout(() => {
    const data = { id: 1, name: 'John', from: 'Callback Func'};
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log('Data received:', data);
}

fetchData(handleData);

// Callback with error handling
function fetchDataWithError(callback, errorCallback) {
  setTimeout(() => {
    const isError = Math.random() > 0.5;

    if (isError) {
      errorCallback('Failed to fetch data')
    } else {
      callback({ id: 1, name: 'John', from: 'Callback with error Fun'});
    }
  }, 1000)
}

fetchDataWithError(
  (data) => console.log('Succes:', data),
  (error) => console.log('Error:', error)
)

// Promises
const fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isError = Math.random() > 0.5
    if (isError) {
      reject('Failed fetch data');
    } else {
      resolve({
        id: 1,
        name: 'bram'
      });
    }
  }, 1000)
});

fetchDataPromise
  .then((data) => console.log("Success:", data))
  .catch((error) => console.log("Error: ", error))
  .finally(() => console.log("End"))

// ASYNC AWAIT
async function processData() {
  console.log('1')

  try {
    const result = await fetchDataPromise();
    console.log('2 : ', result);
    console.log('3 continue')
  } catch (error) {
    console.log('2 error catced');
  } finally {
    console.log('4 done');
  }
}