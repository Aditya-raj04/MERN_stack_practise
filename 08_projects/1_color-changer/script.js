// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });





// const buttons = document.querySelectorAll(".button");
// // console.log(buttons);

// const body = document.querySelector("body");
// buttons.forEach( (btn) => {
// // console.log(btn);
// btn.addEventListener('click', function(e) {
// console.log(e);
// console.log(e.target);
// // if(e.target.id=='grey'){
// //   body.style.backgroundColor="grey";
// // };
// switch(e.target.id){
//   case 'grey': body.style.backgroundColor = "grey";
//   break;
//   case 'white': body.style.backgroundColor = "blue";
//   break;
//   case 'blue': body.style.backgroundColor = "blue";
//   break;
//   case 'yellow': body.style.backgroundColor = "yellow";
//   break;
// }
// })
// } )




const buttons = document.querySelectorAll(".button")
// console.log(buttons);

const body = document.querySelector("body");
buttons.forEach( (btn) =>{
    console.log(btn);
    btn.addEventListener('click' , function(e){
if(e.target.id=="grey"){
    body.style.backgroundColor=e.target.id;
}
if(e.target.id=="white"){
    body.style.backgroundColor=e.target.id;
}
if(e.target.id=="yellow"){
    body.style.backgroundColor=e.target.id;
}
if(e.target.id=="blue"){
    body.style.backgroundColor=e.target.id;
}
if(e.target.id=="purple"){
    body.style.backgroundColor=e.target.id;
}
    })

} );
