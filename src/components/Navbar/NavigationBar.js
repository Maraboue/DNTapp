import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import style from './NavigationBar.css';
import {Link} from 'react-scroll';
import { useEffect } from 'react';
import ParticleBackground from "../ParticleBackground";

class NavigationBar extends React.Component{
    render() {

        return(
            <nav className="NavigationBarItems">
                <Link className="NavigationBar-Logo" to="DNT" smooth={true} duration={1000}>Dynamic Network ʕ•ᴥ•ʔ </Link>
                <div className="Menu">
                </div>
                <ul className="nav-items">
                    <Link className="nav-links" to="tokenomics" smooth={true} duration={1000}>Tokenomics</Link>
                    <Link className="nav-links" to="about" smooth={true} duration={1000}>About</Link>
                    <Link className="nav-links" to="team" smooth={true} duration={1000}>Team</Link>
                    <Link className="nav-links" to="roadmap" smooth={true} duration={1000}>Road Map</Link>
                    <NavDropdown className="nav-links" title="Docs" id="collapsible-nav-dropdown" style={{textDecoration: 'none'}}>
                        <NavDropdown.Item className="nav-links" href="https://docs.google.com/document/d/1m179syu3jzJltHuWAE_LU6h-bzHWharmgzZzcvOTKd0/edit" >Whitepaper</NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.Item className="nav-links" href="https://github.com/Maraboue/DynamicNetworkToken">Github</NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.Item className="nav-links" href="https://discord.gg/5pYJkvs4">Discord</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="nav-links" href="#action/3.4">Donate to dag</NavDropdown.Item>
                    </NavDropdown>
                </ul>
            </nav>
        );
    }
}

export default NavigationBar;