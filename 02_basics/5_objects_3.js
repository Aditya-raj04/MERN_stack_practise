//destructuring

const myCourses = {
    id:123,
    couseInstructor : 'hitesh',
    price:'999',
}
({couseInstructor:instructor} = myCourses);// Destructuring and assigning to instructor
// console.log(myCourses.couseInstructor)
instructor = 'aditya';       //reassigning the value
console.log(instructor);

//api's  json call api
// {
//     'name':'aditya',
//     'price':'200',
//     'internet':'free',
// }




// json formatter
//randomuser api = https://randomuser.me/api/
