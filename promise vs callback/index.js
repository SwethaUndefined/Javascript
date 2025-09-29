// 🍽 Callback (Function Pointer)

// Imagine you go to a restaurant:

// You tell the waiter: “When my food is ready, call me.”

// You give the waiter your phone number (that’s the function pointer).

// When the food is ready, the waiter calls you directly.

// 👉 That’s a callback:

// You hand over a function reference (phone number).

// The waiter (code) executes it when ready.

// But if you order 3 dishes, you’ll get 3 separate phone calls (messy).

// 🍽 Promise (Message Box)

// Now imagine a smarter restaurant:

// You order food.

// Instead of giving your number, the restaurant gives you a ticket (promise).

// This ticket doesn’t have the food yet, but it says: “We promise to give you your meal later.”

// You can:

// Wait at the table (await)

// Or attach a reminder (.then()) to be notified when the food is ready.

// When the kitchen finishes, they put the food (message) in your ticket.

// You collect it at your convenience.

// 👉 That’s a promise:

// You don’t give a function pointer.

// Instead, you receive a promise (ticket/message box).

// When the food is ready, the ticket is filled, and you can read it.






// | Concept          | Callback                                 | Promise                        |
// | ---------------- | ---------------------------------------- | ------------------------------ |
// | What you give    | Your **phone number** (function pointer) | You get a **ticket** (promise) |
// | Who controls?    | Waiter calls you                         | You check the ticket           |
// | Style            | Push (they call you)                     | Pull (you read the message)    |
// | Multiple events? | Yes (many calls)                         | No (ticket filled once)        |




