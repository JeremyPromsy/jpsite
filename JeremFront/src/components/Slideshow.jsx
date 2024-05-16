import React, { useState } from "react";

import flecheDroite from "../assets/FlècheDroite-2.png";
import flecheGauche from "../assets/FlècheGauche.png";

import Img1 from "../Images/SiteSandra.png";
import Img2 from "../Images/SiteSandra.png";
import Img3 from "../Images/SiteSandra.png";
import Img4 from "../Images/SiteSandra.png";
import Img5 from "../Images/SiteSandra.png";
import Img6 from "../Images/SiteSandra.png";
import Img7 from "../Images/SiteSandra.png";
import Img8 from "../Images/SiteSandra.png";

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
    "Premier projet étude - Site vitrine"
  ];

  const altTexts = [
    "Site réalisé pour le compte d'une création de société. Site vitrine expliquant l'activité de l'entreprise ainsi qu'une page contact pour renseignements.",
    "",
    "",
    "",
    "",
    "",
    "",
    "Premier projet étude - Site vitrine",
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="galleriePhoto">
        <div className="fleche flecheGaucheDiv" onClick={prevSlide}>
          {pictures.length > 1 && (
            <img src={flecheGauche} alt="left arrow" className="arrow-left" />
          )}
        </div>
        <div className="photos">
          {pictures.map((img, index) => {
            return (
                <a key={index} href={externalLinks[index]} target="_blank" rel="noopener noreferrer">
                {index === current && (
                  <div className="image-container">
                    <img src={img} alt={altTexts[index]} className="gallery-image" />
                    <div className="caption">
                      <h3>{titles[index]}</h3>
                      <p>{paragraphs[index]}</p>
                    </div>
                  </div>
                )}
              </a>
            );
          })}
        </div>
        <div className="fleche flecheDroiteDiv" onClick={nextSlide}>
          {pictures.length > 1 && (
            <img src={flecheDroite} alt="right arrow" className="arrow-right" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
