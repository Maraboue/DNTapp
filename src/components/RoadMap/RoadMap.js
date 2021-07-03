import React, { Component } from 'react'
import ParticleBackground from "../Misc/ParticleBackground";
import './RoadMap.css'


class RoadMap extends Component {

    render () {
        return (
            <section className="roadmap_section" id="roadmap">
                <body>
                <div id="roadmapHeader" className="roadmapHeader">
                    <h1 className="gradient-text">Road Map</h1>
                </div>
                <div id="roadStopContainer" className="roadStopContainer">


                <div id="roadStop" className="roadStop">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div id="content" className="content">
                <h1>Q2 2021</h1>
                <h2>Launch of DNT</h2>
                <p>
                    Launch of the Dynamic Network Token.
                    </p>
                    </div>
                </div>
                    <div id="roadStop" className="roadStop">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div id="content" className="content">
                            <h1>Q3 2021</h1>
                            <h2>Community Network</h2>
                            <p>
                                Building the networks community.
                            </p>
                        </div>
                    </div>
                    <div id="roadStop" className="roadStop">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div id="content" className="content">
                            <h1>Q4 2021</h1>
                            <h2>Partnerships</h2>
                            <p>
                                Establish new <br/> partnerships & colaborations.
                            </p>
                        </div>
                    </div>

                    <div id="roadStop" className="roadStop">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div id="content" className="content">
                            <h1>Q1 2022</h1>
                            <h2>Response from community</h2>
                            <p>
                                Listen to community <br/> for requests for improvements.
                            </p>
                        </div>
                    </div>
                </div>

                </body>
            </section>
        )
    }
} export default RoadMap;