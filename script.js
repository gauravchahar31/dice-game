let playerOneName, playerTwoName;

document.getElementById("gameStartBtn").onclick = function (){
    playerOneName = document.getElementById("playerOne").value;
    playerTwoName = document.getElementById("playerTwo").value;

    if(playerOneName == ''){
        playerOneName = 'Player1';
    }
    if(playerTwoName == ''){
        playerTwoName = 'Player2';
    }
    
    const url = '/game.html?playerOne=' + encodeURIComponent(playerOneName) + '&playerTwo=' + encodeURIComponent(playerTwoName);
    location.href = url;
}