import React from 'react';
import '../Styles/About.css';

const AboutMe = () => {
    return(
       <div className="about-container">
           <nav>
               <a href="/home">Home</a>
               <a href="/projects">Projects</a>
           </nav>
           <a href="/contact"><button>Contact me</button></a>

       </div>
    );
}

export default AboutMe;