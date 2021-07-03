import React, { Component } from 'react'
import ParticleBackground from "../Misc/ParticleBackground";
import './TokenInfo.css'

import graph from '../../pictures/blueatm.jpg'

class TokenInfo extends Component {

    render () {
        return (
            <section className="token_section" id="tokenInfo">
                <body>
                <div id="TokenSection">

                    <div id="TokenHeader" className="TokenHeader">
                        <h1 className="gradient-text">Reducing volatility</h1>
                        <h2 className="gradient-text">while providing a linear and stable growth.</h2>
                        <div id="TeamInfo" className="TeamInfo">
                            <h1>The Dynamic Team</h1>
                            <p>
                                The Dynamic Network Team is a small team with a large vision.
                                Consisting of three computer engineers from the Royal Institute of Technology in Sweden,
                                we have decided to take on the task of reducing volatility and provide a safer store of value
                                for the crypto community.
                            </p>

                        </div>
                    </div>
                </div>
                </body>
            </section>
        )
    }
} export default TokenInfo;

