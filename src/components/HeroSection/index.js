import React from 'react'
import video1 from '../../videos/video1.mp4'
import {HeroContainer, HeroBg, VideoBg} from './HeroElements'


const HeroSection= () => {
    return (

        <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video1} type='video/mp4'/>
        </HeroBg>
        </HeroContainer>
    )

}
export default HeroSection