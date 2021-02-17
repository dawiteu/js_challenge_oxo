let cols = document.querySelectorAll(".col"); 
let jouer = document.querySelector("#joueur"); 

let joueurAct = false; // X  
            //=  true; // O 
cols.forEach((e) =>{
    e.addEventListener("click", () => {
        if (joueurAct == true) {
            e.innerHTML = "O";
            jouer.innerHTML= "X";
            joueurAct=false;
        }else{
            e.innerHTML = "X";
            jouer.innerHTML= "O";
            joueurAct=true; 
        }
    });
})
