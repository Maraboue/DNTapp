import React, { Component } from 'react'
import ParticleBackground from "../ParticleBackground";
import './About.css'


class About extends Component {

    render () {
        return (
            <section className="about_section" id="about">
                <body>
                <div id="AboutHeader" className="AboutHeader">
                    <h1 className="gradient-text">About the Dynamic Network</h1>
                </div>
                <div id="AboutInfo" className="AboutInfo">
                    <h1>Background</h1>
                    <p>
                        The Internet provided humans a new way to exchange information digitally and has changed how we communicate.
                        Blockchain and cryptocurrencies have given humans a new way to exchange value over the internet.
                        <br/><br/>
                        With  new  technology, new possibilities  arise, but not always
                        without issues. One problem that has risen with cryptocurrencies is their high volatility, meaning that the currency has big price swings.
                        It has made these currencies objects for speculation and investment almost exclusively, and therefore they have lost their functionality as a currency.
                        <br/><br/>
                        For a currency to be viewed as a good means of payment, it cannot be associated with high  volatility.  This  is  not  only  restricted to cryptocurrencies,
                        as for example the Venezuelan Bolivar is a fiat currency with historically high volatility and has been losing its purchasing power due to
                        hyperinflation in the recent years.
                        <br/><br/>
                        In regard to this we propose a new cryptocurrency; the Dynamic Network Token, which aims to reduce the volatility in a cryptocurrency
                        by  regulating the supply dynamically with burning and minting. The implementation of this functionality will strive to remove the high volatility in the
                        token for the benefits of a more stable and linear growth, and at the same time encourage users to transact with the Dynamic Network Token between each other.
                    </p>
                    <h1>Research</h1>
                    <p>
                        Behind the Dynamic Network Token lies a lot of research. We thought that by using machine learning and linear regression, a fairly good prediction
                        of price behaviour could be obtained.
                    </p>
                    <h1>Vision</h1>

                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).</p>
                </div>

                <ParticleBackground/>


                </body>
            </section>
        )
    }
} export default About;