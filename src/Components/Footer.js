import React from 'react';
import Github from '../Images/github.png';
import Instagram from '../Images/ig.png';
import Mail from '../Images/mail.png';
import '../Styles/Footer.css';

const Footer = () => {
    return(
        <div className="contenedor">
            <div id="wrapper">
                <a href="/inicio">
                    <img src={Github} alt="Github icon" title ="Github icon" id="github"/>
                </a>
                <a href="/inicio">
                    <img src={Instagram} alt="Instagram icon" title ="Instagram icon" id="ig"/>
                </a>
                <a href="/inicio">
                    <img src={Mail} alt="Mail icon" title ="Mail icon" id="mail"/>
                </a>
            </div>            
        </div>
    );
}
export default Footer;