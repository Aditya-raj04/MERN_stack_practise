const mynums = [1,2,3,4,5,6,7,8,9];

let newnum = [];
mynums.forEach( element => {
  if(element > 5 ){newnum.push(element)}
});
// console.log(newnum);



//filter example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 2015, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
  ];



  let book1 = books.filter( (yy) => {
  return  yy.publish >= 2015  ;
  })
//   console.log(book1);





  //maps

  let arr = [1,2,3,4,5,6,7,8,9];
  let xyz = arr.map( (bk) => {      //map
    return bk + 10;
  });
//   arr.forEach( (bk) =>  console.log(bk + 100))   //for_each
//   console.log(xyz);


//reduce

const nums = [1,2,3,4,5];
// let iv = 0;

let values =  nums.reduce( function (cv,acc) {
return cv + acc
},100);

// console.log(values);




const shoppingCart = [
    { itemname:"python",
      price: 1000,
    },
    { itemname:"javascript",
      price: 3000,
    },
    { itemname:"python",
      price: 2000,
    }
]

let total = shoppingCart.reduce(function (acc , cv) {
    return acc + cv.price;
},0);
console.log(total);