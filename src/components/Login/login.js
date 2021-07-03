import React from 'react';
import { useMoralis } from "react-moralis";
import './Login.css'
import {HeroBg, HeroContainer, VideoBg} from "../HeroSection/HeroElements";
import video1 from "../../videos/video1.mp4";

function Login ()  {

    const { authenticate, isAuthenticated, user } = useMoralis();
    const { logout, isAuthenticating } = useMoralis();



    if (!isAuthenticated) {
        return (
            <div className="LoginContainer">
                <div className="LoginItem">
                    <div id="LoginText">
                    <h1>DNT AirDrop</h1>
                    <p>
                        We believe that the best communities are built by its users.
                        Therefore we want to reward our users for helping us grow the community.
                        To be eligible for the air drop, you have to complete the following steps:<br/><br/>
                        1. Follow us on Facebook and Twitter.<br/><br/>
                        2. Re-tweet the pinned post on our Twitter page.<br/><br/>
                        3. Send us an email at: Support@DynamicNetwork.com with your address and twitter user and then authenticate with Web3 below.<br/><br/>
                        4. If you have followed all the steps above, you are done!
                    </p>
            <div className="LoginButton">
                <button onClick={() => authenticate() }> <p>Authenticate with Web3</p></button>
            </div>
                    </div>
                </div>
                <div className="LoginItem">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video1} type='video/mp4'/>
                </HeroBg>
            </div>
            </div>
        );
    }
    if(isAuthenticated) {
        return (
            <div className="LoginContainer">

                <div className="LoginItem">
                <div id="LoginText">
                   <h1> Welcome Wallet User:</h1> <p>{user.get("ethAddress")} </p><br/>
                   <p>
                    If you have completed the four steps you are now eligible for the airdrop.
                    <br/> If you have any questions, feel free to email us at: support@dynamicnetwork.com</p>
                    <div className="LoginButton">
                    <button onClick={() => logout()}  disabled={isAuthenticating}>
                       <p>Log Out</p>
                    </button>
                    </div>
                </div>
                </div>
                <div className="LoginItem">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video1} type='video/mp4'/>
                </HeroBg>
                </div>

            </div>

        );
    }
}

export default Login;
