// Call, bind, apply are sharing methods(borrowing methods)

const student = {
    name :'Swetha',
    printName : function(){
        console.log(this.name);
    }
}
student.printName(); // Swetha

const student2 = {
    name : 'John'
}
// student2.printName(); // TypeError: student2.printName is not a function

// We can borrow the method from student object using call, bind, apply
student.printName.call(student2); // John
// Here we are calling the printName method of student object and setting the this value to student2 object using call method

const sum= function(city,state,country) {
    return this.firstName +" "+ this.lastName + " from " + city;
  }
const obj = {
  firstName: "Swetha",
  lastName: "Ragunathan",
};

// const fn = obj.sum;  // copying the function
// console.log(fn());    // ❌ NaN (or error in strict mode)

// Why? Because fn() is a plain function call.

// this is now undefined (strict mode) or window/global (non-strict).

// So this.a and this.b don’t exist → result is wrong.

// 2️⃣ Fix with .call()
console.log(sum.call(obj,"Trichy"));
//-----------------------------------------------------------------------------------------------------------------------


// 3️⃣ Fix with .apply()
console.log(sum.apply(obj,["Trichy","Tamil Nadu","India"])); // Swetha Ragunathan from Trichy
// Here we are passing the arguments as an array

//-----------------------------------------------------------------------------------------------------------------------

// 🔹 .call()

// Calls the function immediately with a given this and arguments.

// Syntax:

// func.call(thisArg, arg1, arg2, ...)

// 🔹 .bind()

// Does not call the function immediately.

// Instead, it returns a new function with this permanently set to the given object.

// You can call that new function later.

// Syntax:

// const newFunc = func.bind(thisArg, arg1, arg2, ...)
// newFunc(); // call later

// Example
const obj2 = { a: 10, b: 20 };

function sum1(x, y) {
  return this.a + this.b + x + y;
}

// Using call → executes immediately
console.log(sum1.call(obj2, 1, 2)); 
// 👉 33

// Using bind → returns a new function
const boundSum = sum1.bind(obj2, 1, 2);
console.log(boundSum()); 
// 👉 33 (but only runs when we call it)



// | Feature        | `.call()`                      | `.bind()`                                |
// | -------------- | ------------------------------ | ---------------------------------------- |
// | Execution      | Calls function **immediately** | Returns a **new function** (not called)  |
// | `this` binding | Temporary for that one call    | Permanent for the returned function      |
// | Arguments      | Passed directly                | Can be preset (like partial application) |
