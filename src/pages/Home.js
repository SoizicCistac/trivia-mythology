import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return(
        <div className='homeDiv'>
            <h1>Test Your Knowledge : Mythology Edition</h1>
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
        </div>
    )
}

export default Home;