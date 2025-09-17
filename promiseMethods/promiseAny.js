const p21 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 1 rejected');
    }, 2000);
});

const p22 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 1000);
});
const p23 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1500);

});
// Example of Promise.allSettled
Promise.any([p21, p22, p23]).then((values) => {
    console.log('Promise.any resolved with values:', values);
}).catch((error) => {
    console.error('Promise.any rejected with error:', error);
});

//Output will be:
// Promise.any resolved with values: Promise 2 resolved


//If all promises are rejected then it will go to catch block
//Output will be:
// Promise.any rejected with error: AggregateError: All promises were rejected


const p24 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 1 rejected');
    }, 2000);
});

const p25 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 rejected');
    }, 1000);
});
const p26 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 rejected');
    }, 1500);

});
// Example of Promise.allSettled
Promise.any([p24, p25, p26]).then((values) => {
    console.log('Promise.any resolved with values:', values);
}).catch((error) => {
    console.error('Promise.any rejected with error:', error);
    console.log(error.errors); // Array of all rejection reasons
});

//AggregateError is a special error object in JavaScript that represents multiple errors wrapped together(Array of all rejection reasons).