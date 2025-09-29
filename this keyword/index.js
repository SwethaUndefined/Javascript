console.log(this);// In the global scope, this refers to the global object (window in browsers, global in Node.js)

//Inside the function, this refers to the global object (window in browsers, global in Node.js)
function showThis() {
  console.log(this);// In non-strict mode, this will refer to the global object
}
showThis();
