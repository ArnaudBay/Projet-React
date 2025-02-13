import { useState } from 'react';

export default function BtnDrap() {
    const [drapeau, setDrapeau] = useState("public/img/rca.png");
    function afficherDrapeau(nom: string) {

    }

    return (
        <div>
            <p>SANGO/ANGLAIS</p>
            <button onClick={() => setDrapeau('public/img/rca.png')}>SANGO</button>
            <button onClick={() => setDrapeau('public/img/nigeria.png')}>ANGLAIS</button><th></th>
            {drapeau && <img src={drapeau} alt="Drapeau"  style={{ width: '50px', height: 'auto' }}/>}
        </div>
    );
}