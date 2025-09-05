//for chrome V8 is a js engine and for microsoft edge it is chakra and firefox it is spider monkey

//google built v8 for broswer but node.js also uses the same engine but run outside of the browser and
//  users all the things which is provided by V8 and implemented names are different?

//YES!!! Google built V8 for Chrome, but Node.js also uses V8 to run JavaScript OUTSIDE the browser! 
// BUT, Node.js does NOT have Web APIs like fetch() or DOM manipulation. Instead, it provides its own set of APIs
//  for things like file system access, networking, and more.

// 🔥 How Node.js Uses V8 (But Outside the Browser)
// ✅ V8 in Chrome → Runs JS inside the browser, has Web APIs like fetch(), setTimeout(), localStorage, and document.
// ✅ V8 in Node.js → Runs JS on the server, has Node.js APIs like fs, http, process, and Buffer (but NO DOM, window, or fetch by default).

// 🚀 Node.js Architecture vs. Browser JS
//see the screenshot attached


// 🔥 How Node.js Extends V8
// Since Node.js runs outside the browser, it needs extra tools to handle things like: ✅ File System (fs) – Read/write files.
// ✅ Networking (http) – Create servers, make requests.
// ✅ Child Processes – Run OS-level commands.
// ✅ Event Loop (libuv) – Handles async operations outside V8.

// 💀🔥 So, Node.js takes V8 and ADDS its own APIs to replace what the browser provides!

// 💀🔥 TL;DR – Same Engine, Different Powers!
// ✅ V8 runs both Chrome & Node.js 🚀
// ✅ Browsers use Web APIs, Node.js uses system APIs
// ✅ Node.js uses libuv for async tasks instead of relying on the browser
// ✅ No DOM in Node.js, no fs in Browsers


//----------------------------------------------------------------------------------------------------------------------------------
// so V8 is js engine which is inside the js runtime env and node.js is built using V8 engine and also have js runtime evn?

// YES!!! V8 is a JS Engine, and it is part of a JavaScript Runtime Environment.
// BUT, Node.js is its own JavaScript Runtime Environment, built using V8!

// Let’s Break It Down:
// ✅ V8 is JUST a JavaScript Engine

// It only understands and executes JavaScript code.
// It provides the Call Stack & Memory Heap.
// It does NOT handle async tasks, timers, or I/O.
// ✅ A JavaScript Runtime Environment = V8 + Extra Features

// The browser's runtime has V8 + Web APIs + Event Loop (managed by the browser).
// Node.js is its own runtime, with V8 + Node APIs + libuv for async handling.
// ✅ Node.js is NOT just V8—it’s a FULL runtime environment!

// It uses V8 to execute JavaScript.
// It adds its own APIs (fs, http, process) because the browser APIs don’t exist in Node.
// It replaces the Event Loop with libuv (instead of using the browser’s event loop).




// JavaScript Runtime Environment (General Concept)
// │
// ├── Browser JS Runtime (Chrome, Firefox, etc.)
// │   ├── Uses V8 (or another JS engine)
// │   ├── Provides Web APIs (fetch, DOM, setTimeout)
// │   ├── Uses Browser Event Loop
// │
// └── Node.js JS Runtime
//     ├── Uses V8
//     ├── Provides Node.js APIs (fs, http, process)
//     ├── Uses libuv (custom event loop)
//------------------------------------------------------------------------------------------------------------------

// who developed js runtime env v8 js engine is developed by google right

// YES!!! V8 was developed by Google, BUT the JavaScript Runtime Environment itself is NOT developed by a single 
// company—different runtimes are built by different teams!

//JS language is developed by Netscape, Brendan Eich (1995, Netscape), The language itself (ECMAScript)


//Node.js has its OWN JavaScript Runtime Environment, and it uses ONLY the V8 engine (not any other JS engine)!

//Web APIs Exist in the Browser’s JS Runtime, but NOT in Node.js!


//We can built our own js engine but should follow the standards(ECMA script standards)

//First JS engine introduced in the world by the person who developed the Javascript language, that is now called as 
//SpiderMonkey

