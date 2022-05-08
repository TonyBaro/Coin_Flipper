console.log("page loaded")

var Coin="Heads"

function fullFlip(){
    drawCoin()
    setTimeout(flip,4999)
}

function flip(){
    var x=Math.floor(Math.random()*(2))
    console.log(x)
    if (x==0){
        Coin = "Heads"
        document.querySelector(".flip").innerHTML=
        `<img id=coin onmousedown="fullFlip()" src="./assets/heads.png" alt="heads">
        <p>${Coin}</p>`
        console.log("heads")
        

    }
    if (x==1){
        Coin = "Tails"
        document.querySelector(".flip").innerHTML=
        `<img id=coin onmousedown="fullFlip()" src="./assets/tails.png" alt="tails">
        <p>${Coin}</p>`
        console.log("tails")

    }
}

function drawCoin(){
    document.getElementById("coin").style.transform="rotateX(720deg)";
}
console.log(document.querySelector(".flip").innerHTML)