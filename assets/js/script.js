document.getElementById("flip").disabled = true;
let flipHeadsScore = 0;
let flipTailScore = 0;

let flipHeads = document.getElementById('heads-score');
let flipTails = document.getElementById('tails-score');

let userSelection; 
let resetButton = document.getElementById('reset');

function EnableFlip(selection) {
    userSelection = selection;
    document.getElementById("flip").disabled = false;
}

function FlipButton() {
    // Disable button and Radio buttons till we are done flipping
    document.getElementById("flip").disabled = true;
    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;

    // Run the code to flip the coin
    let i = Math.floor(Math.random() * 2),
        heads = document.getElementById("heads");
        tails = document.getElementById("tails");

        if (i > 0) {
            heads.style.display = "none";
            tails.style.display = "block";
        } else {
            heads.style.display = "block";
            tails.style.display = "none";
        }
    
        switch (userSelection.toLowerCase()) {
            case 'head':
                if (i <= 0){ 
                    flipHeadsScore +=1;
                    flipHeads.innerHTML = 'Heads: ' + flipHeadsScore;
                }
                break;
       
            default: 
            if(i > 0)
            flipTailScore +=1;
            flipTails.innerHTML = 'Tails: ' + flipTailScore;
    
                break;

             
        }
    }

   

    resetButton.addEventListener("click",() => {
        flipHeads.innerHTML = 'Heads: 0'
        flipTails.innerHTML = 'Tails: 0'
        
    });