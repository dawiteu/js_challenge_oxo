let cols = document.querySelectorAll(".col"); // prend toute les 'cols' en compte / endroits ou l'user peut cliquer ; 
let jouer = document.querySelector("#joueur"); // le span qui va afficher X ou O pour voir  qui joue (le h3 en dessous du tableau; ) 

//  condition de joueur 
        // comme il y en a que deux, pour l'alterance, nous utiliserons un TRUE si c'est O et FALSE si c'est X; 
let joueurAct = false; // X  // 
            //=  true; // O  


let enjeu = true; // Par default, quand on va lancer le jeu, on est "en jeu"; 


let tabJeu = [];     // tableau dans lequel nous "stockerons" QUI a cliquer à quel endroit  
let click = 0        // on compte le nombre de click. 


const gagneCond = [ // tableau avec les conditions de victoire 
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
];


let check = () => { // function qui va vérifier s'il y a un 20<3 ou non. 
    
    for(let i=0; i <= 7; i++){
        let checkPos = gagneCond[i]; 
        let posA = tabJeu[checkPos[0]];
        let posB = tabJeu[checkPos[1]];
        let posC = tabJeu[checkPos[2]]; 

        if(posA != undefined && posB != undefined && posC != undefined){ // si toutes les positions existes, en tous cas celles qui doivent etre testées.  
            if(posA == posB && posB == posC){   // si elles sont tous les mêmes 
                console.log('gagné!');
                jouer.parentElement.innerHTML="On a un gagnant! C'est : "+posC; 
                enjeu=false; // on sort du jeu;     
            }else if (click > 8) {  // si le nombre de "click" est + de 8, on peux supposer que la partie est terminée par un match null. 
                enjeu = false;
                jouer.parentElement.innerHTML = "match nul !";
                return false;
            }
        }
    }
}


cols.forEach((e) => {                                                        // pour tous les éléments HTML dans lesquel les utilisateurs peuvent cliquer.  
    e.addEventListener("click", () => {                                      // nous écoutons si l'il y a un click dessus.
        if(enjeu){                                                           // si nous sommes toujours en jeu? (= pas de 20<3). 
            let pos = e.getAttribute('id').substring(1);                     // on prend l'id (qui est en fait la position de la div. oui oui, on pouvais le faire autrement.. );
            check();                                                         // on check une premiere fois. ref: ligne 29. 
            console.log(tabJeu);                                               
            if (joueurAct == true) {                                         // si c'est le tour de O de jouer. 
                if(e.innerHTML == ""){                                       // on check si la div est 'vide' ( = on ne l'a pas cliqué avant)
                    e.innerHTML = "O";                                          // on ecrit "O" a l'1terrieur. 
                    tabJeu[pos-1] = "O";                                     // dans le tableau ref ligne 13 a la position ou cela a ete cliquer, on place la lettre O.  -1 car le tableau commence par O et les div par 1. 
                    jouer.innerHTML= "X";                                    // on dit que c'est a X de jouer (h3 juste apres la grille). 
                    joueurAct=false;                                        // on change le joueur. 
                    click++                                                 // on ajouter un click 
                    check();                                                // on reverifie ( ref ligne 29 )
                }
            }else{                                                          // si c'est le tour de X de jouer. 
                if(e.innerHTML == ""){                                      //  comme 59 - 65 mais pour X. 
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
