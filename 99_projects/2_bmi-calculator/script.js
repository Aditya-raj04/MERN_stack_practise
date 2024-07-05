const form =  document.querySelector("form");
//this usecase will give us empty value
// let height = document.getElementById("height");
// let weight =document.getElementById("weight");
form.addEventListener("submit", (e) => {
e.preventDefault();

const height = parseInt(document.querySelector("#height").value);

const weight = parseInt(document.querySelector("#weight").value);

const results = document.querySelector("#results");

if(height === "" || height < 0 || isNaN(height) ){
  results.innerHTML = `please give a valid height ${height}`;
}
// results.innerHTML = `${height}`;
else if(weight === "" || weight < 0 || isNaN(weight) ){
  results.innerHTML = `please give a valid weight ${weight}`;
}
else{
 const bmi =  (weight/((height*height)/10000)).toFixed(2);
 //show the result
 results.innerHTML = `<span>${bmi}</span>`;

 const outcome = document.querySelector("#lelo");


if(bmi <= 18.6){
outcome.innerHTML = "under weight";

}
else if(bmi >= 18.6 && bmi <= 24.9){
  outcome.innerHTML = "normal range"
}
else{
  outcome.innerHTML = 'overweight';
}
}

})