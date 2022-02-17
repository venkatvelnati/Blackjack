let sum=0;
let canPlay=true;
function resetGame(){
    let message="Click Start Game to Play";
    let buttonMessage="PLAY";
    canPlay=true;
    document.getElementById("message").textContent=message;
    document.getElementById("button").innerHTML=buttonMessage;
    startGame();
}

function startGame(){
    if(canPlay==true)
        playGame();
    else
        endGame();
}
function playGame(){
    message="Click the button to DRAW";
    document.getElementById("message").textContent=message;
    buttonMessage="DRAW";
    document.getElementById("button").innerHTML=buttonMessage;
    sum+=generateNumber();
    document.getElementById("sum").innerHTML=sum;
    if(sum < 21)
       message="Want to draw one more card ?";
    else if(sum === 21){
        message="You have a won";
        resetGame();
    }
    else{
        canPlay=false;
        startGame();
    }
}

function endGame(){
    message="You have lost the game. Want to play another game";
    document.getElementById("message").textContent=message;
    buttonMessage="PLAY AGAIN ?";
    document.getElementById("button").innerHTML=buttonMessage;
    sum=0;
    resetGame();
}    
function generateNumber(){
    return Math.floor(Math.random()*9)+2;
}