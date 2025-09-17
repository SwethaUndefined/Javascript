const p15 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 1 rejected');
    }, 2000);
});

const p16 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 1000);
});
const p17 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1500);

});
// Example of Promise.allSettled
Promise.allSettled([p15, p16, p17]).then((values) => {
    console.log('Promise.allSettled resolved with values:', values);
}).catch((error) => {
    console.error('Promise.allSettled rejected with error:', error);
});

//Output will be:
// Promise.race rejected with error: Promise 2 resolved