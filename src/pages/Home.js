import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home (){

    return(
        <div>
            <h1>Test Your Knowledge Mythological Edition</h1>
            <Link to="/level">
                <button id="buttonHome">Play</button>
            </Link>  
        </div>
    )
}
export default Home;
