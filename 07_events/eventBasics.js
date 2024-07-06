 // <!-- onclick="alert('hello bhaiya')"-->

    // document.getElementById("owl").onclick = function(){
    //     alert('owl hai bhaiya')
    // }

    //attachEvent()       //ye dono phle use hota thha
    //jquery - on

        //@@@@@@@@@@@@@@@@@@ ye sab ke baare me padhna hai #important @@@@@@@@@@@@@
    //timestamp  //type      //defaultPrevented
    //targer     //toElement //srcElement //currentElement
    //clientX    //clientY   //screenX    //screenY
    //altKey     //ctrlKey   //shiftKey   //keyCode

    // let owl = document.getElementById("owl")
    // owl.addEventListener("click",(e)=>{alert('are binod e toh ullu hai')
    // console.log(e);
    // },false);




    // document.getElementById("images").addEventListener("click", (e) => {
    //   console.log("click inside th ul");
    // });

    // document.getElementById("owl").addEventListener("click", (e) => {
    //   console.log("owl clicked");
    //   e.stopPropagation(); //ye preventDefault ke jaisa hai
    // });




    // document.getElementById("google").addEventListener("click", (e) => {
    //   alert("google clicked lekin preventDefault() hai");
    //   console.log("hello")
    //   e.preventDefault(); //ye stopPropagation ke jaisa hai
    //   e.stopPropagation();
    // });

    //eventpropagation iska do concept hai
    // <1> event bubbling(false {default})  <2> event capturing(true)



      ///////////small event work like project
      
      document.querySelector("#images").addEventListener("click",function(e){
        // console.log(e.target.parentNode);
        console.log(e.target.tagName);
  
         if(e.target.tagName === 'IMG'){
          // console.log(e.target.id  )
          let removeIt = e.target.parentNode;
          removeIt.remove();
         }
    
          // removeIt.parentNode.removeChild(removeIt);
          },false)
  