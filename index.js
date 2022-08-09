function getRandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomNumber1 = getRandomNumber(1,6);
var randomNumber2 = getRandomNumber(1,6);
if(randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
}
else if(randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
}
else if(randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
}
else if(randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
}
else if(randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
}
if(randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
}
else if(randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
}
else if(randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
}
else if(randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
}
else if(randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
else {
    document.querySelector("h1").innerHTML = "TIED";
}