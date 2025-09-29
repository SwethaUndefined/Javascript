const obj = {
    value: 42,
    getValue: () => {
        console.log(this); // 'this' does not refer to 'obj' here, but it is window or undefined in strict mode
        return this.value;
    }
}
console.log(obj.getValue()); // undefined, because 'this' in arrow function does not refer to 'obj'


const obj2 = {
  value: 32,
  getValue: () => {
    console.log(this); 
    return obj2.value;
  },
};
console.log(obj2.getValue()); // 32, because 'this' in arrow function refers to 'obj2'



const obj3 = {
    value: 22,
    getValue: function() {
        const arrowFunc = () => {
            console.log(this); // 'this' refers to 'obj3' here
            return this.value;
        }   
        return arrowFunc();
    }
}
console.log(obj3.getValue()); // 22, because 'this' in arrow function refers to 'obj2'