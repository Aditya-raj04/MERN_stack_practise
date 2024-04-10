//reduce

let arr = [1,2,3,4,5];
let initialVal = 0;

// const x = arr.reduce( (acc,current) =>
// acc + current,initialVal
// )

const x = arr.reduce( function (acc,currentVal) {
    console.log(` accumlator:${acc}  current:${currentVal}`)
    return acc+currentVal},0
    )

console.log(x);




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

let sum = shoppingCart.reduce( (acc , item) => {
 return acc + item.price
},0)
console.log(sum);