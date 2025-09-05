

// let a = 10;
// const c = 20;
// console.log(a)
// var  b = 100;


// var a  = 10;
// {
//     var a = 20
// }

// let a  = 10;
// {
//     let a = 20;
// }
// console.log(a)


// var a = 10;
// {
//     let a = 20;
//     console.log(a)
// }


// function a(){
//     var b = 10;
// }
// a();
// console.log(b)

// {
//     const a  = 10;
//     {
//         var a = 20;
//         {
//             const a = 30;
//         }
//     }
// } //so basically it will attempt to hoisted that time there is parent scope have same name leads to error?

// {
//     const a  = 10;
//     {
//         let  a = 20;
//         {
//             const a = 30;
//         }
//     }
// }// this is possible each have seperate scope and when hoiste it will in temperal dead zone. while these declarations
// // are hoisted to the top of their block, they remain uninitialized until the code execution reaches their definition,
// // a period known as the Temporal Dead Zone (TDZ)

{
    const a  = 10;
    {
        const a = 20;
        {
            const a = 30;
        }
    }
}