
const marvel = ["ironman","captain","strange"];



const dc = ["batman","superman","flash"];

let a = marvel.concat(dc)
// marvel.push(dc);    //console.log(marvel);
// console.log(a);

const all_heros = [...marvel,...dc]  
//spread method used to spread into single element like dropping of a glass and kaanch ka bikharna
// console.log(all_heros)


const another_array = [1,2,3,[34,56,67],34,[3,4,[56873,23]]]
// console.log(another_array.flat(Infinity))

// console.log(Array.isArray("hello"));
// console.log(Array.from("aditya"))
console.log(Array.from({name:"aditya"}))   //interesting

// const person = {name:"aditya",class:"four"};
// console.log(Array.from(Object.values(person)));




let score1 = 200;
let score2 = 400;
let score3 = "kdjfhsjkfh";
// console.log(Array.of(score1,score2,"rammesh",score3))


let student = {
    name:"adiya",
    age:21,
    salary:"10 lpa"
}
let x = Object.keys(student);
let y = Object.values(student);
// console.log(x);

var obj = {
    name: "Aditya",
    age: 25,
    country: "India"
  };
  
  var entries = Object.entries(obj);
  console.log(entries); 
  // Output: [["name", "Aditya"], ["age", 25], ["country", "India"]]
  
