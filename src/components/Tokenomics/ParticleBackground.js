import React, { Component } from 'react'
import Particles from "react-particles-js";

class ParticleBackground extends Component {

    render () {
        return (
        <Particles
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 5000,
                            }

                        },
                    },
                }}
            />
        )
    }
} export default ParticleBackground;
