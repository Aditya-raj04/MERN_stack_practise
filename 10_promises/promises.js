const promiseOne = new Promise(function (resolve,reject){
//Do an async task
//DB calls, Network calls ,calligraphy
setTimeout(()=>{
    resolve();
    console.log("PROMISE 1 copying completed ");
},1000);
});

promiseOne.then(function(){
console.log("promise 1 consumed");
})






new Promise(function(resolve,reject){
setTimeout(()=>{
    console.log("PROMISE 2 completed");
    resolve();
},3000)
})
.then(function(resolve){
    setTimeout(()=>{
        console.log(" PROMISE 2 task completed");
    },1000)

})




const promiseThree = new Promise(function(resolve,reject){
setTimeout(()=>{
    console.log("reolve promise 3");
    resolve({username:"aaditya", fee:2000});
},1000)
})

promiseThree.then(function(user){
console.log(user);
console.log("PROMISE 3")
}

)