import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Img1 from "../Images/SiteBooki.png";
import Img2 from "../Images/SiteOhMyFood.png";
import Img3 from "../Images/SiteLapanthère.png";
import Img4 from "../Images/SitePiiquante.png";
import Img5 from "../Images/SiteKanap.png";
import Img6 from "../Images/SiteKasa.png";
import Img7 from "../Images/SiteLaFamicale.png";
import Img8 from "../Images/SiteVPABySandra.png";

import "../styles/slideshow.css";

const Slideshow = () => {
  const pictures = [Img8, Img7, Img6, Img5, Img4, Img3, Img2, Img1];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  // Liens externes correspondant à chaque image
  const externalLinks = [
    "https://jeremypromsy.github.io/SandraPro/",
    "https://jeremypromsy.github.io/lafamicale/",
    "https://github.com/JeremyPromsy/Kasa",
    "https://github.com/JeremyPromsy/Piiquante",
    "https://github.com/JeremyPromsy/Kanap",
    "https://jeremypromsy.github.io/Lapanthere/",
    "https://jeremypromsy.github.io/Ohmyfood/",
    "https://jeremypromsy.github.io/Booki/", 
  ];

   // Titres correspondant à chaque image
   const titles = [
    "Site professionnel - VPA by Sandra",
    "Site vitrine - Location saisonnière",
    "Sixième projet étude - Site d'annonces en ligne",
    "Cinquième projet étude - Premier test back-end",
    "Quatrième projet étude - Site e-commerce Front",
    "Troisième projet étude - SEO",
    "Deuxième projet étude - Site Vitrine",
    "Premier projet étude - Site vitrine"
  ];

  // Paragraphes correspondant à chaque image
  const paragraphs = [
    "Site réalisé pour le compte d'une création de société. Site vitrine expliquant l'activité de l'entreprise ainsi qu'une page contact pour renseignements.",
    "",
    "",
    "",
    "",
    "",
    "",
    "Premier projet étude HTML/CSS - Site vitrine afin d"
  ];

  const altTexts = [
    "Site professionnel - VPA by Sandra - Jérémy Promsy",
    "Site vitrine - Location saisonnière - Jérémy Promsy",
    "Sixième projet étude - Site d'annonces en ligne - Jérémy Promsy",
    "Cinquième projet étude - Premier test back-end - Jérémy Promsy",
    "Quatrième projet étude - Site e-commerce Front - Jérémy Promsy",
    "Troisième projet étude - SEO - Jérémy Promsy",
    "Deuxième projet étude - Site Vitrine - Jérémy Promsy",
    "Premier projet étude - Site vitrine - Jérémy Promsy"
  ];

  return (
    <section className="gallery">
      <div className="galleriePhoto">
        <div className="galleriePhotoTitre">
        <div className="fleche flecheGaucheDiv" onClick={prevSlide}>
          {pictures.length > 1 && (
            <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" className="arrow-left"/>
          )}
        </div>
        {pictures.map((img, index) => {
            return (
                <a key={index} href={externalLinks[index]} target="_blank" rel="noopener noreferrer">
                {index === current && (
                  <div className="texteContainer">
                      <h3>{titles[index]}</h3>
                  </div>
                )}
              </a>
            );
          })}
        <div className="fleche flecheDroiteDiv" onClick={nextSlide}>
          {pictures.length > 1 && (
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" className="arrow-right"/>
          )}
        </div>
        </div>
        <div className="photos">
          {pictures.map((img, index) => {
            return (
                <a key={index} href={externalLinks[index]} target="_blank" rel="noopener noreferrer">
                {index === current && (
                  <div className="imageContainer">
                      <img src={img} alt={altTexts[index]} className="gallery-image" />
                      <p className="imageContainerP">{paragraphs[index]}</p>
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
