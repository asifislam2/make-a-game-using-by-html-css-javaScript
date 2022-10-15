let wanna = document.querySelector(".wanna")
let inputname = document.querySelector(".inputname")
let button = document.querySelector(".button")
let error = document.querySelector(".error")


// player one variable 

let playerone = document.querySelector(".playerone")
let playeroneinput = document.querySelector(".playeroneinput")
let playeronebutton = document.querySelector(".playeronebutton")
let playeroneerror = document.querySelector(".playeroneerror")

// player one variable end here 


// player two variable here 

let playertwo = document.querySelector(".playertwo")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobutton = document.querySelector(".playertwobutton")
let playertwoerror = document.querySelector(".playertwoerror")

// player two variable end here 


// player two variable here 

let playertwo__display = document.querySelector(".playertwo__display")
let playertwoinput__number = document.querySelector(".playertwoinput__number")
let playertwobutton__button = document.querySelector(".playertwobutton__button")
let playertwoerror__error = document.querySelector(".playertwoerror__error")
let mycount = document.querySelector(".mycount")

// player two variable end here 

let count = 5;






button.addEventListener("click", function(){

    if(inputname.value == ""){
        error.innerHTML = "Please Write Somthing "
        error.style.display = "block"
    }else{
        wanna.style.display = "none"
        inputname.style.display = "none"
        button.style.display = "none"
        playeroneinput.style.display = "block"
        playeronebutton.style.display = "block"
        playerone.style.display = "block"
        playerone.innerHTML = inputname.value
        error.style.display = "none"
    }

})

// player one code here 


playeronebutton.addEventListener("click", function(){

    if(playeroneinput.value > 10 || playeroneinput.value <1){
        playeroneerror.innerHTML = "Please Input Valid Number 1 to 10"
        playeroneerror.style.display = "block"

    }else{
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
        playeroneerror.style.display = "none"
        playerone.style.display = "none"

        
        playertwo.style.display = "block"
        playertwoinput.style.display = "block"
        playertwobutton.style.display = "block"
        playertwo.innerHTML = "player -2 "

    }

})

// player one code end here 

playertwobutton.addEventListener("click", function(){
    
    if(playertwoinput.value == ""){
        playertwoerror.innerHTML = "Please input Your Name"
        playertwoerror.style.display = "block"
    }else{

        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
        playertwoerror.style.display = "none"
        playertwo.style.display = "none"
        playertwo__display.style.display = "block"
        playertwo__display.innerHTML = playertwoinput.value
        playertwoinput__number.style.display = "block"
        playertwobutton__button.style.display = "block"
        playertwoerror__error.style.display = "block"

    }

})

playertwobutton__button.addEventListener("click", function(){

   
    if(playeroneinput.value == playertwoinput__number.value){
        playertwoerror__error.style.display = "block"
        playertwoerror__error.innerHTML = "player To is Winer"
    }else{
        count--
        mycount.innerHTML = count
       
        if(count == 0){
            playertwoerror__error.innerHTML = "player 1 is win"
        }
    }


})









