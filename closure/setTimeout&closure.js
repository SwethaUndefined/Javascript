// function a(){
//     var i = 10;
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }
// a()


// function b (){
//     for(var i=1;i<=5;i++){
//         console.log(i)
//         setTimeout(function(){
//             console.log(i)
//         },i * 1000) 
//     }
// }
// b()


// function b() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000)
//     }
// }
// b()


// //Need output  : 
// // 1
// // 2
// // 3
// // 4
// // 5
// // without use of let


// function b() {
//     for (var i = 1; i <= 5; i++) {
//         function closefn(x) {
//             setTimeout(function () {
//                 console.log(x)
//             }, x * 1000)
//         }
//         closefn(i)
//     }
//     console.log("Namaste Javascript")
// }
// b()


