function greet() {
  console.log(this.name);
}

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

// call
greet.call(user1); // Alice
greet.call(user2); // Bob

// bind
const greetAlice = greet.bind(user1);
greetAlice();          // Alice
greetAlice.call(user2); // still Alice ❗

//            .call()                           .bind()
//  ┌──────────────────────────┐     ┌──────────────────────────┐
//  | greet.call(user1)        |     | greet.bind(user1)        |
//  | this → user1             |     | returns new function     |
//  | prints: "Alice"          |     | this fixed = user1       |
//  └──────────────────────────┘     └───────────────┬──────────┘
//                                                    │
//  ┌──────────────────────────┐                      │
//  | greet.call(user2)        |                      │
//  | this → user2             |                      │
//  | prints: "Bob"            |                      │
//  └──────────────────────────┘                      │
//                                                    │
//                                      ┌─────────────▼───────────────┐
//                                      | greetAlice()                |
//                                      | this always → user1 (Alice) |
//                                      | even if call(user2)         |
//                                      └─────────────────────────────┘


//Instead of calling the function immediately, bind returns a new function which will be invoked later.
