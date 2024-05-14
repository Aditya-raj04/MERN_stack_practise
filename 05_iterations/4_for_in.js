// for in     works in objects, arrays and strings
//in string this loop gives the indexes if we want then we can access item using these indexes

const myobj= {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift:"swift by apple",
};

for (const key in myobj) {
    // console.log(key);
    // console.log(myobj);

    // console.log(myobj[key])   // this prints the values only
    // console.log(`${key}`)  //this gives keys
    // console.log(`${key} key for shortcut of ${myobj[key]}`)
};

const programming = ["javascript","ruby","python","cpp","golang"];
for (const name in programming) {
//    console.log(name);
console.log(name,programming[name]) //programming[0] or programming[name] = javascript
}


const map = new Map()
map.set("IN","india")
map.set("USA","america")
map.set("NEP","nepal")
map.set("PAT","patna")
map.set("PAT","patna")

for (const key in map) {
    // console.log(key)                 //this is not iterable
}


