import "./CardUnit.css"
import {GiFoxHead} from "react-icons/gi";
import Cards from "../../json/Cards.json"

interface CardUnitProps {
    id:number,
    title: string,
    image: string,
    text:string,
}

const CardUnit:React.FC<CardUnitProps> = ({id,text,title,image}) => {

    return (
        <div className={"cards-main-container"}>
                <div key={id} className="card-container">
                    <div className="card-header">
                        <GiFoxHead />
                        <h3>{title}</h3>
                    </div>
                    <img src={image} alt={title} className="card-image" />
                    <p>{text}</p>
                    <div className={"card-container-button"}>
                    <button>Saber mais</button>
                    </div>
                </div>
        </div>
    )
}

export default CardUnit