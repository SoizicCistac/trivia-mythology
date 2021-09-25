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
            <h1>Test Your Knowledge Mythological Edition</h1>
            <div className="iconeHome">
                <img className="icone" src={couronne} alt="couronne"></img>
                <img className="icone" src={homme} alt="homme maori"></img>
                <img className="icone" src={izanagi} alt="izanagi"></img>
                <img className="icone" src={masque} alt="masque"></img>
                <img className="icone" src={thor} alt="thor"></img>
            </div>
            <Link to="/level">
                <button id="buttonHome">Play</button>
            </Link>  
            <Footer/>
        </div>
    )
}
export default Home;
