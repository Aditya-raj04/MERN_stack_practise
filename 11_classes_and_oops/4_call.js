function setusername(username){
    //complex db calls
    this.username = username;
    console.log("called")
    
}

function createuser(username,email,password){
    setusername.call(this, username);    //call method
    this.password=password;
    this.email=email;
    // this.username=username;
}


const chai = new createuser("chai","chai.com",123);
console.log(chai);
console.log("hello");