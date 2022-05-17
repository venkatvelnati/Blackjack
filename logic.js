let sum=0;
let canPlay=true;

function resetGame(){
    
    let message="Click Start Game to Play";
    let buttonMessage="PLAY";
    document.getElementById("message").textContent=message;
    document.getElementById("button").innerHTML=buttonMessage;
    console.log("nice")
    console.log(document.getElementById("message")); 
}
function resetReal() {
    document.location.reload();
}
function playGame(){
    if(canPlay==false){
        canPlay=true;
        resetReal()
    }
    message="Click the button to DRAW";
    buttonMessage="DRAW";
    document.getElementById("message").textContent=message; 
    document.getElementById("button").innerHTML=buttonMessage;
    sum+=generateNumber();
    document.getElementById("sum").innerHTML=sum;
    if(sum < 21)
       message="Want to draw one more card ?";
    else
        endGame();
}

function endGame(){
   
    if(sum > 21)
        message="You have lost the game.";
    else    
        message="You have WON !!!"
    document.getElementById("message").textContent=message;

    buttonMessage="PLAY AGAIN ?";
    document.getElementById("button").innerHTML=buttonMessage;
    sum=0;
    canPlay=false;
}   

function generateNumber(){
    return Math.floor(Math.random()*9)+2;
}