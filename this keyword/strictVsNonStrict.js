// // 🔹 Non-strict mode

// // If you call a plain function without a receiver:

// function f() {
//   console.log(this);
// }
// f(); // non-strict


// // 👉 this is automatically replaced with the global object:

// // Browser → window

// // Node.js → global

// // So in non-strict mode:

// // undefined or null passed as this → coerced to the global object.

// // Example:

// f.call(null);  // 👉 window (browser)
// f.call(undefined); // 👉 window



// ------------------------------------------------------------------------------------------------------------------------------------------------------------





// 🔹 Strict mode

// If you do the same in strict mode:

"use strict";
function f1() {
  console.log(this);
}
// f1();


// 👉 this stays as undefined.
// It is not replaced with the global object anymore.

// And:

f1.call(null);      // 👉 null (not converted)
f1.call(undefined); // 👉 undefined

// ✅ Summary
// Context	Non-strict mode	Strict mode
// Plain function call	this → global object (window)	this → undefined
// .call(null) / .call(undefined)	this → global object	this → null / undefined (unchanged)

// So:

// Non-strict: JS “replaces” this with the global object if it’s null/undefined.

// Strict: JS keeps this as undefined (or null if explicitly passed).






