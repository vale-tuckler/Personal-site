import React, { useEffect, useRef, useState} from 'react';
import Footer from '../Components/Footer.js';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Teacher from '../Images/teacher.png';
import Padebac from '../Images/padebac.png';
import blackBuilding from '../Images/silhouette.png';
import '../Styles/Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const Toggle = () => setIsOpen(!isOpen);

    const [Open, setOpen] = useState(false);
    const Switch = () => setOpen(!Open);

    const [Extended, setIsExt] = useState(false);
    const Unfold = () => setIsExt(!Extended);

    let homeLink = useRef(null);
    let aboutLink = useRef(null);
    let engProject = useRef(null);
    let dogsProject = useRef(null);
    let archProject = useRef(null);

    function ProjectsAnimations(){
        
        let PowerTwo = gsap.parseEase("power2.out");
        let Back = gsap.parseEase("back.inOut(1.7)");
        
        let myTL = gsap.timeline({delay:1});
        console.log([homeLink, aboutLink]);
        console.log([engProject, dogsProject]);

        myTL
            .fromTo([homeLink, aboutLink],
                {visibility:"hidden", opacity:0},
                {duration:2, visibility:"visible", ease:PowerTwo, stagger:0.45, opacity:1})
            .fromTo(archProject,
                {visibility:"hidden", opacity:0},
                {scrollTrigger:{
                    trigger:"#Jordan", 
                    start:"top center",
                    end:"+=100" 
                },
                visibility:"visible", opacity:1, duration:1.5, delay:1, ease:Back})
            .fromTo(dogsProject,
                    {visibility:"hidden", opacity:0},
                    {scrollTrigger:{
                        trigger:"#DogsProject", 
                        start:"top bottom",
                        end:"+=100" 
                    },
                    visibility:"visible", opacity:1, duration:1.5, delay:1.5, ease:Back})
            .fromTo(engProject,
                    {visibility:"hidden", opacity:0}, 
                    {scrollTrigger:{
                        trigger:"#ignacio",
                        start:"top bottom",                        
                    },
                    visibility:"visible", ease:Back, opacity:1, duration:1.5
                })
            .then(myTL.kill);
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

            
            {/* JORDAN'S PROJECT */}

            <div className="projects-img">
                <a href="https://architect-jordan.firebaseapp.com/home.html" id="jor">
                    <img src={blackBuilding} alt="blackbuilding" title="Jordan's project" id="Jordan" ref={J => archProject = J}/>
                </a>
                <Button color="btn btn-dark" onClick={Unfold} style={{marginBottom:"1rem"}} id="JorProject" className="infoBtn">
                    Project info
                </Button>                
                <Collapse isOpen={Extended}>
                    <Card className="card">
                        <CardBody>
                                <p>                                    
                                    Because art should be done for art's sake, I helped my brother display better his architecture portfolio through the creation
                                    of a personalized site that's going to help him get a broader reach and a bigger exposure to people who might be
                                    wanting an architectural design made with a fresh perspective.                                                                                                            
                                </p>
                                <p>
                                    This Project was created using only HTML, CSS and GSAP (a JavaScript library) to improve my understanding of the
                                    fundamental technologies upon which the web is built: <code>HTML, CSS </code> & <code>JavaScript. </code> There still
                                    is a long way to go, because education never stops, but this site is an interesting beginning. <i>Check it out!</i>
                                </p>
                                <p>
                                    <a href="https://github.com/vale-tuckler/Jordan">
                                        {/*<img src={Github} alt="Github icon" title="Github icon"/>*/}
                                        Github repo
                                    </a>
                                </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>            

        {/* PADEBAC'S PROJECT  */}

        <div className="projects-img">
                <a href="/home" id="dogs">
                    <img src={Padebac} alt="Padebac's site" title="Padebac site" id="dogsImg" ref={D => dogsProject = D}/> 
                </a>
                <Button color="btn btn-dark" onClick={Switch} style={{marginBottom:"1rem"}} id="DogsProject" className="infoBtn">
                    Project info
                </Button>
                <Collapse isOpen={Open}>
                    <Card className="card">
                        <CardBody>
                                <p>
                                    This Project was created using ReactJS with the help of Node.js and MongoDB, to help a non-profit organization 
                                    reach faster their goal of rescuing street pets and providing a safe home for them.                                     
                                </p>
                                <p>
                                    In addition, smaller libraries were used 
                                    such as <code> mongoose, react-router-dom, and GSAP.</code>
                                </p>
                                <p>
                                    <a href="https://github.com/vale-tuckler/Patronato">                                        
                                        Github repo
                                    </a>
                                </p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            {/* IGNACIO'S PROJECT */}            

            <div className="projects-img">
                <a href="https://profe-ignacio.web.app/inicio" id="ignacioLink">
                    <img src={Teacher} alt="Project1" title="English site project" id="ignacio" ref={e => engProject = e}/>
                </a>
                <Button color="btn btn-dark" onClick={Toggle} style={{marginBottom:"1rem"}} id="ProjectInfo" className="infoBtn">
                    Project info
                </Button>
                    <Collapse isOpen = {isOpen}>
                        <Card className="card">
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
                                        Github repo
                                    </a>
                                </p>
                            </CardBody>
                        </Card>
                    </Collapse>
            </div>
            <Footer/>                    
                <a href="/contact" id="contactMe"> Contact me</a>
        </div>
    );
}

export default Projects;