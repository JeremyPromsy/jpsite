import React from "react";
import "../styles/realisations.css"
import Slideshow from "../components/Slideshow";

function Realisations() {
    return (
      <div className="partRealisations">
        <h2>Mes réalisations</h2>
        <div className="cardRealisations">
          <Slideshow />
        </div>
      </div>
    );
  }
  
export default Realisations;