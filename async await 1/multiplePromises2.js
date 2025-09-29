const p31 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 20000);
});

const p22 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved2");
  }, 40000);
});

async function myFunc1() {
  console.log("Namaste Javascript");
  const res = await p31;
  console.log({ res });
  const res1 = await p22;
  console.log({ res1 });
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


//Difference between multiplePromises1.js and multiplePromises2.js is the time taken to resolve the promises.
//  In multiplePromises1.js, p2 resolves first and then p3. In multiplePromises2.js, p3 resolves first and then p2.
// In both the cases, the output will be same as we are using await keyword which makes the code wait for the promise to 
// resolve before moving to the next line of code. 
//The only difference is the time taken to execute the code.
// In multiplePromises1.js, the total time taken to execute the code will be 10 seconds.
// In multiplePromises2.js, the total time taken to execute the code for p31 as 5000 but for p22 as 10000, After 5ms the p31 is printed.
//then after 10ms the p22 is printed. So the total time taken to execute the code will be 10 seconds.


// Why myFunc1() leaves the Call Stack at await

// JavaScript is single-threaded, meaning it has one Call Stack only.

// When the interpreter hits an await, execution of myFunc1() is paused until the awaited promise settles.

// If myFunc1() were to stay in the Call Stack during that wait, the thread would be blocked for 5–10 seconds. Nothing else (like user interactions, other callbacks, rendering, etc.) could run.

// To prevent blocking, JS suspends myFunc1(), pops it off the Call Stack, and allows other events to run.

// 🔹 What happens next

// await p31 is reached.

// myFunc1() is suspended, removed from the Call Stack.

// Meanwhile, the promise p31 is running in Web APIs (setTimeout).

// After 5s, p31 resolves.

// The resolution handler is pushed to the Microtask Queue.

// The Event Loop puts myFunc1() back into the Call Stack, resuming execution after the await.

// Execution continues until the next await p22.

// Again, myFunc1() is suspended and removed.

// After 10s total, p22 resolves, and the process repeats.

// 🔹 Why does myFunc1() “move out” of the Call Stack?

// Because:

// JS must free the Call Stack so it can handle other tasks (timers, user events, rendering).

// The await essentially splits the function into chunks:

// “Run until the first await.”

// “Then resume when the promise is done.”

// These chunks are scheduled as microtasks to be pushed back onto the Call Stack later.

// 💡 In short:
// The async function isn’t “gone.” It’s just paused and waiting for the Event Loop to schedule it back in.


