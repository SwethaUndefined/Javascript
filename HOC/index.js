// function x() {
//     console.log("Namaste JS")
// }

// function y(x){
//    x();
// }

// y(x)

//Calculate Area of each radius
const radius = [3,1,2,4];

const calculateArea = function(r){
    let output = []
    for(let i=0;i<r.length;i++){
      output.push(Math.PI * r[i] * r[i])
    }
    return output
}

console.log(calculateArea(radius))


//Calculate circumference of each radius

const calculateCircumference = function(r){
    let output = []
    for(let i=0;i<r.length;i++){
      output.push(2 *(Math.PI * r[i] * r[i]))
    }
    return output
}

console.log(calculateCircumference(radius))

//Calculate diameter of each radius

const calculateDiameter = function(r){
    let output = []
    for(let i=0;i<r.length;i++){
      output.push(2 * r[i])
    }
    return output
}

console.log(calculateDiameter(radius))

//All the three functions have using same forloop and output array for everytime again and again. Software engineer should "DRY" Don't repeat yourself.

//Optimized way:


const area = (r)=>{
 return Math.PI * r * r
}
const circumference = (r)=>{
   return 2 *(Math.PI * r * r)
}
const diameter = (r)=>{
   return 2 * r
}
const calculate = (r,logic)=>{
     let output = []
    for(let i=0;i<r.length;i++){
      output.push(logic(r[i]))
    }
    return output
}
console.log(radius.map(area))
console.log(calculate(radius,area),"Area")
console.log(calculate(radius,circumference),"Circumference")
console.log(calculate(radius,diameter),"Diameter")

//Make the calculcate function exactly how the map works

// ===> check next file