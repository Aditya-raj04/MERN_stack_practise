// filter method return a value so we have to store it
let arr = [1,2,3,4,5,6,7,8,9]
// const x = arr.filter( (val)=>val>5 )
const x = arr.filter( 
    (val)=>{return val>=4}
         )
// console.log(x)



const cities = [
    {city:"kolkata",
     name:"aditya is my name",
     role:'product',
     year:2003
    },
    {city:"patna",
    name:"aditya is my name",
    role:'product',
    year:2000
   },
   {city:"haryana",
   name:"aditya is my name",
   role:'service',
   year:1990
  },
  {city:"haryana",
  name:"bholi is my name",
  role:'business',
  year:1900
 },
]
let y = cities.filter((val)=>val.city === 'haryana' && val.year >=1900);
console.log(y)


