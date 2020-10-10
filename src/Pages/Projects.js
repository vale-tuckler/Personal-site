import React, { useEffect, useRef, useState} from 'react';
import Footer from '../Components/Footer.js';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Luxury from '../Images/luxury.png';
import Pretty from '../Images/pretty-house.jpg';
import Github from '../Images/github.png';
import '../Styles/Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const Toggle = () => setIsOpen(!isOpen);

    let homeLink = useRef(null);
    let aboutLink = useRef(null);
    let engProject = useRef(null);
    let dogsProject = useRef(null);

    function ProjectsAnimations(){
        
        let PowerTwo = gsap.parseEase("power2.in");
        let Back = gsap.parseEase("back.inOut(1.7)");
        
        let myTL = gsap.timeline({delay:1});
        console.log([homeLink, aboutLink]);
        console.log([engProject, dogsProject]);

        myTL
            .fromTo([homeLink, aboutLink],
                {visibility:"hidden", opacity:0},
                {duration:2, visibility:"visible", opacity:1, ease:PowerTwo, stagger:0.45})
            .fromTo(engProject,
                {visibility:"hidden", opacity:0},
                {scrollTrigger:{trigger:".projects-img", start:"top center"},visibility:"visible", opacity:1, duration:2, delay:1, ease:Back})
            .fromTo(dogsProject,
                    {visibility:"hidden", opacity:0},
                    {scrollTrigger:{trigger:".projects-img", start:"top center"},visibility:"visible", opacity:1, duration:2, delay:1, ease:Back})
        return myTL;
    }
    useEffect(()=>{
        ProjectsAnimations();
    });

    return(
        <div id="projectsCont">
            <nav id="navigation">
                <span id="home-cont">
                    <a href="/home" id="home-link" ref={h => homeLink = h} className="navLink">Home</a>
                </span>
                <span id="about-cont">
                    <a href="/about-me" id="about-link" ref={a => aboutLink = a} className="navLink">About Me</a>                
                </span>                            
            </nav>
            <div className="projects-img">
                <a href="/home">
                    <img src={Luxury} alt="Project1" title="My Project" id="ignacio" ref={e => engProject = e}/>
                </a>
                <Button color="btn btn-outline-danger" onClick={Toggle} style={{marginBottom:"1rem"}} id="ProjectInfo">
                    Project info
                </Button>
                    <Collapse isOpen = {isOpen}>
                        <Card>
                            <CardBody>
                                <p>
                                    This Project was created mainly with ReactJS, specifically, <code>create-react-app </code>
                                     to help an entreprenurial teacher in a very small country (Nicaragua) have greater reach.
                                </p>
                                <p>
                                    In addition to React, smaller libraries for react were used 
                                    such as <code>reactstrap, react-router-dom, and GSAP.</code>
                                </p>
                                <p>
                                    <a href="https://github.com/vale-tuckler/prof-ignacio">
                                        <img src={Github} alt="Github icon" title="Github icon"/>
                                    </a>
                                </p>
                            </CardBody>
                        </Card>
                    </Collapse>
            </div>
            <div className="projects-img">
                <a href="/home">
                    <img src={Pretty} alt="Project2" title="My Project 2" id="dogs" ref={D => dogsProject = D}/> 
                </a>
            </div>
            <span>
                <a href="/contact" id="contactMe"> Contact me</a>
            </span>            
            <Footer />        
        </div>
    );
}

export default Projects;