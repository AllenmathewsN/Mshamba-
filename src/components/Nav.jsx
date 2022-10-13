import React from "react";
import logo from "../images/logo.jpeg";
import "./styles.css";
import { NavLink } from "react-router-dom"




function Nav({toggleResourceType}){
    return(
        <div className="nav">
        <div className="mshamba">
            <img src={logo} alt=""/>
            <h3>Mshamba</h3>
        </div>
        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/products">Products</NavLink>


            <button onClick={toggleResourceType}> Mshamba </button>   
            
        </div>
    </div>
    );
}

export default Nav; 