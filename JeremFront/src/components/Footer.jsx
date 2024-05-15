
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css"
import logoDesktop from "../assets/jeremypromsy-logoDesktop-JérémyPromsy.png";

function Footer() {
    return (
        <div className="footer">
            <div className="footerGauche">
                <NavLink to="/">
                    <img className="logoFooter"  src={logoDesktop} alt ="logo Jérémy Promsy" /> 
                </NavLink>
            </div>
            <div className="footerMilieu">
                Jérémy Promsy - © 2024 Tous droits réservés
            </div>
            <div className="footerMentions footerDroit">
                <NavLink to="/mentionslégales">Mentions Légales</NavLink>
            </div>
        </div>
    )
}

export default Footer;