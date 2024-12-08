import "./Header.css"
import NavBar from "../NavBar/NavBar";
import HeaderContent from "../HeaderContent/HeaderContent";

function Header (){
    return (
        <div className={"header-main"}>
            <div className={"header-background"}></div>
            <NavBar/>
            <HeaderContent/>
        </div>
    )
}

export default Header