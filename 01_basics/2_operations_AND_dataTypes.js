let a  = 3;
console.log(a**a);
console.log(a*a);
console.log(+"");

//js is a dynamically typed language.
// primitive (data type)
//7 types : strings, numbers, boolean, null, undefined, symbol, BigInt


//refrence type (non- primitive)
//array, objects, functions

//symbol =
const id = Symbol('123')
const newid = Symbol('123')
console.log(id === newid)

//function  =
const myfun = function(){
    // console.log("hello")
}

//objects = 
let mobile ={
    model:"apple",
    price:"100k",
    year:2025,
}

//arrays = 
const heroes = ["shaktiman" , "naagraj" , "ironman"]

//BigInt =
const bigNumber = 345546442434n

//null = 
const temp = null;

//undefined = 
const hello = undefined;

// console.log(typeof bigNumber)   //bigint => bigint
// console.log(typeof temp)        //null  => object
                                   //undefined => undefined
                                   //number => number

// console.log(typeof heroes)      //arrays => object
// console.log(typeof mobile)      //objects => object
// console.log(typeof myfun)       //function => function (object)
                             


// typeof  NULL is object
//non-primitive ka datatype object funtion or object arrray or object aata hai


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(((((Stacks AND Heaps)))))))))))@@@@@@@@@@@@@@@@@@@@@@@@@
//Stacks and Heaps
let userOne = 123;
let userTwo = userOne
userTwo = 98;
console.log(userOne)
console.log(userTwo)


let empOne = {
    name:"aditya",
    id:123,
    salary:"100k",
}
let empTwo = empOne;
empTwo.name = "rahul";

console.log(empOne.name);
console.log(empTwo.name);

// in heap case or non-primitive type ke tym call by reference hai not the copy like in stacks so the actual value changes in the original also

// IN NON-PRIMItive TYPE THE MEMORY WHERE THEY STORE IS IN HEAP}
// IN PRIMITIVE TYPE THE MEMORY LOCARION STORED IS IN STACKS}


function myNamne(){
    console.log("aditya");
    return 2;
}
console.log(typeof myNamne)
console.log(typeof myNamne())

function Person(name) {
    this.name = name;
  }
  
  // Output: function
  console.log(typeof new Person('John')); // Output: object
  console.log(Person.name);
  

