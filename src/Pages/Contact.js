import React from 'react';
import '../Styles/Contact.css';
import Github from '../Images/github.png';
import IG from '../Images/ig.png';
import Mail from '../Images/mail.png';

const Contact = () => {
    return(
        <div id="contactContainer">
            <nav>
                <span>
                    <a href="/home" id="Homelink" className="Nlink">Home</a>
                </span>
                <span>
                    <a href="/projects" id="Projectslink" className="Nlink">Projects</a>
                </span>                
            </nav>            
            <div>
                <h1 id="motto">Keep it simple. Keep it beautiful.</h1>
            </div>
            <div>
                <p className="description">Let me join you on your next project.</p>
            </div>
            <div id="smContainer">
                <a href="https://github.com/vale-tuckler" className="sm-icon" id="github"><img src={Github} alt="Github icon" title="Github icon"/></a>
                <a href="https://github.com/vale-tuckler" className="sm-icon" id="ig"><img src={IG} alt="Instagram icon" title="Instagram icon"/></a>
                <a href="https://github.com/vale-tuckler" className="sm-icon" id="ig"><img src={Mail} alt="Mail icon" title="Mail icon"/></a>
            </div>                       
        </div>
    );
}

export default Contact;