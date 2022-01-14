import React from "react";
import "./Navbar.css";
import logo from "../asset/img/logo-ubilab.png";

const Navbar = () => {
    return(
        <div className="container__navbar">
            <div className="nav__block1">
                <img className="logo__ubilab" src={logo} alt="logo"/>
                    <p className="accueil">Accueil</p>
                <p className="link">Nos logiciels</p>
                <p className="link">Prix</p>
                <p className="link">Références</p>
                <p className="link">Tutoriels</p>
            </div>
            <div className="block2">
                <p className="connexion">SE CONNECTER</p>
                <p className="navbar__btn">DEMANDER UNE DEMO</p>
            </div>

        </div>
    )
}
export default Navbar;