
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// element.setAttribute(name, value);
if (randomNumber1 == 1) {
    var image1 = document.getElementsByClassName("img1");
    image1[0].setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 == 2) {
    var image1 = document.getElementsByClassName("img1");
    image1[0].setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 == 3) {
    var image1 = document.getElementsByClassName("img1");
    image1[0].setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 == 4) {
    var image1 = document.getElementsByClassName("img1");
    image1[0].setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 == 5) {
    var image1 = document.getElementsByClassName("img1");
    image1[0].setAttribute("src", "./images/dice5.png");
} else if (randomNumber1 == 6) {
    var image1 = document.getElementsByClassName("img1");
    image1[0].setAttribute("src", "./images/dice6.png");
}

if (randomNumber2 == 1) {
    var image2 = document.getElementsByClassName("img2");
    image2[0].setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 == 2) {
    var image2 = document.getElementsByClassName("img2");
    image2[0].setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 == 3) {
    var image2 = document.getElementsByClassName("img2");
    image2[0].setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 == 4) {
    var image2 = document.getElementsByClassName("img2");
    image2[0].setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 == 5) {
    var image2 = document.getElementsByClassName("img2");
    image2[0].setAttribute("src", "./images/dice5.png");
} else if (randomNumber2 == 6) {
    var image2 = document.getElementsByClassName("img2");
    image2[0].setAttribute("src", "./images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🏴 Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player2 Wins! 🏴";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector('h1').innerHTML = "Tie!";
} 
//document.querySelector('h1').innerHTML = "This worked.";