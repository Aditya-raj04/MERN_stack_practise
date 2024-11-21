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
function chai(){
    console.log(this)      //function ke andar this use nhi kr sakte sirf object ke liye hai
}
const chai2 = () =>{
    let user = "aditya"
    console.log(this)
}

// chai();
// chai2();
// console.log(this);




//global ke andar jo global object hai wo window object hai jo empty hota hai lekin browser pe bohot o/p hote hai compared to in vs {}
//console ke andar jo global hai wo window return krta hai aur in node environment ek empty {} return krta hai


///////////////////////////////       implicit return   //////////////////////
// let x = (num1,num2) =>{
//     return num1+num2
// }

// let x = (num1,num2) => (num1+num2)  //implicit

const x = (num1,num2) => ({user:"aditya"})
// console.log(x(2,3));

// function a(){
//     console.log(this)
// }
// a()

let a = () =>{
    console.log(this)
}
// a();   //{}


(() => {
   console.log(this)
return this
})()
//iifee upar wala