import React from "react";
import "./composant2.css";
import img from "../asset/img/img.png";


const Composant2 = () => {
    return(
        <div className="container__composant2">
            <h2>Au coeur des échanges entre <br />
                le laboratoire et les professionnels de santé.</h2>
                <img className="img" src={img} alt="img" />
        </div>
    )
}
export default Composant2;