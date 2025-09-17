function createOrder(cart, callback) {
  console.log("Order created for:", cart);
  setTimeout(() => {
    callback("order123"); // pass orderId
  }, 1000);
}

function proceedToPayment(orderId, callback) {
  console.log("Proceeding to payment for:", orderId);
  setTimeout(() => {
    callback("paymentSuccess");
  }, 1000);
}

function showOrderSummary(paymentInfo, callback) {
  console.log("Showing order summary for:", paymentInfo);
  setTimeout(() => {
    callback("summaryDisplayed");
  }, 1000);
}

function updateWallet(summary, callback) {
  console.log("Updating wallet after:", summary);
  setTimeout(() => {
    callback("walletUpdated");
  }, 1000);
}

// ⚠️ Callback Hell (deep nesting)
createOrder(["shoes", "pants"], (orderId) => {
  proceedToPayment(orderId, (paymentInfo) => {
    showOrderSummary(paymentInfo, (summary) => {
      updateWallet(summary, (walletStatus) => {
        console.log("All done:", walletStatus);
      });
    });
  });
});
