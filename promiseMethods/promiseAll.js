const p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 2000);
});

const p10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 1000);
});
const p11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1500);

});
// Example of Promise.all
Promise.all([p9, p10, p11]).then((values) => {
    console.log('Promise.all resolved with values:', values);
}).catch((error) => {
    console.error('Promise.all rejected with error:', error);
});

//This will resoleve after 3seconds, if if i make any of the promise to reject it will go to catch block

const p12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000);
});

const p13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
});
const p14 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 resolved');
    }, 1000);

});
// Example of Promise.all
Promise.all([p12, p13, p14]).then((values) => {
    console.log('Promise.all resolved with values:', values);
}).catch((error) => {
    console.error('Promise.all rejected with error:', error);
});

//this will throw an error after 1 second, and not wait for other promises to resolve
//output: Promise.all rejected with error: Promise 3 resolved
//If no catch then it will called as "Uncaught error" must handle using catch