import React, {Component}  from 'react'
import ParticleBackground from "../ParticleBackground";
import DoughnutChart from "./DoughnutChart";
import './Tokenomics.css'


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

class Tokenomics extends Component {


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


    render () {
        return (
        <section className="tokenomics_section" id="tokenomics">
         <body>

         <div id="tokenomics" className="tokennomics">

             <div id="TokenomicsHeader" className="TokenomicsHeader">
                 <h1 className="gradient-text">Tokenomics</h1>
             </div>



        <div id="TokenInfo" className="TokenInfo">
            <h1>Why Dynamic Network Token?</h1>
            <br/>
            <h2>Burning & Minting</h2>
            <p>
                In accordance with the quantitative theory of money, we have implemented
                burning and minting for each transaction. This makes it possible to control
                the volatility in a better way, making the Dynamic Network Token less volatile. The ratio
                implemented for the burning and minting is close to 2:1 in favor for the burning, thus creating
                a more deflationary token.
            </p>
            <a href ="#">Read More</a>
            <h2>Network Based Burning</h2>
            <p>
                We believe that a good token is backed by a strong network. Therefore, we have implemented Network Based
                Burning. This means as the Dynamic Network grows, burns will occur based on users in the network.
            </p>
            <a href ="#">Read More</a>
            <h2>Less Volatility</h2>
            <p>
                Before launching the Dynamic Network Token, we have conducted research that indicates that the token with
                its burning and minting implemented, is less volatile than a token that does not have this functionality
                implemented. This will in theory lead to a more stable growth, making the Dynamic Network Token a safer
                investment.
            </p>
            <a href ="#">Read More</a>
        </div>


         </div>

         <ParticleBackground/>

         </body>
        </section>
        )
    }
} export default  Tokenomics ;