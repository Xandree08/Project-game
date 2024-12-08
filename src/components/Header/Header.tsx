import "./Header.css"
import NavBar from "../NavBar/NavBar";
import HeaderContent from "../HeaderContent/HeaderContent";
import React, {useEffect, useState} from "react";

function Header (){
    return (
        <div className={"header-main"}>
            <div className={"header-background"} style={{}}></div>
            <NavBar/>
            <HeaderContent/>
        </div>
    )
}

export default Header