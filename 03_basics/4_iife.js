// immedietely invoked function expression

(
    function chai(){
        //named iife
        console.log("DB CONNECTED")
    }
)();

(() => {console.log("DB CONNECTED")})();

(function name(chai){console.log(`DB CONNECTED TO ${chai}`)})("aditya");

((naam) => {console.log(`my name is ${naam}`)})("aditya hai mera naam");