import React, {Component}  from 'react'
import ParticleBackground from "./ParticleBackground";
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

         <body>
         <div id="TokenomicsHeader" className="TokenomicsHeader">
             <h1>Tokenomics</h1>
         </div>
         <div id="tokenomics" className="tokennomics">
             <ParticleBackground/>

        <div id="TokenInfo" className="TokenInfo">
            <h1>HELLO TOKEN!</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).</p>
            <a href ="#">Read More</a>
        </div>
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
         </div>
         </body>

        )
    }
} export default  Tokenomics ;