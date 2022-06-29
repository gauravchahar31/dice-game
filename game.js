let params;
let playerOne, playerTwo;
let playerOneScore, playerTwoScore;

var rollDiceAudio = new Audio("/assets/rollDice.wav");

let images = [];
images[0] = "/assets/dice1.png";
images[1] = "/assets/dice2.png";
images[2] = "/assets/dice3.png";
images[3] = "/assets/dice4.png";
images[4] = "/assets/dice5.png";
images[5] = "/assets/dice6.png";

window.onload = function (){
    const url = document.location.href;
    params = url.split('?')[1].split('&');
    playerOne = params[0].slice(10);
    playerTwo = params[1].slice(10);
    document.getElementById("gameHeader").innerHTML = playerOne + " VS " + playerTwo;
    document.getElementById("playerOneName").innerHTML = playerOne;
    document.getElementById("playerTwoName").innerHTML = playerTwo;
}

function diceRotate(){
    let startPoint = 0;
    let endPoint = images.length - 1;

    playerOneScore = Math.floor((Math.random() * 6) + 1);
    playerTwoScore = Math.floor((Math.random() * 6) + 1);

    rollDiceAudio.play();

    var imageInterval = setInterval(function() {
        document.getElementById("diceImageOne").src = images[startPoint];
        document.getElementById("diceImageTwo").src = images[startPoint];

        startPoint++;

        if(startPoint > endPoint){
            clearInterval(imageInterval);
            setValues();
            result();
        }
    }, 100);
}

function setValues(){
    document.getElementById("diceImageOne").src = images[playerOneScore - 1];
    document.getElementById("diceImageTwo").src = images[playerTwoScore - 1];
    document.getElementById("playerOneScore").innerHTML = "Score : "+playerOneScore;
    document.getElementById("playerTwoScore").innerHTML = "Score : "+playerTwoScore;
}

function result(){
    if(playerOneScore > playerTwoScore){
        document.getElementById("resultText").innerHTML = playerOne + " Wins 🤩";
    }
    else if(playerTwoScore > playerOneScore){
        document.getElementById("resultText").innerHTML = playerTwo + " Wins 🤩";
    }
    else{
        document.getElementById("resultText").innerHTML = "It's a TIE! 🤪";
    }

    document.getElementById("playButton").innerHTML = "Roll Again";
}

document.getElementById("playButton").onclick = function (){
    diceRotate();
}