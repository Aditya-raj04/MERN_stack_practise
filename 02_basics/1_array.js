//arrays create shallow copies rather than deep copies

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

let myarr = [0,1,2,3,4,5]

let newarr = new Array(323,4545,432,234)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       //array methods   ///////////////////////////////

// myarr.push(34)
// myarr.pop()

// myarr.unshift(99)   //add elements in first
// myarr.shift()

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(1))


let arr = myarr.join()
// console.log(arr)
// console.log(typeof arr)
// console.log(myarr)


//slice()    // splice()
console.log("A ",myarr)

let myna = myarr.slice(0,4)
console.log(myna)
console.log("B ",myarr)

let mna1 = myarr.splice(0,4)
console.log(mna1)
console.log("C ",myarr)

