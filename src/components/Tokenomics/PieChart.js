import CanvasJSReact from '../../CanvasJS/canvasjs.react';
import ParticleBackground from "../Misc/ParticleBackground";

var React = require('react');

var Component = React.Component;

var CanvasJS = CanvasJSReact.CanvasJS;

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("gradient",
    [//colorSet Array

        "#18a5f1",
        "#008080",
        "#476098",
        "#163968",
        "#61dafb"
    ]);

class PieChart extends Component {



    render() {

        const options = {
            animationEnabled: true,
            exportFileName: "Token Distribution",
            exportEnabled: true,
            backgroundColor: "transparent",
            width: 800,
            height: 600,

            colorSet: "gradient",

            title:{
                text: "Token Distribution",
                fontColor: "#303030",
            },

            axisX: {
                labelFontColor:"grey",
            },


            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 20,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 18, label: "Team" },
                    { y: 49, label: "Public Sale" },
                    { y: 9, label: "Marketing" },
                    { y: 5, label: "Referral" },
                    { y: 19, label: "Reserve" }
                ]
            }]

        }
        return (

            <div className="PieChart" id="PieChart">
                <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */

                />

                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>

        );
    }
}
export default PieChart;