const myobj= {
    js: "javascript",
    cpp: "cpp",
    rb: "ruby"
}

for (const key in myobj) {

    // console.log(myobj[key])   // this prints the values only
    // console.log(`${key}`)  //this gives keys
    // console.log(`${key} key for shortcut of ${myobj[key]}`)
}

const programming = ["javascript","ruby","python","cpp","golang"];
for (const name in programming) {
//    console.log(name)
// console.log(programming[name])
}


// const map = new Map()
// map.set("IN","india")
// map.set("USA","america")
// map.set("NEP","nepal")
// map.set("PAT","patna")
// map.set("PAT","patna")

// for (const key in map) {
    // console.log(key)this is not iterable
// }


