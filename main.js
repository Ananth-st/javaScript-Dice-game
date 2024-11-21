// var randomImg = ["imgs/dice-six-faces-one.png","imgs/dice-six-faces-two.png","imgs/dice-six-faces-three.png","imgs/dice-six-faces-four.png","imgs/dice-six-faces-five.png","imgs/dice-six-faces-six.png"];
var randomImg = ["dice-six-faces-one.png","dice-six-faces-two.png","dice-six-faces-three.png","dice-six-faces-four.png","dice-six-faces-five.png","dice-six-faces-six.png"];
var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
document.querySelector(".img1").src = randomImg[randomNumber1];
document.querySelector(".img2").src = randomImg[randomNumber2];
function wins() {
    if(randomNumber1>randomNumber2){
        return "Player 1 Wins";
    }
    else if(randomNumber1<randomNumber2){
return "player 2 Wins";
    }
    else{
        return "draw";
    }
}
document.querySelector("h1").innerHTML = wins();