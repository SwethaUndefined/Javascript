const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

async function myFunc1() {
  console.log("Namaste");

  const res = await p1;
  console.log({ res });
  console.log("Hello1");

  const res1 = await p1;
  console.log({ res1 });
  console.log("Hello2");
}
myFunc1();

