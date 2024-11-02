function randomNumberGenerate(length)
{
    var randomNum;
    for(var i=0;i<length;i++)
    {
        randomNum = Math.round(Math.random()*i+1);
    }
    return randomNum;
}
var randomNumPlayer1 = randomNumberGenerate(6);
var randomNumPlayer2 = randomNumberGenerate(6);


if(randomNumPlayer1==randomNumPlayer2){
    document.querySelector("h1").textContent ="🚩 Match Tied";
}else if(randomNumPlayer1>randomNumPlayer2){
    document.querySelector("h1").textContent ="🚩 player 1 wins";
}else{
    document.querySelector("h1").textContent ="Player 2 wins 🚩";
};

document.getElementsByClassName("img1")[0].src = "Images/dice"+randomNumPlayer1+".png";
document.getElementsByClassName("img2")[0].src = "Images/dice"+randomNumPlayer2+".png";

