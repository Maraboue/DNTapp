import React from 'react'
import video1 from '../../videos/video1.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroHeader} from './HeroElements'
import './HeroSection.css'

import graph from "../../gifs/gif-graph-4.gif";
import ParticleBackground from "../Misc/ParticleBackground";


const HeroSection= () => {
    return (

        <HeroContainer>
            <HeroHeader>
                <div className="HeroHeader" id="HeroHeader">
                <h1 id="HeroHeader1" className="gradient-text">Reducing Volatility</h1>
                    <div className="ParticleBackground1">
                    <ParticleBackground/></div>
                <h2 id="HeroHeader2" className="gradient-text">While Providing a Linear and Stable Growth.</h2>
                    <div className="ParticleBackground2">
                        <ParticleBackground/></div>
                </div>
                <div id="TeamInfo1" className="TeamInfo1">
                    <h6>We dont know how it will go, but this is a graph ¯\_(ツ)_/¯</h6>
                    <img src={graph} alt="Loading.."></img>
                </div>
            </HeroHeader>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video1} type='video/mp4'/>
        </HeroBg>

        </HeroContainer>
    )

}
export default HeroSection