//destructuring

const myCourses = {
    id:123,
    courseInstructor : 'hitesh',
    price:'999',
}
const{courseInstructor} = myCourses;
//  console.log(courseInstructor);
// const{courseInstructor:instructor} = myCourses;

({courseInstructor:instructor} = myCourses);// Destructuring and assigning to instructor
// console.log(myCourses.courseInstructor)
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
