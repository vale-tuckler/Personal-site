import React, { useEffect, useRef } from 'react';
import '../Styles/Contact.css';
import { gsap, Power3 } from 'gsap';
import Github from '../Images/github.png';
import IG from '../Images/ig.png';
import Mail from '../Images/mail.png';

const Contact = () => {

    let Hlink = useRef(null);
    let Plink = useRef(null);
    let motto = useRef(null);
    let description = useRef(null);
    let github = useRef(null);
    let instagram = useRef(null);
    let mail = useRef(null);

    function ContactAnimations(){
        const tl = gsap.timeline({delay:1});
        const Circ = gsap.parseEase("Circ.out");
        const Expo = gsap.parseEase("Expo.easeOut")
        tl
            .fromTo([Hlink, Plink], 
                {visibility:"hidden", opacity:0, yPercent:33}, 
                {visibility:"visible", opacity:1, yPercent:0, duration:1, stagger:0.5, ease:Circ})
            .fromTo(motto,
                {visibility:"hidden", opacity:0},
                {visibility:"visible", opacity:1, duration:1, ease:Power3.easeOut, delay:0.6})
            .fromTo(description, 
                {visibility:"hidden", opacity:0}, 
                {visibility:"visible", opacity:1, duration:1, ease:Power3.easeIn})
            .fromTo([github, instagram, mail],
                {visibility:"hidden", opacity:0},
                {visibility:"visible", opacity:1, duration:1.2, ease:Expo, stagger:0.4, delay:0.5})

        return tl;
    }

    useEffect(()=>{
        ContactAnimations();
    });

    return(
        <div id="contactContainer">
            <nav>
                <span>
                    <a href="/home" id="Homelink" className="Nlink" ref={home => Hlink = home}>Home</a>
                </span>
                <span>
                    <a href="/projects" id="Projectslink" className="Nlink" ref={projects => Plink = projects}>Projects</a>
                </span>                
            </nav>            
            <div>
                <h1 id="motto" ref={m => motto = m}>Keep it simple. Keep it beautiful.</h1>
                <p className="description" ref={d => description = d}>Let me join you on your next project.</p>
            </div>
            <div id="smContainer">
                <a href="https://github.com/vale-tuckler" className="sm-icon" id="github"><img src={Github} alt="Github icon" title="Github icon" id="github" ref={g => github = g}/></a>
                <a href="https://www.instagram.com/loveforcode/" className="sm-icon" id="ig"><img src={IG} alt="Instagram icon" title="Instagram icon" id="ig" ref={ig => instagram = ig}/></a>
                <a href="mailto:valerietuckler@gmail.com" className="sm-icon" id="mail"><img src={Mail} alt="Mail icon" title="Mail icon" id="mail" ref={M => mail = M}/></a>
            </div>                       
        </div>
    );
}

export default Contact;