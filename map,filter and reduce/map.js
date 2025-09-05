const arr = [1,2,3,4,5]
function double(x){
    return x * 2
}
function triple(x){
    return x * 3
}
function binary(x){
    return x.toString(2)
}

const output1 = arr.map(double)
const output2 = arr.map(triple)
const output3 = arr.map(binary)

console.log(output1)
console.log(output2)
console.log(output3)


//So map will here be uased for different functions which is called as HOC

