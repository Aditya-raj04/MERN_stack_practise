const banner = document.getElementById("banner");
const clock= document.getElementById("clock");


setInterval( ()=> {
  let date = new Date();
 clock.innerHTML = date.toLocaleDateString();
  // console.log(date.toLocaleDateString());
},1000 )