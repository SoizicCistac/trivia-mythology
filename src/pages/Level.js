import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Level () {
    return(
        <div className='homeDiv'>
            <h1>Choose your level !</h1>
            <Link to='/Easy'>
                <button className='selection'>Easy</button>
                </Link>
            <Link to='/medium'>
                <button className='selection'>Medium</button>
                </Link>
            <Link to='/Hard'>
                <button className='selection'>Hard</button>
            </Link>
            <Link to='/AnyDifficulty'>
                <button className='selection'>Any Difficulty</button>
            </Link>
            <Footer/>
        </div>
    )
}

export default Level;