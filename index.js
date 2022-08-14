var imageAray = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
var player1Score = Math.floor(Math.random() * 6);
var player2Score = Math.floor(Math.random() * 6);
document.querySelector(".dice .img1").setAttribute("src", imageAray[player1Score]);
document.querySelector(".dice .img2").setAttribute("src", imageAray[player2Score]);
if(player1Score > player2Score){
    document.querySelector("h1").innerHTML = "🚩Player 1 Win!";
}
else if ( player1Score < player2Score){
    document.querySelector("h1").innerHTML = "Player 2 Win!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}