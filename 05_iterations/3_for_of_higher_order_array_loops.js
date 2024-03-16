//for of

//  ["","",""]
//  [{},{},{}]

let arr = [1,2,3,4,5]
for (const num of arr) {
    if(num ==3)break;
    // console.log(num);
}



let greet = "i am aditya";
for (const greeting of greet) {
    if(greeting == ' ')continue;
    // console.log(greeting);
}

//maps
const map = new Map()
map.set("IN","india")
map.set("USA","america")
map.set("NEP","nepal")
map.set("PAT","patna")
map.set("PAT","patna")
// console.log(map)  //maps are for unique value

for (const [key,value] of map) {
    // console.log(key,':-',value)
}




//for of loop dont work in objects
const myObj = {
    game1 : "NFS",
    game2: "pubg",
    game3: "valorant"
}
for (const [name,game] of myObj) {
    // console.log(name,game)
}

