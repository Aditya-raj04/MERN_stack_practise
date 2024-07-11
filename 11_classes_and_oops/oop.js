//object literal     this:curresnt context
const user =  {
    userName:"aditya raj",
    logInCount:8,
    signedIn:true,
    getUserDetails : function(){
        // console.log("got user details from database");
        // console.log(`username : ${this.userName}`);
        console.log(this)
        // return NaN;
    }
}
// console.log(user.getUserDetails());
// console.log(this.window);






//constructor function {}  NEW  {}
// const prompiseOne = new Promise( (resolve,reject) => { });
// const date = new Date();

function user2(username,logincount,isloggedin){
  this.username =   username;
  this.logincount = logincount;
  this.isloggedin = isloggedin;
  this.greetings = function(){
    console.log(`greetings: ${this.username}`)
  }

  return this
}

let x = new user2('hello',8,true);
let y = new user2("spiderman",11,false);
let z = user2('hello',8,true);     //  gives o/p of return whole fn


// console.log(x.constructor);
// console.log(y);
// console.log(z);


// console.log(x instanceof user2);   //true
// console.log(y instanceof user2);   //true
// console.log(z instanceof user2);     //false


