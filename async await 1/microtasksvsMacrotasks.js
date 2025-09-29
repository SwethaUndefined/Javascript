// 1. What They Are
// Macrotasks (Task queue)

// Scheduled by things like:

// setTimeout

// setInterval

// setImmediate (Node.js)

// I/O events

// Executed after the current call stack is empty.

// Runs one at a time, in order they were queued.

// Microtasks (Microtask queue)

// Scheduled by things like:

// Promise.then / Promise.catch / Promise.finally

// queueMicrotask()

// MutationObserver

// Executed immediately after the current call stack finishes, before any macrotasks.

// Runs all microtasks in the queue before moving to the next macrotask.

// 🔹 2. Event Loop Order

// Execute all synchronous code in the call stack.

// Execute all microtasks in the microtask queue.

// Execute one macrotask from the macrotask queue.

// Repeat steps 2-3 indefinitely.

// 🔹 3. Example
// console.log("sync start");

// setTimeout(() => console.log("macrotask: timeout"), 0);

// Promise.resolve().then(() => console.log("microtask: promise"));

// console.log("sync end");


// Output:

// sync start       // synchronous
// sync end         // synchronous
// microtask: promise  // microtask runs immediately after stack
// macrotask: timeout  // macrotask runs after microtasks


// ✅ Notice how the Promise microtask runs before the setTimeout even though both were scheduled “at the same time.”

// 🔹 4. Longer-running Promise Example
// console.log("start");

// new Promise((resolve) => setTimeout(resolve, 3000))
//   .then(() => console.log("microtask after 3s"));

// setTimeout(() => console.log("macrotask after 0s"), 0);

// console.log("end");


// Timeline:

// t=0s → start, end
// t=0s → macrotask scheduled, promise scheduled
// t=3s → promise resolves → microtask runs immediately → "microtask after 3s"
// t=3s → event loop checks macrotask queue → "macrotask after 0s"


// ✅ Even though the macrotask delay was 0ms, it executes after the microtask created by the resolved Promise.

// 🔹 Key Takeaways

// Microtasks run first after the call stack is empty.

// Macrotasks run later, one at a time.

// Promises (and queueMicrotask) always have higher priority than timers.

// Microtasks can starve macrotasks if continuously queued (because the loop keeps running microtasks first).


