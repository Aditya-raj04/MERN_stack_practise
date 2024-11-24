jsuser = {}; // Define jsuser object

jsuser.greetingsTwo = function(x) {
    x = 1;
    console.log("Inside function x:",x);
    return {}
};

// Define 'x' globally
let x = 5; // Initial value of x
jsuser.greetingsTwo(x); // Call the greetingsTwo function

console.log("Outside function x:", x); // Output: 5 (Original x remains unchanged)




//function

const newuser = {
    useername: "aditya",
    prices: 999
}

function enduser(anyobject){
    console.log(`the username is ${anyobject.useername} and the price is ${anyobject.prices}`)
}

// enduser(newuser);
// enduser({
//     useername:"aditya",
//     prices:875
// })



let arra = ["superman","batman","spiderman"]
let a = 0;
while(a < arra.length){
    // console.log(`${arr[a]}`);
    a++;
}


let arr = [1,2,3,4,5]
for (const num of arr) {
    // if(num ==3)break;
    // console.log(num);
    
}

let greet = "i am aditya";
for (const greeting of greet) {
    if(greeting == ' ')continue;
    // console.log(greeting);
}

//for-in loop in object
let obj = {
    c: "c language",
    py: "python",
    js: "javascript",
    swift: "swift by apple"
}
// for (const key in obj) {
//     console.log(`the key is ${key} and value is ${obj[key]}`)
// }


// for-in loop in arrays
const myar  = ["hello","peter","harry","aditya"];
for (const key in myar) {
// console.log(myar[key]);
}

//for-each loop in arrays
// myar.forEach( (item)=>{
// console.log(item)
// } )

function printme(item,index,array){
    // console.log(item,index,array)
}
myar.forEach(printme)

const mycoding = [
    {
        languageName:"c++",
        languageFileName:"cpp"
     },
    {
        languageName:"javascript",
        languageFileName:"bhailang"
    },
    {
        languageName:"golang",
        languageFileName:"microsoft"
    }
]

mycoding.forEach( (ind) => {
// console.log(`language: ${ind.languageFileName} ,shortcut:${ind.languageName}`)
})


const obje = { name: "Aditya", age: 22, city: "Bihar" };

// console.log(`${Object.entries(obje)}`)

Object.keys(obje).forEach( (keys) => {
    // console.log(`${keys}: ${obje[keys]}`);
  });



  //filter map reduce
// const coding= ["js","cpp","golang","python","rust"];
const coding= [1,2,3,4,5,6]
const xy = coding.filter( (item) => item > 4)
console.log(xy)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
  ];

  const userbooks = books.filter( (item) => item.title === "Book Nine")
  console.log(userbooks);


  const array = [1,2,3,4];
  const qwe = []
  array.forEach( (val)=> {
qwe.push(val+50)
  })
console.log(qwe);

  const naya= array.map((val) =>{
 return val +20
  });
  console.log(naya);