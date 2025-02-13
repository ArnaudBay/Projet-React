import { useState } from 'react';

export default function BtnDrap() {
    const [drapeau, setDrapeau] = useState("public/img/rca.png");
    const [capitale, setCapitale] = useState("");

    function afficherDrapeauEtCapitale(drapeau: string, capitale: string) {
        setDrapeau(drapeau);
        setCapitale(capitale);
    }

    return (
        <div>
            <p>COUNTRYS</p>
            <th><button onClick={() => afficherDrapeauEtCapitale('public/img/rca.png', 'Bangui')}>RCA</button></th>
            <th><button onClick={() => afficherDrapeauEtCapitale('public/img/senegal.png', 'Dakar')}>SENEGAL</button></th>
            <th><button onClick={() => afficherDrapeauEtCapitale('public/img/cameroun.png', 'Yaoundé')}>CAMEROON</button></th>
            <th><button onClick={() => afficherDrapeauEtCapitale('public/img/chine.png', 'Pékin')}>CHINE</button></th>
            <th><button onClick={() => afficherDrapeauEtCapitale('public/img/nigeria.png', 'Abuja')}>Nigeria</button></th>
            {drapeau && <img src={drapeau} alt="Drapeau" style={{ width: '50px', height: 'auto' }} />}
            {capitale && <p>Capitale: {capitale}</p>}
        </div>
    );
}