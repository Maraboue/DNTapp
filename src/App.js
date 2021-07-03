import './App.css';

import React, {Component, useEffect, useRef} from 'react';
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/Navbar/NavigationBar";
import Cards from './components/Team/Cards';
import Tokenomics from "./components/Tokenomics/Tokenomics";
import About from "./components/About/About";
import RoadMap from "./components/RoadMap/RoadMap";
import Footer from "./components/Footer/Footer";
import DoughnutChart from "./components/Tokenomics/DoughnutChart";
import Header from "./components/Header/Header";
import Login from "./components/Login/login";




    class App extends React.Component {



        render() {
            return (

                <section className="DNT" id="DNT">
                    <div className="App">
                        <div className="dynamic-network-site">
                            <NavigationBar/>
                        </div>

                        <body>

                        <div id="Header" className="HeaderSection">
                            <Header/>
                        </div>
                            <div id="HeroSection" className="HeroSection">
                                <Login/>
                            </div>

                            <div id="Tokenomics-info" className="Tokenomics-info">
                                <Tokenomics/>
                            </div>
                            <div className="AboutSection">
                                <About/>
                            </div>
                            <div className="team-cards">
                                <Cards/>
                            </div>

                            <div className="RoadMap">
                                <RoadMap/>
                            </div>

                            <div className="Footer">
                                <Footer/>
                            </div>
                        </body>
                    </div>
                </section>
            );
        }
    }
export default App;
