//Without closures
// let count = 0;
// document.getElementById("click-action").addEventListener('click',function xyz(){
//     console.log("Button clicked",++count)
// });

//with closures
// function attachEventListeners(){
//     let count = 0;
//     document.getElementById("click-action").addEventListener('click',function xyz(){
//         console.log("Button clicked",++count)
//     });
// }
// attachEventListeners()

//Remove EventListeners and Garbage Collection:

// ✔ Every time the button is clicked, the function (xyz) will execute.
// ❌ BUT if you remove the button from the DOM (like in Single Page Applications or Modals), the event listener still exists in memory (even after button is removed).
// ❌ This is called a Memory Leak — the browser still remembers the event listener but has no element to attach it to. 😨


// ✅ What is a Memory Leak? (Simple Explanation)
// 👉 Imagine you hire a person to turn on/off the light 💡.
// 👉 Now you fire the person but forget to tell him to stop working.
// 👉 That person is still standing at your door waiting for you (even though you don't need him anymore).

// In JavaScript:

// The person = Event Listener
// The door = Button (which is removed)
// Now the listener is just wasting memory waiting for a click that will never come. 🚨


// ✅ What Happens if You Don’t Remove Event Listener?
// 👉 🚨 Memory Leak:

// Even after you remove the button (DOM element), the event listener is still held in memory.
// This consumes browser memory and can slow down your application.
// 👉 🚨 Unintended Execution:

// Even if the button is removed and added back, the listener may trigger multiple times.
// Example: If you click the button 3 times, the function might execute 3 times per click.



function attachEventListeners() {
    let count = 0;

    function xyz() {
        console.log("Button clicked", ++count);

        if (count >= 5) {  // Remove after 5 clicks
            btn.removeEventListener('click', xyz);
            console.log("Event listener removed after 5 clicks!");
        }
    }

    let btn = document.getElementById("click-action");
    btn.addEventListener('click', xyz);
}

attachEventListeners();
