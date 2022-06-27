let params;
let playerOne, playerTwo;

window.onload = function (){
    const url = document.location.href;
    params = url.split('?')[1].split('&');
    playerOne = params[0].slice(10);
    playerTwo = params[1].slice(10);
}