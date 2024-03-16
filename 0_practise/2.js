//for_each method fn dont return any value
let language = ["python","golang","javascript","cpp"];
language.forEach(
   (key)=>{
    // console.log(key)
   } 
)
// function print(printme){
//     console.log(printme)
// }
// language.forEach(print)



const mycoding = [
    {lang:"python",
     language:"python is a language" 
    },
    {lang:"java",
    language:"java is a language" 
   },
   {lang:"js",
   language:"js is a language" 
  },
]

mycoding.forEach((i)=>{
    // console.log(i.language)
    console.log(i.lang)
} )

