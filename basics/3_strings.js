const name = "aditya"
const job = " software engineer"

// console.log(name + job + " value")                   
// console.log(name.concat(job) + " value") 
// console.log(name + (job))
console.log(`hello my name is ${name} and i am a ${job} at google`)   //using backticks `` for
                                                        //string interpolation


const name1 = new String('bholi-raj-laheri')
// console.log(name1)
// console.log(name1[0]);
// console.log(name1.__proto__);

console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());
// console.log(name1.trimEnd());
// console.log(name1.length);
// console.log(name1.charAt(3));
// console.log(name1.indexOf('l'));

console.log(name1.split('-'))
// split(separator[, limit]): Splits a string into an array of substrings.

// #####################################################################

const newName = name1.substring(0, 4);
// console.log(newName);

const anotherName = name1.slice(-8, 4);
// console.log(anotherName);

const new2Name = "     aditya_  @gmail.com   "
// console.log(new2Name)
// console.log(new2Name.trim())


const url  = "aditya%20123@gmail.com"
console.log(url.replace('%20', '_'))
console.log(url.includes('hello'))
console.log(url.includes('adity'))

// replace(searchValue, newValue): Returns a new string with some or all matches of a pattern replaced by a replacement.
let cons = "hello world"
console.log(cons.replace("world","universe"));

// slice(start, end): Extracts a section of a string and returns it as a new string.
let a = "hello aditya"
console.log(a.slice(6,8))

// trim(): Removes whitespace from both ends of a string.
let b = "               aditya_laheri                 "
// console.log(b)
console.log(b.trim())

//splice() At position 2, add 2 elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"))
// At position 2, remove 2 items:
const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruit.splice(2, 2));

//split(separator[, limit]): Splits a string into an array of substrings.
let c = "hello my name is aditya"
console.log(c.split(" "));