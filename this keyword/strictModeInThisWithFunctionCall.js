'use strict';

function x(){
    console.log(this);
}
x()//undefined in strict mode
window.x(); //window in browsers


// Why?

// x();

// You’re calling the function directly, with no object before it.

// In strict mode, this is not auto-replaced with the global object.

// 👉 So this = undefined.

// window.x();

// Here you’re calling x as a method of the window object.

// When a function is called as object.method(), this inside the method is always set to that object.

// 👉 So this = window (because x is being called through window).



// 📌 Simple rule:

// Direct call (f()) in strict mode → this = undefined.
// Object call (obj.f()) → this = obj (strict or non-strict, doesn’t matter).