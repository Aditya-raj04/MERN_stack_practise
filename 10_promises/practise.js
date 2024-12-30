// Promise Example 1: Basic Promise with setTimeout
const promiseone = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async task is complete");
    }, 2000);
    resolve(); // Resolve the promise
  });
  
  promiseone.then(() => {
    console.log("Promise consumed");
  });
  
  ///////////////////////////////////
  
  // Promise Example 2: Another basic Promise with setTimeout
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async task 2");
    }, 2000);
    resolve(); // Resolve the promise
  }).then(() => {
    console.log("Promise completed");
  });
  
  ///////////////////////////////////
  
  // Promise Example 3: Promise with data resolution
  const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username: "Aditya", email: "chai.com" });
    }, 2000);
  }).then((user) => {
    console.log(user); // Log the user data
  });
  
  ///////////////////////////////////
  
  // Promise Example 4: Handling resolve/reject with error
  const promisefour = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "ramraheem", name: "chaos" });
      } else {
        reject("Rejected 4"); // Reject the promise
      }
    }, 2000);
  });
  
  const username = promisefour
    .then((user) => {
      console.log(user); // Log user object
      return user.username; // Return username for the next .then()
    })
    .then((username) => {
      console.log(username); // Log username
    })
    .catch((user) => {
      console.log(user); // Catch error if rejected
      return user.username; // Return username even if rejected
    });
  
  ///////////////////////////////////
  
  // Using Async/Await with Promise Example 5
  const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "nitish kumar", name: "echo" });
      } else {
        reject("Something went wrong 5");
      }
    }, 2000);
  });
  
  // Async function to handle promisefive
  async function consumePromiseFive() {
    try {
      const response = await promisefive; // Await the resolution of the promise
      console.log(response); // Log the response data
    } catch (error) {
      console.log(error); // Catch and log any errors
    }
  }
  
  consumePromiseFive();
  
  ///////////////////////////////////
  
  // Fetch API Example: Using Async/Await to fetch data
  async function getAllUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json(); // Await the .json() to get the actual data
      console.log(data); // Log the parsed data
    } catch (error) {
      console.log("Error", error); // Catch and log any errors
    }
  }
  
  // getAllUsers(); // Uncomment to fetch data from API
  
  ///////////////////////////////////
  
  // Fetch API Example: Using Promises with fetch
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.json(); // Return the parsed JSON
    })
    .then((data) => {
      console.log(data); // Log the parsed data
    })
    .catch((error) => {
      console.log(error); // Catch and log any errors
    });
  