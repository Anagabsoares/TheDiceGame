var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2= Math.floor((Math.random() * 6) + 1);


if (randomNumber1 === 1){
    document.querySelector("#player1").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice1.png")
}
if (randomNumber1 === 2){
    document.querySelector("#player1").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice2.png")
}
if (randomNumber1 === 3){
    document.querySelector("#player1").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice3.png")
}
if (randomNumber1 === 4){
    document.querySelector("#player1").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice4.png")
}
if (randomNumber1 === 5){
    document.querySelector("#player1").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice5.png")
}
if (randomNumber1 === 6){
    document.querySelector("#player1").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice6.png")
}

if (randomNumber2 === 1){
    document.querySelector("#player2").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice1.png")
}
if (randomNumber2 === 2){
    document.querySelector("#player2").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice2.png")
}
if (randomNumber2 === 3){
    document.querySelector("#player2").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice3.png")
}
if (randomNumber2 === 4){
    document.querySelector("#player2").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice4.png")
}
if (randomNumber2 === 5){
    document.querySelector("#player2").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice5.png")
}
if (randomNumber2 === 6){
    document.querySelector("#player2").setAttribute("src", "/Users/gabi/Desktop/TheDiceGame/images/dice6.png")
}

if(randomNumber1 > randomNumber2){
document.querySelector("h1").textContent = "🏅 Player 1 won!"
}if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 won!🏅"
}if (randomNumber2 === randomNumber1){
    document.querySelector("h1").textContent = "Draw"

}

document.getElementById("button-play").addEventListener("click", function() {
    location.reload()
});

