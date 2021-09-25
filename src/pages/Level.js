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
            <div className='homeDiv'>       
                <h1>Choose your level !</h1>
                <div className='selectionDiv'>
                <Link to='/Easy'>
                    <button className='selection'>
                        <img className="imgLevel" src={Crown}/>
                        Easy
                        </button>
                    </Link>
                <Link to='/medium'>
                    <button className='selection'>
                        <img className="imgLevel" src={Thor}/>
                        Medium</button>
                    </Link>
                <Link to='/Hard'>
                    <button className='selection'>
                        <img className="imgLevel" src={Izanagi}/>
                    Hard</button>
                </Link>
                <Link to='/AnyDifficulty'>
                    <button className='selection'>
                    <img className="imgLevel" src={Masque}/>
                    Any Difficulty</button>
                </Link>
                </div>
                <Footer/>
            </div>
        </div>
        
    )
}

export default Level;