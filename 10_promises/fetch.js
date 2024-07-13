// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response)=>{
// return response.json()
//   }).then((uparwalekareturn)=>{
//     console.log(uparwalekareturn);
//   })
//    .catch((error)=>{
//     console.log(error);
//    })


// fetch API ko use karke data laana
fetch('https://jsonplaceholder.typicode.com/osts')
  .then((response) => {
    // response ko JSON me convert karna
    if (!response.ok) {
        // agar response status 200 nahi hai to error throw karna
        throw new Error('Network response was not ok ' + response.statusText);
      }
    return response.json();
  })
  .then((data) => {
    // fetched data ko console me print karna
    console.log(data);
  })
  .catch((error) => {
    // agar koi error aaye to usko handle karna
    console.error('Error:', error);
  });
