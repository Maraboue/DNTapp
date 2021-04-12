import logo from './logo.svg';
import './App.css';
import DoughnutChart from "./components/DoughnutChart";
import React from 'react';


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

  // RENDERING RETURN
render() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

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


    );

}
}

export default App;
