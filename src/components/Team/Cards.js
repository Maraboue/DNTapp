import React, {Component, useEffect,useRef} from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Card.css'
import ParticleBackground from "../Tokenomics/ParticleBackground";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

class Cards extends React.Component {

    render () {
        return (

            <body>
            <div id="teamHeader" className="teamHeader">
                <h1>Dynamic Network Team</h1>
            </div>

            <div id="cardContainer" className="cardContainer">
                <div id="circle" className="circle">
                    <ParticleBackground/>
                </div>
            <Tilt div id="card" className="card">
                <h2>01</h2>
                <h3>DagCoin Dev1</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                <a href ="#">Read More</a>
            </Tilt>
                <Tilt div id="card" className="card">
                    <h2>02</h2>
                    <h3>DagCoin Dev2</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                    <a href ="#">Read More</a>
                </Tilt>
                <Tilt div id="card" className="card">
                    <h2>03</h2>
                    <h3>DagCoin Dev3</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                    <a href ="#">Read More</a>
                </Tilt>
            </div>
            </body>
        )
    }
} export default Cards;