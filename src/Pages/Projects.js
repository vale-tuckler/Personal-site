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
    let archButton = useRef(null);
    let engButton = useRef(null);
    let dogsButton = useRef(null);
    let engProject = useRef(null);
    let dogsProject = useRef(null);
    let archProject = useRef(null);

    function ProjectsAnimations(){
        
        let PowerTwo = gsap.parseEase("power2.out");        
        let Sine = gsap.parseEase("sine.out");
        
        let myTL = gsap.timeline({delay:0.5});
        console.log([homeLink, aboutLink]);
        console.log([engProject, dogsProject]);

        myTL
            .fromTo([homeLink, aboutLink],
                {visibility:"hidden", opacity:0},
                {duration:2, visibility:"visible", ease:PowerTwo, stagger:0.49, opacity:1})
            .fromTo([archProject, archButton],
                {visibility:"hidden", opacity:0},
                {scrollTrigger:{
                    trigger:"#Jordan", 
                    start:"top center",
                    end:"+=100" 
                },
                visibility:"visible", opacity:1, duration:1, delay:0.5, ease:Sine})
            .fromTo([dogsProject, dogsButton],
                    {visibility:"hidden", opacity:0},
                    {scrollTrigger:{
                        trigger:"#DogsProject", 
                        start:"top bottom",
                        end:"+=100" 
                    },
                    visibility:"visible", opacity:1, duration:1, delay:0.5, ease:Sine})
            .fromTo([engProject, engButton],
                    {visibility:"hidden", opacity:0}, 
                    {scrollTrigger:{
                        trigger:"#ignacio",
                        start:"top bottom",                        
                    },
                    visibility:"visible", ease:Sine, opacity:1, duration:1, delay:0.5
                })
           // .then(myTL.kill);
        return myTL;
    }
        const Rerun = false;
       useEffect(() =>{
        ProjectsAnimations();
       },[Rerun])

    return(
        <div id="projectsCont">
            <nav id="navigation">
                <span id="home-cont">
                    <a href="/home" id="home-link" ref={home => homeLink = home} className="navLink">Home</a>
                </span>
                <span id="about-cont">
                    <a href="/about-me" id="about-link" ref={about => aboutLink = about} className="navLink">About Me</a>                
                </span>                            
            </nav>

            
            {/* JORDAN'S PROJECT */}

            <div className="projects-img">
                <a href="https://architect-jordan.firebaseapp.com/home.html" id="jorImg">
                    <img src={blackBuilding} alt="blackbuilding" title="Jordan's project" id="Jordan" ref={archPro => archProject = archPro}/>
                </a>
                <div 
                    ref={archB => archButton = archB} 
                    id="JorProjectDesc"
                >
                    <Button 
                        color="btn btn-dark" 
                        onClick={Unfold} 
                        style={{marginBottom:"1rem", padding:"1.5%"}}                     
                        className="infoBtn"                         
                    >
                            Project info
                    </Button>
                </div>                                
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
                <a href="https://padebac.web.app/inicio" id="dogs">
                    <img src={Padebac} alt="Padebac's site" title="Padebac site" id="dogsImg" ref={dogsP => dogsProject = dogsP}/> 
                </a>
                <div 
                    ref={X => dogsButton = X} 
                    id="DogsProjectDesc"
                >
                    <Button 
                        color="btn btn-dark" 
                        onClick={Switch} 
                        style={{marginBottom:"1rem", padding:"1.5%"}}                          
                        className="infoBtn"                        
                    >
                            Project info
                    </Button>
                </div>                
                <Collapse isOpen={Open}>
                    <Card className="card">
                        <CardBody>
                                <p>
                                PADEBAC Stands for "Patronato para la Defensa y Bienestar Animal de Coahuila" 
                                which is a "Board of Trustees for the Defense and Welfare of Animals" 
                                and it is a project aimed at the facilitating the process of street pets finding a home. 
                                There's a Home page, a "Report Abuse" page and many more features that 
                                I think will make it easier for pets to find owners that will provide 
                                the fundamental needs of love and care that they lacked at the beginning or middle of their lives.
                                I believe everyone deserves a second chance, especially abandoned pets.
                                I created this project for that reason.                                
                                </p>
                                <p>                                
                                    Made with love for those who need it,
                                    This project includes ReactJS with the help of Node.js and MongoDB.
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
                <div 
                    ref={eng => engButton = eng}
                    id="EngProjectDesc" 
                >
                    <Button 
                        color="btn btn-dark" 
                        onClick={Toggle} 
                        style={{marginBottom:"1rem", padding:"1.5%"}}                 
                        className="infoBtn"                        
                    >
                        Project info
                    </Button>                
                </div>
                    <Collapse isOpen = {isOpen}>
                        <Card className="card">
                            <CardBody>
                                <p>
                                    Education is such an important component of our lives, that I decided
                                    I was going to help this teacher spread his influence on his community so that
                                    more students could learn something so apparently simple and irrelevant
                                    but very important to the exploration of the world. That is, a second language,
                                    and more specifically, English. The project contains a "Home", "About Me", "Contact me" and a 
                                    prices page that includes the several of the 
                                    classes' content so that students can get a feel for what they will get with the teacher.
                                </p>
                                <p>
                                     This project was created with the help of React to make
                                     an entreprenurial teacher in Nicaragua have greater reach.
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