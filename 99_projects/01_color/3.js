// const btn = document.querySelectorAll("span.button")
// // console.log(btn);

// const body =  document.querySelector('body')
// btn.forEach((button) => {
//     button.addEventListener('click' , (e)=> {
//         body.style.backgroundColor = e.target.id;
//     });
// });


// const btn = document.querySelectorAll(".button")

// const body = document.querySelector("body")
// for(let i = 0 ; i <= btn.length; i++){
//     btn[i].addEventListener('click' , (e)=>{
//         body.style.backgroundColor = e.target.id
//     })
// }


const buttons = document.querySelectorAll(".button"); // Selects all <button> elements
const body = document.querySelector("body"); // Selects the <body> element

buttons.forEach((btn) => {
  console.log(btn); // Logs each button to the console
  btn.addEventListener("click",(e)=>{
    console.log(e)
    console.log(e.target.id)
    body.style.backgroundColor = e.target.id
  })
});


