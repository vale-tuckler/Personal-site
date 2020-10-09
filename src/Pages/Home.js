import React, {useEffect, useRef} from 'react';
import '../Styles/Home.css';
import { gsap, Power4 } from 'gsap';

const Home = ()=>{
    let ProjectsLink = useRef(null);
    let AboutLink = useRef(null);
    let Name = useRef(null);
    let Occupation = useRef(null);
    let Banner = useRef(null);

    function HomeAnimations(){
        
        let mytl = gsap.timeline({delay:1});
        mytl
            .fromTo([AboutLink, ProjectsLink],
                {visibility:"hidden", opacity:0},
                {visibility:"visible", opacity:1, duration:1.5, ease:Power4.easeInOut, stagger:0.5})
            .fromTo(Name, 
                {visibility:"hidden", opacity:0},
                {visibility:"visible", opacity:1, duration:1.5, delay:1.5, ease:Power4.easeOut})
            .fromTo(Occupation, 
                {visibility:"hidden", opacity:0, xPercent:-20}, 
                {visibility:"visible", opacity:1, duration:1.5, delay:0.5, xPercent:0})
            .fromTo(Banner, 
                {visibility:"hidden", opacity:0, xPercent:20},
                {visibility:"visible", opacity:1, duration:1.5, delay:0.5, xPercent:0});


        return mytl;
    }

    useEffect(() =>{
        HomeAnimations();
    });

        return(
            <div id="HomeContainer">
                <nav id="nav">
                    <span id="projects-link-cont">
                        <a href = "/about-me" className="nav-link" id="about-me" ref={link => AboutLink = link}>About me</a>
                    </span>
                    <span className="about-link-cont">
                        <a href ="/projects" className="nav-link" id="projects" ref={link => ProjectsLink = link}>Projects</a>
                    </span>                                       
                </nav>
                <h1 id="name" ref={n => Name = n}>Valerie Tuckler</h1>
                <h2 id="occupation" ref ={o => Occupation = o}>Software Developer</h2>
                <h3 id="banner" ref={b => Banner = b}>Available for projects in Mexico & worldwide</h3>
            </div>
        );
}

export default Home;