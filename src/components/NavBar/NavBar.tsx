import "./NavBar.css"
import { GiFoxHead } from "react-icons/gi";
import { TbWorld ,TbMenu2} from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import {useState} from "react";


function NavBar (){
    const [activeMenu , setActiveMenu] =useState(false);
    return (
        <nav className={"navbar-main"}>
            <div className={"navbar-logo"}>
                <span> PROJECT A3 </span>
                <GiFoxHead/>
            </div>
            <ul className={"navbar-list"}>
                <li><a> O Jogo </a></li>
                <li><a> Noticias</a></li>
                <li><a> Atualizações </a></li>
            </ul>
            <div className={"navbar-search"}>
                <FaSearch/>
                <input type={"text"}/>
            </div>
            <div className={"navbar-button"}>
                <a href={"/"}> Jogue Agora </a>
            </div>
            <div className={"navbar-server"}>
                <span>BR</span>
                <TbWorld/>
            </div>
            <div className={"navbar-menu"}>
                <TbMenu2 onClick={()=>{setActiveMenu(!activeMenu)}}/>
                {activeMenu && (
                    <ul className={"navbar-menu-list"}>
                        <li> <a href={"/play-now"}> Jogue Agora </a></li>
                        <li> <a href={"/#About-game"}> Sobre</a></li>
                        <li><a href={"/#Notices"}> Noticias</a></li>
                        <li><a href={"/#Updates"}> Atualizações </a></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default NavBar;