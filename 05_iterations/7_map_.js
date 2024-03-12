//map

let Numberz = [1,2,3,4,5,6,7];
const newNum = Numberz.map( (val) => val + 10);
console.log(newNum);

// let val = [];
// Numberz.forEach(element => {
//     val.push(element+10)          //same as sbove but used for each
// });
// console.log(val);



//chaining
const val = Numberz
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 30 )
console.log(val)