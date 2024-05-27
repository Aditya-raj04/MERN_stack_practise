// map is also a method function like for_each
let x = [1,2,3,4,5,6,7];
// const y = x.map((element) => element+10 );
// console.log(y);

//reduce

let num = [1,2,3,4,5]
let ac =0
// const z = num.reduce((acc,cv) => {
//     console.log(`${acc} "," ${cv}`);
//     return acc + cv
// },0 )
// console.log(z)


let sc = [
    {price:2000,
    course: "python"
    },
    {price:20000,
        course: "machine learning"
        },
        {price:1000,
            course: "ds"
            },
            {price:200,
                course: "js"
                },
]

let s= 0;
const d = sc.reduce((acc,cv) => {
    return acc + cv.price
},s )
console.log(d)