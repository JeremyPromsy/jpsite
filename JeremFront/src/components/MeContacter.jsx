import React from "react";
import "../styles/mecontacter.css"
import { NavLink } from "react-router-dom";

function MeContacter() {
    return (
      <div className="partMeContacter">
        <div className="textMeContacter">
          <p>Si vous voulez me contacter, partagez avec moi ou en savoir plus, <br></br>n'héhistez pas à me contacter</p>
        </div>
        <div className="boutonMeContacter">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    );
  }
  
export default MeContacter;