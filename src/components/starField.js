import React, { Component } from 'react'
import StarfieldAnimation from 'react-starfield-animation'


/*
License: MIT © Travis Fischer
 */
class starField extends Component {


    render () {
        return (

            <canvas id="starField">
            <StarfieldAnimation
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }}
            />
            </canvas>
        )
    }
}
