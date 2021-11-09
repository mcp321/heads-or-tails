

let buttons = document.getElementsByTagName("button")
let flipBtn = document.getElementById("flip-button")



for (let button of buttons)
    button.addEventListener("click", function(){ 
        if(this.getAttribute("data-type") === "flip"){

    let i = Math.floor(Math.random() * 2);
    let heads = document.getElementById("heads")
    let tails = document.getElementById("tails")

    
                if (i > 0) {
                    heads.style.display = "none";
                    tails.style.display = "block";
                } else {
                    heads.style.display = "block";
                    tails.style.display = "none";
                }
            
    } else if(this.getAttribute("data-type")=== "heads"){
        this.style.backgroundColor= "rgb(4, 119, 128)"

    } else if(this.getAttribute("data-type")=== "tails"){
        this.style.backgroundColor= "rgb(4, 119, 128)"

    }else if(this.getAttribute("data-type")=== "reset")
        this.style.backgroundColor = "rgb(4, 119, 128)"
    }
)
        

        


function tails(){

}

function reset(){

}
