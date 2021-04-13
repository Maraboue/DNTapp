import React, { Component } from 'react';
import { items } from "./Items";
import './NavigationBar.css';

class NavigationBar extends React.Component{
    render() {
        return(
            <nav className="NavigationBarItems">
                <h1 className="NavigationBar-Logo">Dynamic Network ʕ•ᴥ•ʔ </h1>
                <div className="Menu">

                </div>
                <ul className="nav-items">
                    {items.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.name} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavigationBar;