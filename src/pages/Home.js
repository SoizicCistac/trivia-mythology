import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";

function Home (){

    return(
        <div>
            <h1>Test Your Knowledge Mythological Edition</h1>
            <Link to="/level">
                <button id="buttonHome">Play</button>
            </Link>  
            <Footer/>
        </div>
    )
}
export default Home;
