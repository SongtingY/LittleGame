
var randomNumber1 = Math.floor(Math.random()* 6) +1;
var randomNumber2 = Math.floor(Math.random()* 6) +1;

var img1 = document.getElementsByTagName('img')[0];
img1.src = "images/dice" + randomNumber1 + ".png";
var img2 = document.getElementsByTagName('img')[1];
img2.src = "images/dice" + randomNumber2 + ".png"

if (randomNumber1 > randomNumber2){
    document.getElementsByTagName('h1')[0].innerText = '🚩 Player 1 Wins!'
} else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName('h1')[0].innerText = 'Player 2 Wins! 🚩'
} else {
    document.getElementsByTagName('h1')[0].innerText = 'Draw!'
}


// new way!
// var randomNumber1 = Math.floor(Math.random()* 6) +1;
// var randomResource = "images/dice" + randomNumber1 + ".png";
// var img1 = document.getElementsByTagName('img')[0];
// img1.setAttribute("src", randomResource);