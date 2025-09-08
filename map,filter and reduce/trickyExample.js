const data  = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 34 },
  { firstName: "Michael", lastName: "Johnson", age: 41 },
  { firstName: "Emily", lastName: "Davis", age: 25 },
  { firstName: "David", lastName: "Brown", age: 30 },
  { firstName: "Sara", lastName: "Lee", age: 28 } 
];

const ageCount = data.reduce((acc, person) => {
    console.log(acc,person)
    console.log(acc[person.age],"acc[person.age]")
    if(acc[person.age]){
        acc[person.age] = acc[person.age] + 1
    }
    else{
        acc[person.age] = 1
    }
  return acc;
}, {});

console.log(ageCount);

//Acc means that we initial as second argument

// acc[28] = 1 is equal to { 28: 1 }



// 1. Objects in JS are key–value maps

// In JavaScript, an object is basically a hash map (dictionary).
// That means it stores pairs of:

// key → value


// For example:

// let obj = {}
// obj["name"] = "John"
// obj["age"] = 30


// Now obj looks like:

// { name: "John", age: 30 }

// 2. Dot notation vs Bracket notation

// There are two ways to add or read properties:

// Dot notation:

// obj.age = 30


// Bracket notation:

// obj["age"] = 30


// Both mean:
// 👉 “create a key age inside the object and set its value to 30.”

// 3. Why acc[28] = 1 works

// When you write:

// acc[28] = 1


// Here’s what happens internally:

// JavaScript sees the [] notation → it expects an expression inside.

// It evaluates 28 → result is the number 28.

// JS converts that number to a string key: "28" (because object keys are always strings or symbols).

// It creates or updates a property with that key in the object.

// The object now looks like:

// { "28": 1 }


// When logged in console, numeric-like keys are shown as numbers:

// { 28: 1 }

// 4. Step-by-step mini demo
// let acc = {}

// acc[28] = 1   // creates key "28" with value 1
// console.log(acc) // { 28: 1 }

// acc[34] = 5   // creates key "34" with value 5
// console.log(acc) // { 28: 1, 34: 5 }

// console.log(acc["28"]) // 1
// console.log(acc[28])   // also 1 (number gets converted to string)


// ✅ So the magic is:

// [] lets you use any expression as a key (not just fixed names).

// Numbers like 28 get converted to "28" before being used as the property name.

// If the key doesn’t exist, JS dynamically creates it in the object.