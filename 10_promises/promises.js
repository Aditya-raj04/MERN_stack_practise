//promise 1
// const promiseOne = new Promise(function (resolve,reject){

//Do an async task
//DB calls, Network calls ,calligraphy

// setTimeout(()=>{
//     resolve();
//     console.log("PROMISE 1 copying completed ");
// },1000);
// });

// promiseOne.then(function(){
// console.log("promise 1 consumed");
// })






//promise 2
// new Promise(function(resolve,reject){
// setTimeout(()=>{
//     console.log("PROMISE 2 completed");
//     resolve();
// },3000)
// })
// .then(function(resolve){
//     setTimeout(()=>{
//         console.log(" PROMISE 2 task completed");
//     },1000)

// })






//promise 3
// const promiseThree = new Promise(function(resolve,reject){
// setTimeout(()=>{
//     console.log("reolve promise 3");
//     resolve({username:"aaditya", fee:2000});
// },1000)
// })

// promiseThree.then(function(user){
// console.log(user);
// console.log("PROMISE 3")
// }
// )







//promise 4

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       console.log("promise 4 reolved");
//       resolve({ username: "aditya prakash", name: "shadow" });
//     } else {
//       reject("error something went wrong");
//     }
//   }, 1000);
// });

// promise4
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then((myusername) => {
//     console.log(myusername);
//   })
//   .catch(function (err) {
//     console.log("not resolved");
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally the promise is either resolved or rejected");
//   });










//promise 5
const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = 1;
    if(!error){
      console.log("resolved");
resolve({username:"aditya raj",name:"bholi laheri"})
    }else{
      console.log("rejected")
      reject({username:"superman",name:"batman"})
    }
  }, 1000);
});

//method 1
// promise5
//   .then((call) => {
//     console.log(call);
//   })
//   .catch((call) => {
//     console.log(call);
//   });

//method 2
// async function consumePromiseFive(){
// const response = await promise5;
// console.log(response);
// }
// consumePromiseFive();

//method 3
async function consumePromiseFive(){
 try {
  const response = await promise5;
  console.log(response);

 } catch (error) {
  console.log(error);
 }
  }
  consumePromiseFive();







//ye niche ke dono code upar sab se alag hai next lecture ke liye api fetch json wagera ka hai

  // async function getAllUsers(){
  // try {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   // console.log(response)
  //   const data = await response.json();
  //   console.log(data);

  // } catch (error) {
  //   console.log("E",error);
  // }
  // }

  // getAllUsers();

  //same upar wale ko .then aur .catch se krna hai
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
return response.json()
  }).then((uparwalekareturn)=>{
    console.log(uparwalekareturn);
  })
   .catch((error)=>{
    console.log(error);
   })





