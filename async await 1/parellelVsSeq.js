// -------------------------------
// Case 1: Both promises created before awaiting (runs in parallel)
// -------------------------------
const p1 = new Promise((resolve) => {
  console.log("p1 started at 0s"); // starts immediately
  setTimeout(() => {
    console.log("p1 resolved at 5s"); // finishes after 5s
    resolve();
  }, 5000);
});

const p2 = new Promise((resolve) => {
  console.log("p2 started at 0s"); // also starts immediately
  setTimeout(() => {
    console.log("p2 resolved at 10s"); // finishes after 10s
    resolve();
  }, 10000);
});

async function myFuncParallel() {
  console.log("Awaiting p1...");
  await p1; // waits for p1 to finish (5s)

  console.log("Awaiting p2...");
  await p2; // but p2 has already been running in the background for 5s

  console.log("All done (parallel)!");
}
myFuncParallel();

/*
Timeline explanation for Case 1:
t=0s → p1 started, p2 started
t=5s → p1 resolved, now we "await p2"
       (but p2 has already been running 5s, so only 5s left)
t=10s → p2 resolved
✅ Total time = 10s
*/


// -------------------------------
// Case 2: Second promise created after the first resolves (runs sequentially)
// -------------------------------
async function myFuncSequential() {
  console.log("Creating p1...");
  const p1 = new Promise((resolve) => {
    console.log("p1 started at 0s");
    setTimeout(() => {
      console.log("p1 resolved at 5s");
      resolve();
    }, 5000);
  });

  console.log("Awaiting p1...");
  await p1; // wait full 5s

  console.log("Creating p2...");
  const p2 = new Promise((resolve) => {
    console.log("p2 started at 5s"); // starts only after p1 finishes
    setTimeout(() => {
      console.log("p2 resolved at 15s");
      resolve();
    }, 10000);
  });

  console.log("Awaiting p2...");
  await p2;

  console.log("All done (sequential)!");
}
myFuncSequential();

/*
Timeline explanation for Case 2:
t=0s → p1 started
t=5s → p1 resolved, only now p2 is created
t=5s → p2 started
t=15s → p2 resolved
✅ Total time = 15s
*/

// 🔑 Key Takeaway

// Case 1 (parallel): Both promises start immediately at t=0. Even though we await them sequentially, the second one has already been running in the background.
// 👉 Total time = max(p1, p2) = 10s

// Case 2 (sequential): The second promise is only created after the first resolves, so their durations add up.
// 👉 Total time = p1 + p2 = 15s