import React from "react";
import logo from "../images/logo.jpeg";
import "./styles.css";



function Nav({toggleResourceType}){
    return(
        <div className="nav">
        <div className="mshamba">
            <img src={logo} alt=""/>
            <h3>Mshamba</h3>
        </div>
        <div className="links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contacts">Contacts</a>
            <button onClick={toggleResourceType}> Mshamba </button>   
            
        </div>
    </div>
    );
}

export default Nav; 