import React, { useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Luxury from '../Images/luxury.png';
import Pretty from '../Images/pretty-house.jpg';
import '../Styles/Projects.css';
gsap.registerPlugin(ScrollTrigger);

const Projects = () =>{
    let homeLink = useRef(null);
    let aboutLink = useRef(null);
    let engProject = useRef(null);
    let dogsProject = useRef(null);

    function ProjectsAnimations(){
        
        let PowerTwo = gsap.parseEase("power2.in");
        let Back = gsap.parseEase("back.inOut(1.7)");
        /*let engTrigger = ScrollTrigger.create({
            trigger:".projects-img",
                        start:"top center",
                        markers:{
                            startColor:"green",
                            endColor:"red"
                        }
        })*/

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
                    <a href="/home" id="home-link" ref={h => homeLink = h}>Home</a>
                </span>
                <span id="about-cont">
                    <a href="/about-me" id="about-link" ref={a => aboutLink = a}>About Me</a>                
                </span>                            
            </nav>
            <div className="projects-img">
                <a href="/home">
                    <img src={Luxury} alt="Project1" title="My Project" id="ignacio" ref={e => engProject = e}/>
                </a>
            </div>
            <div className="projects-img">
                <a href="/home">
                    <img src={Pretty} alt="Project2" title="My Project 2" id="dogs" ref={D => dogsProject = D}/> 
                </a>
            </div>
            <div className="back-link-cont">
                <a href="#navigation" id="back-link"> Go back to top</a>
            </div>            
        </div>
    );
}

export default Projects;