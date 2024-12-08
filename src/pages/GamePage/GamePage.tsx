import "./GamePage.css"
import UnityGame from "../../components/UnityGame/UnityGame";
import NavBar from "../../components/NavBar/NavBar";

function GamePage(){
    return (
    <div className={"unity-game-main"}>
        <div className={"unity-game-navbar"}>
        <NavBar/>
        </div>
        <div className={"unity-game"}>
        <UnityGame/>
        </div>
    </div>
    )
}

export default GamePage