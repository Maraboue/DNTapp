import './App.css';

import React, { useEffect, useRef } from 'react';
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/Navbar/NavigationBar";
import Cards from './components/Team/Cards';
import Tokenomics from "./components/Tokenomics/Tokenomics";

    class App extends React.Component {


        render() {

            return (
                <section className="DNT" id="DNT">
                    <div className="App">
                        <div className="dynamic-network-site">
                            <NavigationBar/>
                        </div>

                        <body>

                            <div id="HeroSection" className="HeroSection">
                            <HeroSection/>
                            </div>

                            <div id="Tokenomics-info" className="Tokenomics-info">
                                <Tokenomics/>
                            </div>

                            <div className="team-cards">
                             <Cards/>
                            </div>

                        </body>

                    </div>
                </section>
            );
        }
    }
export default App;
