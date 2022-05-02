console.log("page loaded")

var Coin="heads"

function flip(){
    var x=Math.floor(Math.random()*(2))
    console.log(x)
    if (x==0){
        document.querySelector(".flip").innerHTML=
        `<img id=coin onmousedown="flip()" src="./assets/heads.png" alt="heads">
        <p>Heads</p>`

    }
    if (x==1){
        document.querySelector(".flip").innerHTML=
        `<img id=coin onmousedown="flip()" src="./assets/tails.png" alt="tails">
        <p>Tails</p>`

    }
}
console.log(document.querySelector(".flip").innerHTML)