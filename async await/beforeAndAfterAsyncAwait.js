///Before Async Await
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

function myFunc() {
  p.then(data => console.log({data}));
  console.log("Hello");
}
myFunc()

//Output will be
// Hello
// {data: 'Promise resolved'}

///After Async Await
async function myFunc1() {
  const res = await p;
  console.log({res});
  console.log("Hello");
}
myFunc1()

//Output will be
// {res: 'Promise resolved'}
// Hello