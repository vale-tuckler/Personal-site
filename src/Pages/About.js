import React, { useState, useRef, useEffect} from 'react';
import { gsap, Power3 } from 'gsap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../Styles/About.css';
import web from '../Images/web.png';

const AboutMe = () => {

    const[isOpen, setIsOpen] = useState(false);
    const Toggle = ()  => {
        setIsOpen(!isOpen);

    }
    let Homelink = useRef(null);
    let Projectslink = useRef(null);
    let Quickbio = useRef(null);
    let Quicktext = useRef(null);
    let Skills = useRef(null);
    let Skillstext = useRef(null);    
    
    function AboutAnimation(){

        let Circ = gsap.parseEase("circ.out");

        function Intro(){
            let Intro = gsap.timeline({repeat:0}); 
            Intro
            .fromTo([Homelink, Projectslink], 
                {visibility:"hidden", opacity:0, yPercent:30},
                {visibility:"visible", opacity:1, stagger:0.5, yPercent:0, ease:Power3.easeOut, duration:1, delay:0.5});
            return Intro;            
        }

        function End(){
            let End = gsap.timeline({delay:0.5, repeat:0, scrollTrigger:{trigger:"#quick-bio", start:"top bottom"}});            
            End
                .fromTo([Quickbio,Quicktext],
                    {visibility:"hidden", opacity:0, yPercent:30},
                    {delay:1,visibility:"visible", opacity:0.7, stagger:0.5,yPercent:0, ease:Circ, duration:1.5})
                .to(Quickbio,{opacity:1, duration:0.0001}) /* In this tween was the first scrollTrigger */
                .fromTo([Skills,Skillstext],
                    {visibility:"hidden", opacity:0, yPercent:30},
                    {delay:1,visibility:"visible", opacity:0.7, stagger:0.5,yPercent:0, ease:Circ, duration:1.5})
                .to(Skills, {opacity:1, duration:0.0001})
            return End;            
        }

            //let tl = gsap.timeline({delay:1, repeat:0, scrollTrigger:{trigger:"#quick-bio", start:"top bottom"}});            
              let Master = gsap.timeline();
              Master
                .add(Intro())
                .add(End())

                return Master;                 
    }

    const Rerun = false;
    useEffect(()=>{
        AboutAnimation();             
    }, [Rerun]);

    return(
       <div id="aboutContainer">
           <nav id="aboutNav">
               <span id="homeContainer">
                    <a href="/home" id="homeLink" className="link" ref={l => Homelink = l}>Home</a>
               </span>
               <span id="projectsContainer" className="Linkconts">
                    <a href="/projects" id="projectsLink" className="link" ref={p => Projectslink = p}>Projects</a>
               </span>               
           </nav>
            <div id="bioCont">
                <article>
                    <span>
                        <h1 id="quick-bio" className="main-title" ref={el => Quickbio = el}>Quick Bio</h1>
                    </span>
                    <section id="textSection">
                        <p className="text" id="bioText" ref={text => Quicktext = text}>Web developer/ Software developer based in Mexico, but born in Nicaragua (Central america).</p>
                    </section>                      
                </article>           
                <article>
                    <span id="skillsCont">
                        <h1 className="main-title" id="skills" ref={el => Skills = el}>Skills</h1>
                    </span>
                    <section id="skillSection" ref={elem => Skillstext = elem}>
                        <ul id="listCont">
                            <li className="text">{web}</li>
                            <li className="text">CSS3 (Bootstrap and CSS).</li>
                            <li className="text">JavaScript (ES9).</li>
                            <li className="text">ReactJS (V.16.13).</li>
                            <li className="text">GSAP products.</li>
                            <li className="text">Version Control with Git & GitHub.</li>
                            <li className="text">Node.js</li>
                            <li className="text">ExpressJS.</li>
                            <li className="text">
                                <a href="https://university.mongodb.com/course_completion/995933e5-b14c-4975-a9ae-fb5abbd4f94b?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing">
                                MongoDB.
                                </a>
                            </li>                                                        
                            <li className="text">Currently learning Python.</li>
                        </ul>
                    </section>
                </article>  
                <div id="myJourney">
                    <Button color="btn btn-warning" onClick={Toggle} style={{marginBottom:"1rem"}} id="InfoButton">My Journey</Button>                   
                      <Collapse isOpen={isOpen}>
                        <Card id="card">
                           <CardBody id="cardBody">
                                <p className="text">
                                The journey of becoming a web developer started with the desire 
                                to become independent from my parents. 
                                It was supposed to be just another job, but it ended up being a passion of mine.
                                </p>
                                <p className="text">
                                I was born in Nicaragua, a very small country in Central America. 
                                I moved to my dad’s house in Mexico to study Computer Engineering.                            
                                </p>
                                <p className="text">
                                College was going great, 
                                but I needed a challenge, something new to learn 
                                and be motivated while taking on that challenge.  
                                I rememeber spending a lot of time on Tumblr discussing lots of topics
                                with others, 
                                enjoying the sense of community that it provided me. 
                                This is why I decided I wanted to build platforms so that other people 
                                had an online space of their own to share their own experiences or ideas  
                                outside of any conventional social media site. 
                                  I figured that doing that meant I had to develop a site myself, 
                                so I started learning web development in a very casual and hobby-like manner, 
                                I made a study plan that took me a year and a half to complete, 
                                and this portfolio is the result of it. 
                                </p>
                           </CardBody> 
                        </Card>
                        <Card>

                        </Card>
                    </Collapse>
                    <div id="link-container">
                        <a href="/contact" id="contactLink">                        
                                Contact me
                        </a>
                    </div>                    
                </div>                    
            </div>           
       </div>
    );
}

export default AboutMe;