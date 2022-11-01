import {HTMLAttributes} from "react";
import {DezenasSld} from "./styles";


type Props = HTMLAttributes<HTMLElement> &{
    listaDezenas: string[]
}

export function Dezenas({listaDezenas} : Props){
    return (
    <DezenasSld>
        {listaDezenas[0]}
        {listaDezenas[1]}
        {listaDezenas[2]}
        {listaDezenas[3]}
        {listaDezenas[4]}
        {listaDezenas[5]}
    </DezenasSld>
    );
}