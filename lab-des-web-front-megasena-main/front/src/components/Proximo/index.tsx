import {HTMLAttributes} from "react";
import { ProximoSld } from "./styles";


type Props = HTMLAttributes<HTMLElement> &{
    dataProximoConcurso: string;
}

export function Proximo({dataProximoConcurso} : Props): JSX.Element{
    return (
    <ProximoSld>
        O próximo sorteio será realizado em {dataProximoConcurso}
    </ProximoSld>
    );
}