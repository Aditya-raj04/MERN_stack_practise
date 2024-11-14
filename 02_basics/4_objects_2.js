
//singleton constructor
// const tindeUser = new Object()      //singleton object
const tindeUser = {}; //non-singleton

tindeUser.id = 123;
tindeUser.name = "aditya";
tindeUser.isLoggedIn = false;
// console.log(tindeUser);

const regularUser = {
  email: "aditya@google.com",
  fullName: {
    userName: {
      firstName: "aditya",
      lastName: "raj",
    },
  },
};

// console.log(regularUser.fullName.userName)




// to assign to objects in one object by assign and spread...

const target = { 1: "hello", 2: "aditya" };
const source = { 3: "kya hal", 4: "rahul" };
// const returned = { ...target, ...source };
const returned = Object.assign({},target,source);
// console.log(returned);
// console.log(target);
// console.log(source);      
// console.log(target === returned)  //true

const objj = {...target,...source};
// console.log(objj);


const users = [
  {
    id: 123,
    name: "aditya",
  },
  {
    id: 567,
    name: "rahul",
  },
  {
    id:890,
    name:'bholi'
  }
];
console.log(users[2].id)     //890
console.log(users[0].name)    //aditya




console.log(tindeUser)
// console.log(Object.keys(tindeUser))      //o/p : in array
console.log(Object.values(tindeUser.name))      //o/p : in array
// console.log(Object.entries(tindeUser))     //typeof bhi array hai

console.log(tindeUser.hasOwnProperty('isLoggedIn'))
// console.log(tindeUser.toString())
console.log(Object.getPrototypeOf(tindeUser.id))