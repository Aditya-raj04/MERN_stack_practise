// let user = "aditya     ";
// let channel = "chai ";

// console.log(user.length);

let myheroes =["thor", "batman", "flash"];

let heropower = {
thor:"thunder",
batman:"humanity",
flash:"speed",

getspiderpower:function(){
    console.log(`power of a spider is ${this.flash}`);
}
}

Object.prototype.aditya = function(){
    console.log(`object ka power`);
}
// Array.prototype.aditya = function(){
//     console.log(`array ka power`);     //object me kaam nhi krta hai
// }

// console.log(heropower);
// heropower.aditya();
// myheroes.aditya();






//inheritance
const user={
    name:"chai",
    company:"google"
}
const teacher={
    makevideo:true,
}

const teachingsuppoert = {
    isavailable:false
}

const tasupport = {
    // makeassignment = "js assignment",
    fulltime:true,
    __proto__:teachingsuppoert
}

teacher.__proto__ = user;

//modern syntax
Object.setPrototypeOf(teacher,teachingsuppoert);









let users = "aditya     ";
let channel = "chai ";
// console.log(user.length);

let anotherusername = "chaiaurcode        "
String.prototype.truelength =function(){
    // console.log(this)
    console.log(this.trim())
    console.log(`true lenth is ${this.trim().length}`)
}

anotherusername.truelength()
users.truelength();
channel.truelength()