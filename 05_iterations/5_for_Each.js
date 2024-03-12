//for each used in objects or arrays but msinly in objects

const coding= ["js","cpp","golang","python","rust"];
coding.forEach(element => {
    // console.log(element)
});


// coding.forEach( (val) => {console.log(val)})


coding.forEach(
    function (item) {
// console.log(item);
    }
)



function printme(item){
console.log(item);
}
// coding.forEach(printme);



coding.forEach(function (val,index,array){
    // console.log(val,index,array)
})

const mycoding = [
    {
        languageName:"c++",
        languageFileName:"python"
     },
    {
        languageName:"jsvascript",
        languageFileName:"bhailang"
    },
    {
        languageName:"golang",
        languageFileName:"ruby"
    }
]

mycoding.forEach(function(item){
console.log(item.languageName)
})