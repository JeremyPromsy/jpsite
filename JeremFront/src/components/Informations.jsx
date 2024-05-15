import React from "react";
import "../styles/informations.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import imgJeremyPromsy from "../assets/Jérémy-Promsy.JPG";

function Informations() {
    return (
      <div className="partInformations">
        <div className="infoMoiPhoto">
              <img 
                className="imgJP" 
                src={imgJeremyPromsy}
                alt="Jérémy Promsy site web - developpeur front" />
        </div>
        <div className="infoMoi">
          <h2>A propos</h2>
          <p> </p>
        </div>
        <div className="infoLiens">
          <Link to="https://fr.linkedin.com/in/jeremypromsy" target="_blank" rel="noopener"><FontAwesomeIcon icon="fa-brands fa-linkedin" className="infoIcons infoIcons1"/></Link>
          <Link to="https://twitter.com/JeremyPromsy" target="_blank" rel="noopener"><FontAwesomeIcon icon="fa-brands fa-twitter" className="infoIcons infoIcons2"/></Link>
          <Link to="https://github.com/JeremyPromsy" target="_blank" rel="noopener"><FontAwesomeIcon icon="fa-brands fa-github" className="infoIcons infoIcons3" /></Link>
        </div>
      </div>
    );
  }
  
export default Informations;

