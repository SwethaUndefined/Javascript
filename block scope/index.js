// {
//     var a = 10;
//     console.log(a)
// }

// if(true)//This is error

// var a =100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// console.log(a)

// let b =100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(b)
// }
// console.log(b)

// let b = 10;
// {
//    var b = 20; 
// }

let b = 10;
// {
//    let b = 20; 
// }

const c = 10;
{
    const c = 20;
    {
        const c = 30;
        console.log(c)
    }
    console.log(c)
}
console.log(c)