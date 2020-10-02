import React from 'react';
import Luxury from '../Images/luxury.png';
import Pretty from '../Images/pretty-house.jpg';
import '../Styles/Projects.css';

const Projects = () =>{
    return(
        <div id="projects-container">
            <nav id="navigation">
                <span id="home-cont">
                    <a href="/home" id="home-link">Home</a>
                </span>
                <span id="about-cont">
                    <a href="/about-me" id="about-link">About Me</a>                
                </span>                            
            </nav>
            <div className="projects-img">
                <a href="/home">
                    <img src={Luxury} alt="Project1" title="My Project" id="ignacio" />
                </a>
            </div>
            <div className="projects-img">
                <a href="/home">
                    <img src={Pretty} alt="Project2" title="My Project 2" id="dogs"/>
                </a>
            </div>
            <div className="back-link-cont">
                <a href="#navigation" id="back-link"> Go back to top</a>
            </div>            
        </div>
    );
}

export default Projects;