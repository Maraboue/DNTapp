import bg from "../../pictures/bg.jpg";
import moon from "../../pictures/moon.png";
import mountain from "../../pictures/mountain.png";
import road from "../../pictures/road.png";

import './Header.css'
import React, {useState, useEffect, Component} from "react";


let bg1 = document.getElementById("bg");
let moon1 = document.getElementById("moon");
let mountain1 = document.getElementById("mountain");
let road1 = document.getElementById("road");


class HeaderBase extends React.Component {


    render () {
        return (

            <body>

            <div className="Header">
                    <img src={bg} id="bg"/>
                    <img src={moon} id="moon"/>
                    <img src={mountain} id="mountain"/>
                    <img src={road} id="road"/>
                    <h2 id="text"> Dynamic Network Token</h2>
            </div>
            </body>

        )
    }
}
export default HeaderBase;