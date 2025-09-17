const p18 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 rejected');
    }, 2000);
});

const p19 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 resolved');
    }, 1000);
});
const p20 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1500);

});
// Example of Promise.race
Promise.race([p18, p19, p20]).then((values) => {
    console.log('Promise.race resolved with values:', values);
}).catch((error) => {
    console.error('Promise.race rejected with error:', error);
});

