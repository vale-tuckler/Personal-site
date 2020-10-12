import React from 'react';
import Github from '../Images/github.png';
import Instagram from '../Images/ig.png';
import Mail from '../Images/mail.png';

const Footer = () => {
    return(
        <div className="contenedor">
            <a href="/inicio"><img src={Github} alt="Github icon" title ="Github icon" id="github"/></a>
            <a href="/inicio"><img src={Instagram} alt="Instagram icon" title ="Instagram icon" id="instagram"/></a>
            <a href="/inicio"><img src={Mail} alt="Mail icon" title ="Mail icon" id="mail"/></a>
        </div>
    );
}
export default Footer;