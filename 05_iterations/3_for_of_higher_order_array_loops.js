//for of works in strings and arrays , map and ______ Map in Object

//  ["","",""]
//  [{},{},{}]

// these Loops are used in Iteratable things like OBJECTS,STRING,ARRAY

//for of in arrays
let arr = [1,2,3,4,5]
for (const num of arr) {
    if(num ==3)break;
    // console.log(num);
    
}


//for of in strings
let greet = "i am aditya";
for (const greeting of greet) {
    if(greeting == ' ')break;
    // console.log(greeting);
}

//maps
const map = new Map()
map.set("IN","india")
map.set("USA","america")
map.set("NEP","nepal")
map.set("PAT","patna")
map.set("PAT","patna")
console.log(map)  //maps are for unique value   //does'nt work for duplicate key nd value like in arrays;

//for of in maps
for (const [key,value] of map) {
    console.log(key,':-',value);
    // console.log(value);
}




//for of loop don't work in objects
const myObj = {
    game1 : "NFS",
    game2: "pubg",
    game3: "valorant"
}
// for (const [name,game] of myObj) {
//     console.log(name,game)
// }

