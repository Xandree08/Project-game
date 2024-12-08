import "./Updates.css"
import Cards from "../Cards/Cards";
import { GrUpdate } from "react-icons/gr";


function Updates (){
    return (
        <div className={"updates-main"}>
            <h2> Notas de Atualizações <GrUpdate/></h2>
            <Cards/>
        </div>
    )
}

export default Updates