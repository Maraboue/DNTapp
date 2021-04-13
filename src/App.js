import './App.css';
import DoughnutChart from "./components/Tokenomics/DoughnutChart";
import ParticleBackground from "./components/Tokenomics/ParticleBackground";
import React from 'react';
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/Navbar/NavigationBar";
import planets from "./components/planets";


function saveAsDoughnut(){

    const doughnutChart = new DoughnutChart()
    doughnutChart.saveDoughnutCanvas();
}

function getRandomArray(numItems) {

    // Mock-data för test..
    let names = ['Team','ICO','Reserve','X'];
    let data = [];
    for(var i = 0; i < numItems; i++) {
        data.push({
            label: names[i],
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}

function getFeeds() {
    let feeds = [];

    feeds.push({
        title: 'Token Distribution',
        data: getRandomArray(4)
    });

    feeds.push({
        title: 'Token Distribution',
        data: getRandomArray(4)
    });

    feeds.push({
        title: 'Token Distribution',
        data: getRandomArray(4)
    });

    return feeds;
}

function getData() {
    let data = [];
    data.push({
        title: 'Token Distribution',
        data: getRandomArray(4)
    });

    return data;
}



var sun = new Image();
var moon = new Image();
var earth = new Image();

function init() {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 800, 800); // clear canvas

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    var time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow

    ctx.drawImage(earth, -12, -12);

    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);

    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feeds: getFeeds()
        };
    }

    componentDidMount() {
        window.setInterval(() => {
            this.setState({
                data: getData()
            })
        }, 5000);

    }

    render() {

        return (
            <div className="App">

                <div className="dynamic-network-site">
                    <NavigationBar/>
                </div>

                <div id="HeroSection" className="HeroSection">
                <HeroSection/>
                </div>



                <div id="Tokenomics" className="Tokenomics">
                    <ParticleBackground/>

                </div>

                // TOKEN INFO
                <div id="tokenInfo" className="TokenInfo">
                    <h1>HELLO TOKEN!</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',<br/>
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,<br/>
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).</p>
                </div>

                // CHART OF DISTRIBUTION
                <div id="DoughnutChart" className="DoughnutChart">
                    <DoughnutChart
                        data={this.state.feeds[1].data}
                        title={this.state.feeds[1].title}
                        colors={[ '#2EF5FF',
                            '#16ACDE',
                            '#2596F5',
                            '#1D62E0',
                            '#2B4BFF']}
                    />
                <br/>
                    <button id="saveChart" className="saveChart" onClick={saveAsDoughnut}>Download Distribution</button>
                </div>
                <div id="planets" className="planets">
                    <canvas id="canvas"/>
                </div>



            </div>
        );
    }
}
export default App;
