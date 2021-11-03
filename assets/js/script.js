let coins = document.querySelector(".coins");
let flipBtn = document.getElementById("flip-button");
let resetBtn = document.getElementById("resert-button");
let heads = document.querySelector("#heads")
let tails = document.querySelector("#tails")
let result;

flipBtn.addEventListener("click", ()=>{
    let i = Math.floor(Math.random() * 2);


    if (i > 0 ) {
        heads.style.display = "none";
        tails.style.display = "block";
    } else {
        heads.style.display = "block";
        tails.style.display = "none";
    }
})


// incremenet score function