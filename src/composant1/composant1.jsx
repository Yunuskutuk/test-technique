import React from "react";
import "./composant1.css";
import fleche from "../asset/img/fleche.png";
import logo from "../asset/img/logo-ubilab.png";

const Composant = () => {
    return(
        <div className="container__composant1">
            <div className="navbar__suite">
                <p className="accueil__suite">Accueil</p>
                <p className="link__suite">Nos logiciels</p>
                <p className="link__suite">Prix</p>
                <p className="link__suite">Références</p>
                <p className="link__suite">Tutoriels</p>
            </div>
            <div className="composant1">
                <img className="logo__composant1" src={logo} alt="logo"/>
                <h1>Ubilab</h1>
            </div>
            <img className="fleche" src={fleche} alt="fleche"/>
        </div>
    )
}
export default Composant;