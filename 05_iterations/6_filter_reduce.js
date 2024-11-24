//for each do not return anything

const coding= ["js","cpp","golang","python","rust"];
const value = coding.forEach( (item) => {
    // console.log(item)
    // return item
})
// console.log(value);



// for_each don't return any value
// since for_each don't return thats why [filter   and  reduce] method introduced
  


//filter
//callback fn
//checks condition for return

const mynum = [1,2,3,4,5,6,7,8,9,10];
const newnums = mynum.filter( (val) => val > 4 )
// console.log(newnums)


let my = [];
mynum.forEach( (val) => {
    if(val > 4)my.push(val);
} )
console.log(my);
//same as above but we have used if and push using for_each


//filter example
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

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  // console.log(userBooks);


  let user = books.filter ( (bk) => bk.genre === 'History' && bk.edition >1998)
  console.log(user);


  console.log(1>2>3);
  console.log(3>2>1);