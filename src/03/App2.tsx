
import Etudiant from "../02/Etudiant"

const listEtud = [
    {
    Nom: "jojo",
    age: "12",
    phone: "00000",
    },

    {
        Nom: "jojo",
        age: "12",
        phone: "00000",
        }
]

function EtudiantComponent({ Nom, age, phone }: { Nom: string; age: string; phone: string }) {
    return (
        <div>
            <p>Nom: {Nom}</p>
            <p>Age: {age}</p>
            <p>Phone: {phone}</p>
        </div>
    );
}

export default function App02(){
    const etudiants = listEtud.map(function(e: any, index: number){
        return (
            <EtudiantComponent key={index} 
                Nom={e.Nom} 
                age={e.age} 
                phone={e.phone} />
        )
    });

    return (
        <div>
            <h1>Liste étudiants</h1>
            {etudiants}
        </div>
    )
}