const info  = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 34 },
  { firstName: "Michael", lastName: "Johnson", age: 41 },
  { firstName: "Emily", lastName: "Davis", age: 25 },
  { firstName: "David", lastName: "Brown", age: 30 },
  { firstName: "Sara", lastName: "Lee", age: 28 } 
];

//Find age <30 and take the firstName from that


const findFirstName = info.reduce((acc,person)=>{
  if(person.age < 30){
    acc.push(person.firstName)
  }
  return acc;
},[])

console.log(findFirstName)