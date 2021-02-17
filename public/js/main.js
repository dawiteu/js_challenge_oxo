let cols = document.querySelectorAll(".col"); // prend toute les cols en compte
let jouer = document.querySelector("#joueur"); 

//  condition de joueur
let joueurAct = false; // X  
            //=  true; // O 
let enjeu = true; // on commence le jeu en jouant; 


let tabJeu = []; 
let click = 0


//let tabJeu = ["","","","","","","",""]; 


const gagneCond = [ //condition de victoire 
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
];


let check = () => {
    
    for(let i=0; i <= 7; i++){
        let checkPos = gagneCond[i]; 
        let posA = tabJeu[checkPos[0]];
        let posB = tabJeu[checkPos[1]];
        let posC = tabJeu[checkPos[2]]; 

        if(posA != undefined && posB != undefined && posC != undefined){
            if(posA == posB && posB == posC){
                console.log('gagné!');
                jouer.parentElement.innerHTML="On a un gagnant! C'est : "+posC; 
                enjeu=false; // on sort du jeu; 
            }else if (click > 8) {
                enjeu = false 
              jouer.parentElement.innerHTML = "match nul !"
              return false
            }
        }
    }
}


cols.forEach((e) =>{
    e.addEventListener("click", () => { 
        if(enjeu){
            let pos = e.getAttribute('id').substring(1); 
            check();
            console.log(tabJeu);
            if (joueurAct == true) { 
                if(e.innerHTML == ""){
                    e.innerHTML = "O";
                    tabJeu[pos-1] = "O"; 
                    jouer.innerHTML= "X";
                    joueurAct=false;
                    click++
                    check();
                }
            }else{
                if(e.innerHTML == ""){
                    e.innerHTML = "X";
                    jouer.innerHTML= "O";
                    tabJeu[pos-1] = "X"; 
                    joueurAct=true; 
                    click++
                    check();
                }
            }     
        }
    });
})
