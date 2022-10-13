import React from "react";
import rice from "../images/rice.jpeg";
import bean from "../images/bean.jpeg";
import maize from "../images/maize.jpeg";
import "./styles.css";



function About({resourceType}){
    return(
        <div className="about">
            {resourceType?<h3>Welcome to Mshamba</h3>:false}
                <p>This is a grocery e-commerce platform for farmers to sell their products and can compare prices for different commodities. The platform will have warehouses in different regions for farmers to bring their goods where they will be inspected for Quality Assurance. Selling in bulk will give them bargaining power as they will cut off all middle men in the process. We hope to see this platform become a household name in the East African market hopefully in future.  </p>
                <div className="items">

                    <div className="item" id="rice">
                        <h3>Rice</h3>
                        <img src={rice} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, excepturi!</p>
                        <p>Price: 180 Ksh.</p>
                    </div>

                    <div className="item" id="bean">
                        <h3>Bean</h3>
                        <img src={bean} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, excepturi!</p>
                        <p>Price: 150 Ksh.</p>
                    </div>

                    <div className="item" id="maize">
                        <h3>Maize</h3>
                        <img src={maize} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, excepturi!</p>
                        <p>Price: 130 Ksh.</p>
                    </div>

                </div>
            </div>
    )
}

export default About; 