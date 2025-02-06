import Capitale from "./Capitale"
import Etudiant from "./Etudiant"
import Hello from "./Hello"


//PROPS

 interface Props {
    name:string // nom de l'application
 }
export default function App02(props:Props) {

    //jsx (interface utilisateur)
    return (
        <div>
            <Capitale pays="RCA" ville="Bangui"/>
            <Capitale pays="France" ville="Paris"/>
            <Capitale pays="RCA" ville="Bangui"/>


            <h1>Etudiant</h1>
            <Etudiant Nom="jojo" age="12" phone="00000"/>
            <Etudiant Nom="BAYALE" age="22" phone="00000"/>
            <Etudiant Nom="Moriac" age="22" phone="72181910"/>
            <Etudiant Nom="CHRIST" age="23" phone="75000000"/>


            <h1>Welcome</h1>
            <Hello  Lang= "en" name="jojo" />
            <Hello  Lang= ""  name="BAYALE" />
            <Hello name="Moriac" />
            <Hello name="CHRIST" />
        </div>
    )

}