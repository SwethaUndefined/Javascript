// Create a promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Change to false to simulate error

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 2000); // Simulate async operation
});

// Consume the promise
myPromise
  .then((result) => {
    console.log(result); // "Promise resolved successfully!"
  })
  .catch((error) => {
    console.error(error); // "Promise rejected!"
  });
