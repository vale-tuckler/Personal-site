import React from 'react';
import Github from '../Images/github.png';
import Instagram from '../Images/ig.png';
import Mail from '../Images/mail.png';
import '../Styles/Footer.css';

const Footer = () => {
    return(
        <div className="contenedor">
            <div id="wrapper">
                <a href="https://github.com/vale-tuckler">
                    <img src={Github} alt="Github icon" title ="My Github profile" id="Github"/>
                </a>
                <a href="https://www.instagram.com/loveforcode/">
                    <img src={Instagram} alt="Instagram icon" title ="My Instagram profile" id="Ig"/>
                </a>
                <a href="mailto:valerietuckler@gmail.com">
                    <img src={Mail} alt="Mail icon" title ="My email" id="Mail"/>
                </a>
            </div>            
        </div>
    );
}
export default Footer;