import React, { useState, useRef, useEffect} from 'react';
import { gsap, Power3 } from 'gsap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../Styles/About.css';

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
            let tl = gsap.timeline({delay:1});            
            let Circ = gsap.parseEase("circ.out");

            tl
                .fromTo([Homelink, Projectslink], 
                    {visibility:"hidden", opacity:0, yPercent:30},
                    {visibility:"visible", opacity:1, stagger:0.5, yPercent:0, ease:Power3.easeOut, duration:1.5})
                .fromTo([Quickbio,Quicktext],
                    {visibility:"hidden", opacity:0, yPercent:30},
                    {delay:1,scrollTrigger:{trigger:"#quick-bio", start:"top bottom"},visibility:"visible", opacity:0.7, stagger:0.5,yPercent:0, ease:Circ, duration:1.5})
                .to(Quickbio,{opacity:1, duration:0.0001})                                    
                .fromTo([Skills,Skillstext],
                    {visibility:"hidden", opacity:0, yPercent:30},
                    {delay:1,scrollTrigger:{trigger:"#skills", start:"bottom bottom"},visibility:"visible", opacity:0.7, stagger:0.5,yPercent:0, ease:Circ, duration:1.5})
                .to(Skills, {opacity:1, duration:0.0001});
                return tl;                   
    }
    useEffect(()=>{
        AboutAnimation();
    });

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
                            <li className="text">HTML5.</li>
                            <li className="text">CSS3 (Bootstrap and CSS).</li>
                            <li className="text">JavaScript (ES9).</li>
                            <li className="text">ReactJS (V.16.13).</li>
                            <li className="text">GSAP products.</li>
                            <li className="text">Version Control with Git & GitHub.</li>
                            <li className="text">Node.js</li>
                            <li className="text">MongoDB.</li>
                            <li className="text">ExpressJS.</li>
                            <li className="text">Currently learning Java.</li>
                        </ul>
                    </section>
                </article>  
                <div id="myJourney">
                    <Button color="btn btn-secondary" onClick={Toggle} style={{marginBottom:"1rem"}} id="InfoButton">My Journey</Button>                   
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
                                I moved to my dad’s house in Mexico to study Computer Engineering, 
                                but faced a lot of friction from his family in Mexico to the point where 
                                I wasn’t allowed to study in the house because I took too much space 
                                with my books and computer. 
                                I decided I had to move out of the house, but I didn’t know how to. 
                                </p>
                                <p className="text">
                                At the same time, college was going great, 
                                but I needed a challenge, something new to learn 
                                and be motivated while taking on that challenge.  
                                I rememeber spending a lot of time on Tumblr 
                                reading conspiracy theories in my free time and discussing them with others, 
                                enjoying the sense of community that it provided me. 
                                And I decided I wanted to build platforms so that other people 
                                also had a chance of sharing their own conspiracy theories 
                                outside of any social media site. 
                                  I figured that doing that meant I had to develop a site myself, 
                                so I started learning web development in a very casual and hobby-like manner, 
                                until a fight happened at home with my dad’s family. 
                                The house was very small, I knew I was considered an intruder, 
                                and I couldn’t blame them, so I took it as another sign that I had to leave the house. 
                                That’s when I connected the dots and thought that maybe my hobby 
                                was going to be my exit door after 
                                thinking and thinking for a way out of my dad’s house for about 6 months. 
                                I did the research and looked at job applications for web developer positions 
                                and started to write down all the technologies that appeared more than 5 times, 
                                I made a study plan that took me a year and a half to complete, 
                                and this portfolio is the result of it. 
                                </p>
                           </CardBody> 
                        </Card>
                        <Card>

                        </Card>
                    </Collapse>
                    <a href="/contact">
                        <button id="contactButton" className=" btn btn-warning">
                            Contact me
                        </button>
                    </a>
                </div>                    
            </div>           
       </div>
    );
}

export default AboutMe;