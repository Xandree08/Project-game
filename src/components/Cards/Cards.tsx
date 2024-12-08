import "./Cards.css"
import CardUnit from "../CardUnit/CardUnit";
import Card from "../../json/Cards.json"

interface CardUnitProps {
    id:number,
    title: string,
    image: string,
    text:string,
}

function Cards() {
    const cardsData:CardUnitProps[] = Card.cards;
    return (
        <div className={"cards-main"}>
            {cardsData.map( (card)=> (
                <CardUnit
                    id={card.id}
                    title={card.title}
                    image={card.image}
                    text={card.text}/>
            ))}
        </div>
    )
}

export default Cards