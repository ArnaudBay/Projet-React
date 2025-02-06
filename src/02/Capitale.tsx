
interface props{
    pays: string
    ville: string
}

export default function Props(Props:props){
    return (
        <div>
            LA capitale de <strong>{Props.pays}</strong>est <strong>{Props.ville}</strong>
        </div>
    )
}