const cart = ["shoes","pants","kurta"];

const  github_api = 'https://jsonplaceholder.typicode.com/todos'

const user = fetch(github_api)

console.log(user,"user")

user.then((response)=>{
    response.json()
}).then((data)=>{
    console.log(data)
})
console.log(user,"user")
