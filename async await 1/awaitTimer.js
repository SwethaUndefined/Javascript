// Case A: p1 = 5000ms, p2 = 10000ms
// // p1 -> 5s
// // p2 -> 10s


// t=0s → p1 starts, p2 starts

// t=5s → p1 resolves, now we await p2
// (but p2 has already been running for 5s, so 5s left)

// t=10s → p2 resolves

// ✅ Total time = 10s (max of both)

// Case B: p1 = 10000ms, p2 = 5000ms
// // p1 -> 10s
// // p2 -> 5s


// t=0s → p1 starts, p2 starts

// t=5s → p2 resolves (but we are still awaiting p1)

// t=10s → p1 resolves, then we move to await p2
// (but p2 is already done, so it returns instantly)

// ✅ Total time = 10s (max of both again)

// 🔑 Rule of Thumb (for your case):

// When you create both promises before await, they start immediately in parallel.
// So the total time = the slower one’s duration (max of both), not the sum.

// 👉 If you want them to be sequential (additive, e.g., 10s + 5s = 15s), then you must create p2 after awaiting p1.





// ⏱ Case A: p1 = 5s, p2 = 10s (parallel start)
// Timeline (seconds) → 0----1----2----3----4----5----6----7----8----9----10

// p1: [===== 5s =====]
// p2: [========== 10s ==========]

// - p1 resolves at 5s
// - p2 resolves at 10s
// ✅ Total = 10s (the longer one)

// ⏱ Case B: p1 = 10s, p2 = 5s (parallel start)
// Timeline (seconds) → 0----1----2----3----4----5----6----7----8----9----10

// p1: [========== 10s ==========]
// p2: [===== 5s =====]

// - p2 resolves at 5s (done early, ignored until p1 finishes)
// - p1 resolves at 10s
// ✅ Total = 10s (the longer one)

// ⏱ Case C: Sequential execution (p2 created after p1)
// const p1 = new Promise((resolve) => setTimeout(resolve, 5000)); // 5s
// await p1;
// const p2 = new Promise((resolve) => setTimeout(resolve, 10000)); // 10s
// await p2;

// Timeline (seconds) → 0----1----2----3----4----5----6----7----8----9----10----11...15

// p1: [===== 5s =====]
// p2:                [========== 10s ==========]

// - p1 resolves at 5s
// - p2 starts at 5s and resolves at 15s
// ✅ Total = 15s (sum of both, because no overlap)


// 👉 So:

// Parallel start (your first code): total time = max(p1, p2)

// Sequential (second code): total time = p1 + p2