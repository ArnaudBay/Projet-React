//import Pay
import Country from './Pays'


interface TypePays {
    name: string
    flag: string
    capital: string
    population: number
}

const ListPays:Array<TypePays> = [
    {
        name: "Chine",
        capital: "Pékin",
        population: 5000000,
        flag: "/img/china.png",
    },
    {
        name: "cameroun",
        capital: "Yaoundé",
        population: 10000000,
        flag: "/img/cameroun.png",
    }
];



export default function PaysApp() {

    const LesPays = ListPays.map(function(p, index) {
        return (
            <Country 
                key={index} 
                name={p.name} 
                capital={p.capital} 
                flag={p.flag} 
                population={p.population} />
        )
    })
    return (
        <div>
            <h1>Liste des pays</h1>
            {LesPays}
        </div>
    )
}