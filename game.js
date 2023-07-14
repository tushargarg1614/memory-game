var card=document.querySelectorAll(".card")
console.log(card)

var firstCard;
var secondCard;
isFlipped=false;

card.forEach((c)=>{c.addEventListener("click",flip)})
 function flip(){
    this.classList.add("flip")
    if(isFlipped==false){
        isFlipped=true
        firstCard=this
    }
    else{
        secondCard=this
        check()
            
    }
 }
function check(){
    if(firstCard.dataset.image===secondCard.dataset.image){
        return success();
      
    }
    else{
        fail()
    }
}
var reset=(()=>{isFlipped=false

})


var success=(()=>{
    firstCard.removeEventListener("click",flip)
    secondCard.removeEventListener("click",flip)
    isFlipped=false
    

})
var fail=(()=>{setTimeout(()=>{
    firstCard.classList.remove("flip")
secondCard.classList.remove("flip")
},700)
reset()
})

function shuffel(){
    card.forEach((c)=>{
   var index=Math.floor(Math.random()*16)
    c.style.order=index
})
}
shuffel();
