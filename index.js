document.addEventListener('DOMContentLoaded',()=>{

const button = document.querySelector (".actionbtn")



const coin = document.querySelector("#coin")
const head = document.querySelector(".head")
const tail = document.querySelector(".tail")
//textos 
const headScoreText = document.querySelector("#head-score") 
const tailScoreText = document.querySelector("#tails-score") 
const resulText = document.querySelector("#resultado")

//contador de la puntuación
let headScore = 0;
let tailScore = 0;
let result = "" 


function Score(res){
 }//end Score

function newGame() {
    
    coin.setAttribute("class", "")
    

    let random  = Math.random()
   
    
    if (random<=0.5){
        result = "tails"
    }else{
        result = "head"
    }
     
  setTimeout(function(){
    coin.setAttribute("class","flip_" + result); },
    100)  
    

    setTimeout(function(){
        if (result=== "head"){
            headScore++
            headScoreText.innerText= headScore
        } else{
            tailScore++
            tailScoreText.innerText= tailScore
        }
        resulText.innerText = result
    },4000)
    

}//end newGame
    

button.addEventListener("click", newGame)



})//end
