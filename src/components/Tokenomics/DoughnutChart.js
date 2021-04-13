import React, { Component } from 'react'
import  "react-chartjs-2";
import Chart from 'chart.js'
import { saveAs } from "file-saver";



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

class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();

    }
    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.label);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'doughnut',
            options: {
                maintainAspectRatio: false,

                title: {
                    display: true,
                    text: 'Token Distribution',
                    color: '#2B4BFF',

                }
            },
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.colors
                }],


            }
        });


    }


    saveDoughnutCanvas = () => {
        var canvas = document.getElementById("doughnutChart");
        canvas.toBlob(function (blob) {
            saveAs(blob, "doughnutChart.png");
        });
    }



    render() {
        return(
            <canvas id="doughnutChart" ref={this.canvasRef} />
        );
    }
} export default DoughnutChart;