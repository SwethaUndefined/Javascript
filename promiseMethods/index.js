// In JavaScript, Promise methods are built-in utilities for working with multiple promises. Let’s go step by step.

// 🔹 Common Promise Methods
// 1. Promise.all(promises)

// Waits for all promises to be resolved.

// If any promise rejects, the whole thing rejects.

const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");
const p3 = Promise.resolve("Three");

Promise.all([p1, p2, p3])
  .then(values => console.log(values))   // ["One", "Two", "Three"]
  .catch(err => console.log("Error:", err));

// 2. Promise.allSettled(promises)

// Waits for all promises to finish (either resolved or rejected).

// Returns an array of objects { status, value/reason }.

const p4 = Promise.resolve("Success");
const p5 = Promise.reject("Failed");

Promise.allSettled([p4, p5]).then(results => console.log(results));
/* Output:
[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Failed" }
]
*/

// 3. Promise.race(promises)

// Returns the result of the first promise that settles (resolved or rejected).

const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 500));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 1000));

Promise.race([fast, slow]).then(console.log); // "Fast"

// 4. Promise.any(promises)

// Returns the first fulfilled promise.

// Ignores rejections (unless all reject).

const p6 = Promise.reject("Fail 1");
const p7 = Promise.reject("Fail 2");
const p8 = Promise.resolve("Success!");

Promise.any([p6, p7, p8]).then(console.log); // "Success!"

// 5. Promise.resolve(value)

// Creates a promise that is already resolved.

Promise.resolve(42).then(console.log); // 42

// 6. Promise.reject(error)

// Creates a promise that is already rejected.

Promise.reject("Oops!").catch(console.log); // "Oops!"

// 🔑 Summary
// Method	Behavior
// Promise.all	Waits for all, fails fast if one rejects
// Promise.allSettled	Waits for all, reports both success & fail
// Promise.race	First settled (success or fail) wins
// Promise.any	First success wins (ignores rejections)
// Promise.resolve	Creates an immediately resolved promise
// Promise.reject	Creates an immediately rejected promise