

let coins = document.querySelector(".coins");
let flipBtn = document.querySelectorAll(".flip-button");
let resetBtn = document.getElementById("resert-button");
let heads = document.querySelector("#heads")
let tails = document.querySelector("#tails")
let result;

flipBtn.forEach(button => button.addEventListener("click", (event) => { 
    let i = Math.floor(Math.random() * 2);

    // get the id of the clicked button
    const headsOrTails = event.target.dataset.coin;
    console.log(headsOrTails)
    if(headsOrTails == "heads" && i > 0 || headsOrTails == "tails" && i == 0){

    }
    // if the id is the same as heads and i > 0 - the player chose heads and the flip was heads -> WIN
    // if the id is the same as heads and i === 0 - the player choose heads, but the flip was tails

    if (i > 0) {
        heads.style.display = "none";
        tails.style.display = "block";
    } else {
        heads.style.display = "block";
        tails.style.display = "none";
    }
}))


// incremenet score function