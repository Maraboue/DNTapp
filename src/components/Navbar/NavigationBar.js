import React, { Component } from 'react';
import { items } from "./Items";
import style from './NavigationBar.css';
import {Link} from 'react-scroll';
import { useEffect } from 'react';
import logo from "../../pictures/bluewave.jpg";
import {HeroBg, VideoBg} from "../HeroSection/HeroElements";
import video1 from "../../videos/video1.mp4";


class NavigationBar extends React.Component{
    render() {

        return(


            <nav className="NavigationBarItems">
                <Link className="NavigationBar-Logo" to="DNT" smooth={true} duration={1000}>Dynamic Network
                </Link>
            <VideoBg id="NavLogo" autoPlay loop muted src={video1} type='video/mp4'/>
                <div className="Menu">
                </div>
                <ul className="nav-items">

                    {items.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.name} to={item.url} smooth={true} duration={1000}>
                                    {item.title}
                                </Link>
                            </li>
                        )

                    })}
                </ul>
            </nav>
        );
    }
}

export default NavigationBar;