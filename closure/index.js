// function x(){
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x()

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// x()

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// var z = x()
// console.log(z)
// z()


// function x(){
//     var a = 7;
//     return function y(){
//         console.log(a)
//     }
// }
// var z = x()
// console.log(z)
// z()

// function x(){
//     let a = 7;
//     function y(){
//         console.log(a)
//     }
//     a = 100;
//     return y
// }
// var z = x()
// console.log(z,"z")
// z()



// function fn(){
//     var a = 10;
//     return function b(){
//         return a;
//     }
// }
// console.log(fn())


// function fn(){
//     var a = 10;
//     return function b(){
//         return a;
//     }
// }
// var res = fn()
// console.log(res())

function b (){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i)
        },1000) 
    }
}
b()