//map
//callback fn
//return a new array
//filter aur map dono ko for each ke madad se bhi kr sakte hai lekin wo return nhi kaerega new array

let Numberz = [1,2,3,4,5,6,7];
const newNum = Numberz.map( (val) => val + 10);
// console.log(newNum);



let value = [];
Numberz.forEach( element => {
    value.push(element+10)          //same as above but used for_each method
});
console.log(value);



//chaining
const val = Numberz
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 30 )
console.log(val)


