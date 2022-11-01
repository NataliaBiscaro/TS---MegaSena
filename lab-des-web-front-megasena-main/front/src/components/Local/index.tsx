import {HTMLAttributes} from "react";
import {LocalSld } from "./styles";


type Props = HTMLAttributes<HTMLElement> &{
    localSorteio: string,
    nomeMunicipioUFSorteio: string,
}

export function Local({localSorteio, nomeMunicipioUFSorteio} : Props): JSX.Element{
    return (
    <LocalSld>
        Sorteio realizado no {localSorteio} em {nomeMunicipioUFSorteio}
    </LocalSld>
    );
}