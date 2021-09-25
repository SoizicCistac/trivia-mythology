import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Crown from "../img/couronne.svg"
import Thor from "../img/thor.svg"
import Izanagi from "../img/izanagi.svg"
import Masque from "../img/masque.svg"

function Level () {
    return(
        <div>
            <header className="header">
                <h3 className="headerText">Trivia Mythology</h3>
            </header>
            <div className="bodyContainer homeDiv">       
                <h1 className="title">Choose your level !</h1>
                <div className='selectionDiv'>
                <Link to='/Easy'>
                    <button className='selection'>
                        <img className="imgLevel" src={Crown} alt="Crown"/>
                        Easy
                        </button>
                    </Link>
                <Link to='/medium'>
                    <button className='selection'>
                        <img className="imgLevel" src={Thor} alt="Thor"/>
                        Medium</button>
                    </Link>
                <Link to='/Hard'>
                    <button className='selection'>
                        <img className="imgLevel" src={Izanagi} alt="Izanagi"/>
                    Hard</button>
                </Link>
                <Link to='/AnyDifficulty'>
                    <button className='selection'>
                    <img className="imgLevel" src={Masque} alt="Masque"/>
                    Any Difficulty</button>
                </Link>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Level;