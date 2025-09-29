const obj = {
    a : 10,
    b : 20,
    sum : function(){
        console.log(this); // this refers to the object itself
        return this.a + this.b;
    }
}
console.log(obj.sum()); // 30


//👉 this inside the method automatically refers to that object (obj in this case) in both strict and non strict mode
