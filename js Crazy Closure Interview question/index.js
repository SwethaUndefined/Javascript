function outer() {
    var a = 20;
    function inner() {
        console.log(a)
    }
    var a = 10;
    return inner;
}
var closefn = outer();
closefn()

// output : 10 , the both var a is pointing to same scope(Global) so it will replace the new value

function outer1() {
    function inner() {
        console.log(a)
    }
    let a = 10;
    return inner;
}
var closefn1 = outer1();
closefn1()

// output : 10 , the let a is pointing to block scope and deleted after it reaches the line# 19 and when it reaches the line # 21
// it holds the full function of inner function along with the lexical environment.

//The output is 10 because the function inner holds a reference to the variable a through its closure. 
// The variable a is not deleted; it remains accessible via the closure even after outer1 completes execution.


function outer2() {
    function inner() {
        console.log(a)
    }
    const a = 10;
    return inner;
}
var closefn2 = outer2();
closefn2()

// output is 10, same as the above explanation


function outer3(b) {
    function inner() {
        console.log(a, b)
    }
    const a = 10;
    return inner;
}
var closefn3 = outer3("Hello World");
closefn3()

// output is 10 "Hello World", because here b acts a parent scope which is accessed by inner funtion(b acts a lexical environment)


function outest() {
    var c = 3
    function outer3(b) {
        function inner() {
            console.log(a, b,c)
        }
        var a = 10;
        return inner;
    }
    return outer3;
}
// var closefn3 = outest();
var closefn3 = outest()("Hello World");
//line# 68 69 both are same.the diffrent is send the "Hello world" as param to outer3 function
closefn3()

// When I do with let and const the outside will be same due to the closure and lexical scope


//Data Hiding or Data Privacy and Encapsulation

function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count)
    }
}
var counter1 = counter();
counter1()
counter1()

var counter2 = counter();
counter2()
counter2()

// Output :  1 2 1 2 because for counter2 will start from the first not using the previous reference
// This way of incrementing is not scalable, so we can write as


function counter1(){
    var count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count)
    }
    this.decrementCounter = function(){
        count--;
        console.log(count)
    }
}
