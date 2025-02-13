import { useState } from "react";

export default function App() {
    const [compteur, setCompteur]= useState(0)
    //let value = 0
    function augmenter () {
        //setCompteur = Compteur + 1; //Interdit
        setCompteur (compteur + 1);
    }
    
     function decrementer () {
        //setCompteur = Compteur + 1; //Interdit
        if (compteur > 0){
            setCompteur (compteur - 1);
        }
        
     }
    return (
        <div>
            <button onClick={augmenter}>Augmenter</button>
            <button onClick={decrementer}>Decrementer </button>
            <div>Compteur:{compteur} </div>
        </div>
    )
}