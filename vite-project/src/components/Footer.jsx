import React from "react";
import App from "../App.jsx";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Aplicacion creada con React</p>
            <p>{currentYear}</p>
        </footer>
    )
}
export default Footer;