// 🌍 1. Non-strict mode (the old days)

// When JavaScript was first created (mid-90s), it was meant to be forgiving so beginners didn’t get errors.

// So the rule was:

// If you call a function without a receiver (f()), and this is not explicitly set → JavaScript silently substitutes the global object (window in browsers).

// This way, code like this wouldn’t break:

function foo() {
  this.value = 10; // 👈 attaches to window
  this.length = 20; // 👈 attaches to window
}
foo();
console.log(window.value); // 10
console.log(window.length); // 20 (not the number of arguments! but actual glabal value is 0)


// 👉 This was convenient but dangerous, because:

// It could accidentally pollute global scope.

// Bugs were hard to catch since no error was thrown.

// ⚠️ 2. Problems with that approach

// Example:

function doSomething() {
  console.log(this.username);
}
doSomething(); // 👈 works in sloppy mode → tries window.username


// If you forget to bind this, JS doesn’t complain — it just defaults to window.
// That might hide bugs, because you think this refers to your object, but it doesn’t.

// 🚀 3. Strict mode to the rescue

// ECMAScript 5 (2009) introduced "use strict"; to fix silent errors.

// In strict mode:

// this stays as it is.

// If you call a standalone function (f()), this becomes undefined instead of auto-defaulting to window.

// Example:

"use strict";
function foo1() {
  console.log(this); 
}
foo1(); // undefined ❌ (instead of window)


// 👉 Now you immediately see the bug, instead of silently writing to window.

// ✅ Summary

// Non-strict: JavaScript was designed to be “helpful,” so it replaces this with the global object when missing.

// Strict: JavaScript became stricter for reliability, so it keeps this as undefined when not bound → forcing developers to explicitly manage this.