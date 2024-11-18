jsuser = {}; // Define jsuser object

jsuser.greetingsTwo = function(x) {
    x = 1;
    console.log("Inside function x:",x);
    return {}
};

// Define 'x' globally
let x = 5; // Initial value of x
jsuser.greetingsTwo(x); // Call the greetingsTwo function

console.log("Outside function x:", x); // Output: 5 (Original x remains unchanged)




//function

const newuser = {
    useername: "aditya",
    prices: 999
}

function enduser(anyobject){
    console.log(`the username is ${anyobject.useername} and the price is ${anyobject.prices}`)
}

// enduser(newuser);
// enduser({
//     useername:"aditya",
//     prices:875
// })






