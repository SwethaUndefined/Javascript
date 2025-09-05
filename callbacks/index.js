// setTimeout(function a(){
//     console.log("Timer")
// },5000)

// function x(y){
//     console.log("X")
//     for(var i=0;i<=20;i++){
//         console.log(i)
//     }
//     y()
// }

// x(function y(){
//     console.log("Y")
// })

function a(){
    console.log("A")
}
a()

console.log("B")

// The for loop will block the main thread, console.log("Y") will wait until the for loop completes
//ways to solve:
   //1. call the y function before loop
