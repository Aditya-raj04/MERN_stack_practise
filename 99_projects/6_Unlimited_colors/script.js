//random color generator
let randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  //function to start and stop
  let intervalId;
  
  const startChangingColor = function () {
    if (intervalId == null) {
      intervalId = setInterval(changeBgColor, 1000);
    }
    //  if(!intervalId){
    //   intervalId = setInterval(changeBgColor, 2000); //same as above
    //  }
  
    //  intervalId = setInterval(changeBgColor, 2000);
    function changeBgColor() {
      document.querySelector('body').style.backgroundColor = randomColor();
    }
  };
  
  //stop
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  