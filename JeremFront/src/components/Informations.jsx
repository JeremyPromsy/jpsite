import React from "react";
import "../styles/informations.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import imgJeremyPromsy from "../assets/Jérémy-Promsy.JPG";

function Informations() {
    return (
      <div className="partInformations">
        <h2>Mieux me connaitre</h2>
        <div className="infoMoi">
          <div className="infoMoiPhoto">
                <img 
                  className="imgJP" 
                  src={imgJeremyPromsy}
                  alt="Jérémy Promsy site web - developpeur front" />
          </div>
          <div className="infoMoiTexte">
            <p>Après un MBA en marketing digital, j'ai souhaité faire de mon appétence pour l'analyse, un nouveau défi. 
              J'ai finalisé une formationde Data Analyst. 
              Ayant eu une opportunité professionnelle de rejoindre une entreprise en tant que gestionnaire de projet digital.
              Je l’ai saisi et eu la responsabilité de conduire le projet. 
              J’ai en parallèle suivi et réussi une formation de développeur, venant ainsi compléter mon parcours. 
              Ma mission s’étant terminée et riche de ces expériences, je suis aujourd'hui développeur front-end. </p>
          </div>
          <div className="infoLiens">
            <Link to="https://fr.linkedin.com/in/jeremypromsy" target="_blank" rel="noopener"><FontAwesomeIcon icon="fa-brands fa-linkedin" className="infoIcons infoIcons1"/></Link>
            <Link to="https://twitter.com/JeremyPromsy" target="_blank" rel="noopener"><FontAwesomeIcon icon="fa-brands fa-twitter" className="infoIcons infoIcons2"/></Link>
            <Link to="https://github.com/JeremyPromsy" target="_blank" rel="noopener"><FontAwesomeIcon icon="fa-brands fa-github" className="infoIcons infoIcons3" /></Link>
          </div>
        </div>
      </div>
    );
  }
  
export default Informations;

