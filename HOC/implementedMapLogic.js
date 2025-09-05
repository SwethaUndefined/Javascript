const radius = [1,3,4,5]

const area = (r)=>{
 return Math.PI * r * r
}

Array.prototype.calculate = function (logic){
    const output = []
    for (let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.map(area))
console.log(radius.calculate(area))
//This refer to radius