// Simulate async API call to create order
function createOrder(order, callback) {
  setTimeout(() => {
    console.log("Order created:", order);
    callback(order.id);
  }, 1000);
}

// Simulate async API call to process payment
function proceedToPayment(orderId, callback) {
  setTimeout(() => {
    console.log("Payment processed for order:", orderId);
    callback(orderId);
  }, 1000);
}

// Simulate async API call to update wallet
function updateWallet(orderId, amount, callback) {
  setTimeout(() => {
    console.log(`Wallet updated by ₹${amount} for order:`, orderId);
    callback(orderId);
  }, 1000);
}

// Simulate async API call to show order summary
function showOrderSummary(orderId, callback) {
  setTimeout(() => {
    console.log("Order Summary displayed for order:", orderId);
    callback("Done");
  }, 1000);
}

// Using callback hell
const order = { id: 101, item: "Laptop", price: 50000 };

createOrder(order, function(orderId) {
  proceedToPayment(orderId, function(orderId) {
    updateWallet(orderId, order.price, function(orderId) {
      showOrderSummary(orderId, function(message) {
        console.log("All steps completed:", message);
      });
    });
  });
});





// ⚡ What is Inversion of Control in callbacks?

// When you pass a callback to another function (like an API or library), you’re handing over control of when and how your code runs to that other function.

// If that function forgets to call your callback, your code never runs.

// If it calls it multiple times, you get unexpected results.

// If it throws an error before calling your callback, your logic breaks.

// This is called Inversion of Control because you’re no longer in control of your code execution flow — the library or API is.

// ⚡ Example with your flow:

// createOrder → proceedToPayment → updateWallet → showOrderSummary

// Here’s where Inversion of Control comes in:

// function createOrder(order, callback) {
//   setTimeout(() => {
//     console.log("Order created:", order);

//     // PROBLEM: what if the API dev calls callback twice by mistake?
//     callback(order.id);
//     callback(order.id);  // <-- wrong, but you can't control it
//   }, 1000);
// }

// function proceedToPayment(orderId, callback) {
//   setTimeout(() => {
//     console.log("Payment processed for order:", orderId);
//     callback(orderId);
//   }, 1000);
// }

// function updateWallet(orderId, amount, callback) {
//   setTimeout(() => {
//     console.log(`Wallet updated by ₹${amount} for order:`, orderId);

//     // PROBLEM: what if they forget to call callback?
//     // callback(orderId);  // <-- missing
//   }, 1000);
// }

// function showOrderSummary(orderId, callback) {
//   setTimeout(() => {
//     console.log("Order Summary displayed for order:", orderId);
//     callback("Done");
//   }, 1000);
// }

// // Usage
// const order = { id: 101, item: "Laptop", price: 50000 };

// createOrder(order, function(orderId) {
//   proceedToPayment(orderId, function(orderId) {
//     updateWallet(orderId, order.price, function(orderId) {
//       showOrderSummary(orderId, function(message) {
//         console.log("All steps completed:", message);
//       });
//     });
//   });
// });

// ⚠️ What could go wrong here:

// createOrder called the callback twice → Payment happens twice.

// updateWallet forgot to call the callback → The whole chain stops, and showOrderSummary never runs.

// You had no control over this because you gave away control of execution when you passed your callbacks.
// That’s Inversion of Control.

// 👉 This is why Promises were introduced — they give control back to you.
// Instead of trusting someone else to call your function, you get an object (a Promise) that you can .then() or await.