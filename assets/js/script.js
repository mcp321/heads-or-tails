document.getElementById("flip").disabled = true;


function EnableFlip(shouldEnable) {
    if (shouldEnable === 'true') {
        document.getElementById("flip").disabled = true;
    } else {
        document.getElementById("flip").disabled = false;
    }
}

function FlipButton() {
    // Disable button and Radio buttons till we are done flipping
    document.getElementById("flip").disabled = true;
    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;

    // Run the code to flip the coin
    let i = Math.floor(Math.random() * 2),
        heads = document.getElementById("heads")
        tails = document.getElementById("tails");

        if (i > 0) {
            heads.style.display = "none";
            tails.style.display = "block";
        } else {
            heads.style.display = "block";
            tails.style.display = "none";
        }

}



















// let buttons = document.getElementsByTagName("button")
// let flipBtn = document.getElementById("flip-button")



// for (let button of buttons)
//     button.addEventListener("click", function(){ 
//         if(this.getAttribute("data-type") === "flip"){

//     let i = Math.floor(Math.random() * 2);
//     let heads = document.getElementById("heads")
//     let tails = document.getElementById("tails")

    
//                 if (i > 0) {
//                     heads.style.display = "none";
//                     tails.style.display = "block";
//                 } else {
//                     heads.style.display = "block";
//                     tails.style.display = "none";
//                 }
        
//     addScore = document.getElementById("heads-score")
//     if (i===0 && this.getAttribute("data-type") === "heads"){
         
        
//     }else if (i > 0 && this.getAttribute("data-type") === "tails"){
    
                
//     }}})
        