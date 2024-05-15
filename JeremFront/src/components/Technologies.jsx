import React from "react";
import "../styles/technologies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Technologies() {
    return (
      <div className="partTechnologies" id="Technoligies">
        <h2>Mes technologies</h2>
        <div className="cardTechnologie cardTechno1">
            <FontAwesomeIcon icon="fa-brands fa-html5" className="technoIcons1 technoIcons"/>
            <h3>HMTL</h3>
        </div>
        <div className="cardTechnologie cardTechno2">
            <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="technoIcons2 technoIcons"/>
            <h3>CSS</h3>
        </div>
        <div className="cardTechnologie cardTechno3">
          <FontAwesomeIcon icon="fa-brands fa-js" className="technoIcons3 technoIcons"/>
            <h3>Javascript</h3>
        </div>
        <div className="cardTechnologie cardTechno4">
            <FontAwesomeIcon icon="fa-brands fa-react" className="technoIcons4 technoIcons" />
            <h3>React</h3>
        </div>
        <div className="cardTechnologie cardTechno5">
            <FontAwesomeIcon icon="fa-brands fa-wordpress" className="technoIcons5 technoIcons"/> 
            <h3>Wordpress</h3>
        </div>
      </div>
    );
  }
  
export default Technologies;