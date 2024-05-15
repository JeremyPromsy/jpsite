import React from "react";
import "../styles/contact.css";
import FormContact from "../components/FormContact"

function Contact() {
  return (
    <div className="pageContact">
    <div className="contactPage">
      <div className="contactDiv">
        <h1>Contactez-moi !</h1>
        <FormContact /> 
        <div className="boutonMail">
          <p>Ou envoyez-moi un mail directement, en cliquant sur le bouton ci-dessous.</p>
          <div className="boutonMailContact">
            <a href="mailto:lafamicale@gmail.com"  aria-label="contacter l'agence par mail"><button className="buttonContactPage">Me joindre </button></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

