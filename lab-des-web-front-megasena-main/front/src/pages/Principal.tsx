import { useEffect, useState } from "react";
import { Cabecalho } from "../components/Cabecalho"
import { Acumulado } from "../components/Acumulado";
import { Local } from "../components/Local"

import { Valor } from "../components/Dezenas";
import { Proximo } from "../components/Proximo";
import services from "../services";
import { Props } from "../types";



export default function Principal() {
    const [concurso, setConcurso] = useState({} as Props);

    useEffect(
        function(){
        (
            async function () {
                const numero = Math.floor(Math.random() * 2533);
                const concurso: Props = await services.get(numero);
                console.log(concurso)
                setConcurso(concurso)
                
            }
        )()
        },
        []
    );

    return (
        <>
        <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao}/>
        {concurso.acumulado && <Acumulado />}
        <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio} />
        <Valor listaDezenas={concurso.listaDezenas}/>             
        <Proximo dataProximoConcurso={concurso.dataProximoConcurso} valorAcumuladoProximoConcurso={concurso.valorAcumuladoProximoConcurso}  ></Proximo>
        </>
      
    
    );
    
}