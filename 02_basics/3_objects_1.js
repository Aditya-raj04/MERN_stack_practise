//1     {     singleton
//          Object.create(caller)      }

//2{   object literal  }

const mySym = Symbol('key1')

const jsuser = {
    [mySym]:'myKey1 aditya ka symbol',        //symbol
    name:"aditya",
    "full Name": 'aditya raj',
    age: 20,
    location: "patna",
    isloggedin: false,
    email: "aditya2google.com",
    lastLoginDays: [ 'monday','saturday']
}
// console.log(jsuser.age)
// console.log(jsuser['age'])

// console.log(jsuser['full Name'])
// console.log(jsuser.full Name)       //only by above we can access

console.log(jsuser[mySym])       //symbol
// console.log(typeof jsuser.mySym)
// console.log(jsuser)

jsuser.email = "aditya laheri 123";
// Object.freeze(jsuser);            //freeze method
jsuser.email = 'adityarajsinghania@google.com'
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello JS user")
}

jsuser.greetingsTwo = function(){
    console.log(`hello JS user , ${this["full Name"]}`)
    console.log(`aditya , ${this.email}`);
    // return {};
}

// console.log(jsuser.greeting())
console.log(jsuser.greetingsTwo())






////////////////////////////////////////
/** 
  const jsuser = {     
     name: "aditya"
 };                 
 jsuser.greeting = function(){
     console.log("hello aditya laheri");
 };                     

 console.log(jsuser.greeting());


 Apka code mein undefined isliye aaraha hai kyonki jsuser.greeting() ko call karne ke baad console.log() ke andar undefined return ho raha hai. Jab aap console.log(jsuser.greeting()) ko run karte hain, to pehle jsuser.greeting() function call hota hai jo "hello aditya laheri" print karta hai, lekin function ke andar koi explicit return statement nahi hai. Isliye function call karne ke baad undefined value return hoti hai, aur usi ko console.log() print kar deta hai.


 */
