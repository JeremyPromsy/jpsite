import React from "react";
import "../styles/home.css";

import Realisations from '../components/Realisations.jsx';
import Technologies from '../components/Technologies.jsx';
import Informations from '../components/Informations.jsx';
import MeContacter from '../components/MeContacter.jsx';

function Home() {
    return (
      <div className="HomeComponents">
        <Realisations />
        <Technologies />
        <Informations />
        <MeContacter />
      </div>
    );
  }
  
export default Home;