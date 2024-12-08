// const btn = document.querySelectorAll("span.button")
// // console.log(btn);

// const body =  document.querySelector('body')
// btn.forEach((button) => {
//     button.addEventListener('click' , (e)=> {
//         body.style.backgroundColor = e.target.id;
//     });
// });


const btn = document.querySelectorAll(".button")

const body = document.querySelector("body")
for(let i = 0 ; i <= btn.length; i++){
    btn[i].addEventListener('click' , (e)=>{
        body.style.backgroundColor = e.target.id
    })
}