const descript = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(descript);



// console.log(Math.round(Math.PI))
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    ola: function(){
        console.log("chai nahi bani");
    }
}
Object.defineProperty(chai,'name',{
    writable:false,
    // enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));


for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} :${value}`)
    }
    // else{
    //     console.log("code nhi phatega");
    // }
}