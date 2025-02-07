

import Etudiant from "../02/Etudiant"
import Hello from "../02/Hello";

function transform (valeur: number, index: number){


    return(
        <div key= {index}>chiffre:{valeur}</div>
    )
}
function transform2 (nom: string, index: number){
    return(
        //<div key= {index}>Bienvenue {nom}</div>
        <Hello key= {index} name={nom} />
    )
}
export default function App03(){
    //turn(
        
        
   //
  const data = [1, 2, 3, 4, 5];
    const listEtud = data.map (transform);

    const data2 = ["jojo", "BAYALE", "Moriac", "CHRIST"];
    const bienvenue = data2.map (transform2);
    
 return(
    <div>
        {listEtud} <hr />
        {bienvenue}
    </div>
 )

   
}
 

