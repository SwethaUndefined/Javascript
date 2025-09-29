async function getData() {
  return "Hello, World!";
}
console.log(getData())

//output :
// Promise {<fulfilled>: 'Hello, World!'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "Hello, World!"

//If we need to extact the value use the then method
getData().then(data => console.log({data}));
//Output :
// {data: 'Hello, World!'}

