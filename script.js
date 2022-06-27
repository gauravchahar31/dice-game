let playerOneName, playerTwoName;

document.getElementById("gameStartBtn").onclick = function (){
    playerOneName = document.getElementById("playerOne").value;
    playerTwoName = document.getElementById("playerTwo").value;
    const url = '/dice-game/game.html?playerOne=' + encodeURIComponent(playerOneName) + '&playerTwo=' + encodeURIComponent(playerTwoName);
    location.href = url;
}