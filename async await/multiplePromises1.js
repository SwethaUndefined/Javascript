const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved2");
  }, 5000);
});

async function myFunc1() {
  console.log("Namaste");

  const res = await p2;
  console.log({ res });
  console.log("Hello2");

  const res1 = await p3;
  console.log({ res1 });
  console.log("Hello1");
  console.log("Javascript");
}
myFunc1();


// Output:
// Namaste
// Hello2
// multiplePromises1.js:17 {res: 'Promise resolved2'}
// multiplePromises1.js:18 Hello2
// multiplePromises1.js:21 {res1: 'Promise resolved'}
// multiplePromises1.js:22 Hello1
// multiplePromises1.js:23 Javascript