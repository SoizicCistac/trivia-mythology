import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import couronne from "../img/couronne.svg";
import homme from "../img/homme.svg";
import izanagi from "../img/izanagi.svg";
import masque from "../img/masque.svg";
import thor from "../img/thor.svg";
import Footer from "../components/Footer";

function Home (){

    return(
        <div>
            <header className="header">
                <h3 className="headerText">Trivia Mythology</h3>
            </header>
            <div className="bodyContainer">
                <h1 className="titreHome">Test Your Knowledge {'\n'} Mythology Edition</h1>
                <div className="iconeDesktop">
                    <img className="icone" src={couronne} alt="couronne"/>
                    <img className="icone" src={homme} alt="homme maori"/>
                    <img className="icone" src={izanagi} alt="izanagi"/>
                    <img className="icone" src={masque} alt="masque"/>
                    <img className="icone" src={thor} alt="thor"/>
                </div>
                <div className="iconeMobile">
                    <div className="iconeLine1">
                        <img className="icone" src={couronne} alt="couronne"/>
                        <img className="icone" src={homme} alt="homme maori"/>
                        <img className="icone" src={izanagi} alt="izanagi"/>
                    </div>
                    <div className="iconeLine2">
                        <img className="icone" src={masque} alt="masque"/>
                        <img className="icone" src={thor} alt="thor"/>
                    </div>    
                </div>
                <Link to="/level">
                    <button id="buttonHome">Play</button>
                </Link>
            </div>  
            <Footer/>
        </div>
    )
}
export default Home;
