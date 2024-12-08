import Header from "../../components/Header/Header";
import Updates from "../../components/Updates/Updates";
import Footer from "../../components/Footer/Footer";
import React from "react";
import "./HomePage.css"

function HomePage() {
    return (
        <div className="home-page-main">
            <Header/>
            <Updates/>
            <Footer/>
        </div>
    );
}

export default HomePage
