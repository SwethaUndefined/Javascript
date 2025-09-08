//Sum or maximum

const numbers = [2,3,1,4,5]

const add = function(numbers){
    sum =0
    for(let i=0;i<numbers.length;i++){
       sum = sum+numbers[1]
    }
    return sum;
}

// console.log(add(numbers))

//Do the same thing in reduce
 const output = numbers.reduce((acc,cur)=>{
    console.log(acc,cur,"accandcur")
    return acc+cur
 })
 //ACC means addition of previous two values and CUR is a acutal current value.
//acc holds the value returned from the previous iteration.
// cur is the current element in the array.



 //Find Max
 const maximum =  numbers.reduce(function(max,curr){
    console.log(max,curr)
   if(curr > max){
    max = curr
   }
   return max;
 },0)
 console.log(maximum)

 //Why 0 as second param means it will take the inital value 0 as max then check with each element in the array
