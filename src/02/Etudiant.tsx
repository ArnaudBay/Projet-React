//import Props from "./Capitale"



interface Props{
    Nom: string
    age: string
    phone:string
}

export default function Etudiant(props: Props){

return(
    <div>
       <h3> Etudiant: {props.Nom} <br />  
            age:  {props.age} <br />
            phone: {props.phone} <br />
            </h3>
    </div>
)
}