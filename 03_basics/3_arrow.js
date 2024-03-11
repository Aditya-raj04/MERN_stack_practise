const user = {
    username:"aditya",
    price:999,
    greeting:function () {
        console.log(`${this.username} , welocome to the website`)
        console.log(this)
    }
}
// user.greeting()
// user.username = "bholi";
// user.greeting()

// this.price = 5
// console.log(user.price)


//////////////////////////////////////////////////////////////////////
// function chai(){
//     console.log(this)
// }
const chai = () =>{
    let user = "aditya"
    console.log(this.user)
}

// chai()

//globsl ke andar jo global object hai wo wimdow object hai


///////////////////////////////       implicit return   //////////////////////
// let x = (num1,num2) =>{
//     return num1+num2
// }

// let x = (num1,num2) => (num1+num2)

const x = (num1,num2) => ({user:"aditya"})

// console.log(x(2,3));

// function a(){
//     console.log(this)
// }
// a()

let a = () =>{
    console.log(this)
}
a()