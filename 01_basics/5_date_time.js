//dates
// 1
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)   //object

// 2
let myNewDate = new Date("01-14-2023")
// let myNewDate = new Date(2023,0,31)
// let myNewDate = new Date("2023-01-24")
// console.log(myNewDate.toLocaleString())


// 3
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// 4
let myOtherDate = new Date()
// console.log(myOtherDate.getDate())
// console.log(myOtherDate.getMonth() + 1)
// console.log(myOtherDate.getFullYear())

// console.log(`the date is "${myOtherDate.getDate()}" month is "${myOtherDate.getMonth() + 1}" year is "${myOtherDate.getFullYear()}"`)



// 5
myNewDate.toLocaleString('default', {
    weekday:"narrow",
    day:"2-digit",
    // timeZoneName:"short",
})
console.log(myNewDate)