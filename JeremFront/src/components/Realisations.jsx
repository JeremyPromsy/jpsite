import React from "react";
import "../styles/realisations.css"
import { Link } from "react-router-dom";

function Realisations() {
    return (
      <div className="partRealisations">
        <h2>Mes réalisations</h2>
        <div className="cardSite cardSite1">
          <Link to="https://jeremypromsy.github.io/SandraPro/" target="_blank" rel="noopener">
            <h3>Site professionnel - VPA by Sandra</h3>
            <p> </p>
          </Link>
        </div>
        <div className="cardSite cardSite2">
          <Link to="https://jeremypromsy.github.io/lafamicale/" target="_blank" rel="noopener">
            <h3>Site vitrine - Location saisonnière</h3>
            <p> </p>
          </Link>
        </div>
        <div className="cardSite cardSite3">
          <Link to="https://github.com/JeremyPromsy/Kasa" target="_blank" rel="noopener">
            <h3>Sixième projet étude - Site d'annonces en ligne</h3>
            <p> </p>
          </Link>
        </div>
        <div className="cardSite cardSite4">
          <Link to="https://github.com/JeremyPromsy/Piiquante" target="_blank" rel="noopener">
            <h3>Cinquième projet étude - Premier test back-end</h3>
            <p> </p>
          </Link>
        </div>
        <div className="cardSite cardSite5">
          <Link to="https://github.com/JeremyPromsy/Kanap" target="_blank" rel="noopener">
            <h3>Quatrième projet étude - Site e-commerce Front</h3>
            <p> </p>
          </Link>
        </div>
        <div className="cardSite cardSite6">
          <Link to="https://jeremypromsy.github.io/Lapanthere/" target="_blank" rel="noopener">
            <h3>Troisième projet étude - SEO</h3>
            <p> </p>
          </Link>
        </div>
        <div className="cardSite cardSite7">
          <Link to="https://jeremypromsy.github.io/Ohmyfood/" target="_blank" rel="noopener">
            <h3>Deuxième projet étude - Site Vitrine</h3>
            <p> </p>
          </Link>
        </div>
        <div className="cardSite cardSite8">
          <Link to="https://jeremypromsy.github.io/Booki/" target="_blank" rel="noopener">
            <h3>Premier projet étude - Site vitrine</h3>
            <p> </p>
          </Link>
        </div>
      </div>
    );
  }
  
export default Realisations;