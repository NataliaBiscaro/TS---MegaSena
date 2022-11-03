import {HTMLAttributes} from "react";
import { ProximoSld } from "./styles";


type Props = HTMLAttributes<HTMLElement> &{
    dataProximoConcurso: string;
    valorAcumuladoProximoConcurso:string;
}

export function Proximo({dataProximoConcurso, valorAcumuladoProximoConcurso} : Props): JSX.Element{
    return (
    <ProximoSld>
        O próximo sorteio será realizado em {dataProximoConcurso} com valor acumulado de {valorAcumuladoProximoConcurso}
    </ProximoSld>
    );
}