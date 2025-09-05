const number = [5,1,3,2,6]

const evenNumber = (arr)=>{
  return arr%2 === 0
}
const oddNumber = (arr)=>{
  return arr%3 === 0
}
const module = (arr)=>{
  return arr%2 === 0
}
const num1 = number.filter(evenNumber)
const num2 = number.filter(oddNumber)
const num3 = number.filter(module)

console.log(num1)
console.log(num2)
console.log(num3)