// for of }:= used in maps and arrays and strtings {in this objects are not iterable}
// for in }:= used in objects and but in arrays it gives the 0,1,2,3 programming[key] {maps are not iteable}
// 

let num = [1,"hello",3,4,5,6]
for (const i of num) {
// console.log(i*9);
}


let x = "i_love_you"
for (const i of x) {
    // console.log(i)
}

// maps
    let employee = new Map();
    employee.set('john',"hello my name is jon");
    employee.set('aditya',"hello my name is aditya");

    // console.log(employee.get('john'))
    // console.log(employee.get('aditya'))


let use = {
    john : "hi i am john",
    aditya:"hello my name is aditya"
}
// console.log(use['john'])
// console.log(use['aditya'])

let map = new Map();
map.set("in","india");
map.set("us","united states of america");
// console.log(map.get("in"))
// console.log(map)
// map.set("in","india");
// console.log(map)

for (const i of map) {
    // console.log(i)
};
for (const [key,value] of map) {
    // console.log(key,":-",value)
}






// for in loop

// for in loop used on object for iteration
// for in loop in arrays keys no
let myobj = {
    js:"jsvascript",
    py:"python",
    cpp:"c plus plus"
}
// for (const k in myobj) {
//    console.log(k,myobj[k]);
// }


let programming = ["javascript","python","java","cpp"];
for (const key in programming) {
// console.log(programming[key])
}

for (const key in map) {
    console.log(key)
}