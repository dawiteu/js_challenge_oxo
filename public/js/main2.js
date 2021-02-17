let cols = document.querySelectorAll(".col"); // prend toute les cols en compte
let jouer = document.querySelector("#joueur"); 

joueurAct=false; // c'est un humain qui commence ! ; 


let enjeu = true; // on commence le jeu en jouant; 


let tabJeu = []; 
let click = 0



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
            console.log(posA, posB, posC);
            if(posA == posB && posB == posC){
                console.log('gagné!');
                jouer.parentElement.innerHTML="On a un gagnant! C'est : "+posC; 
                enjeu=false; // on sort du jeu; 
                return false;
            }else if (click > 4) {
              enjeu = false 
              jouer.parentElement.innerHTML = "match nul !"
              return false;
            }
        }
    }
}
let randPos = () => {
    return Math.round(Math.random() * 8 ) +1;
} 

let aiJoue = () => {
    let chiffreHasard = randPos(); 
    console.log(chiffreHasard);
    let constructionNomDiv = "#i"+chiffreHasard; 
    let div = document.querySelector(constructionNomDiv); 
    if(div.innerHTML == ""){
        div.innerHTML = "O";
        tabJeu[ chiffreHasard-1 ] = "O";
        check();
    }else{
        aiJoue();
    }
}

cols.forEach((e) =>{
    e.addEventListener("click", () => { 
        if(enjeu){
            if(!joueurAct){
                let pos = e.getAttribute('id').substring(1); 
                check();
                if(e.innerHTML == ""){
                    e.innerHTML = "X";
                    jouer.innerHTML= "O";
                    tabJeu[pos-1] = "X"; 
                    joueurAct=true; 
                    click++
                    check();
                    if(enjeu){
                        let timer; 
                        timer = setTimeout( () => { 
                            jouer.innerHTML = "X";
                            aiJoue();
                            joueurAct=false;
                            clearTimeout(timer); 
                        }, 2000);
                    }
                }                   
            }

        }
    });
})
