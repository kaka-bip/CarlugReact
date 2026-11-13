import { useState } from "react";
// import { Button } from "../components/button";
import carro1 from "";
import carro2 from "";
import carro3 from "";

const imagens = [carro1, carro2,carro3]


export const Carrosel= () =>{

    const [Indice, setIndice] = useState(0);
    const anterior = () =>{
        setIndice(Indice === 0 ? imagens.length -1 : Indice - 1);
    }

    const proximo = () =>{
        setIndice(Indice === imagens.length - 1 ? 0 : Indice + 1)
    }

    return(
        <div className="Carrosel">
            <button onClick={anterior} className="seta esquerda"></button>
            <img src="" alt="" />
            <button onClick={proximo} className="seta direita"></button>
        </div>
    )
}