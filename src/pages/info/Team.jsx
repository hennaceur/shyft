import React from "react";
import "./Team.css"
import MoFace from "./../../images/img1.jpg"
import HazFace from "./../../images/img2.png"
import HirFace from "./../../images/img3.jpg"
import { Height } from "@material-ui/icons";

function Team() {
  return (
    <div>
        <div className="row">

            <div>
                <div className="column">
                    <div className="card">
                    <form action="http://www.moadem.com">
                    <img src = {MoFace} style={{width:"100%", height: "350px", objectFit: "cover"}} />
                    <div className="container">
                        <h2>Mohamed Adem</h2>
                        <br/>
                        <p className="title">Partner</p>
                        <p>mamadem@mun.ca</p>
                        <br/>
                        <p><button className="button">Contact</button></p>
                        <br/>
                    </div>
                    </form>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <form action="http://www.cs.mun.ca/~hennaceur/">
                <img src={HazFace} style={{width:"100%", height: "350px", objectFit: "cover"}} />
                <div className="container">
                    <h2>Hazem Ennaceur</h2>
                    <br/>
                    <p className="title">Partner</p>
                    <p>hennaceur@mun.ca</p>
                    <br/>
                    <p><button className="button">Contact</button></p>
                    <br/>
                </div>
                </form>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <form action="https://hbhoj.com">
                    <img src={HirFace} style={{width:"100%", height: "350px", objectFit: "cover"}}/>
                    <div className="container">
                        <h2>Hirthik Bhojwani</h2>
                        <br/>
                        <p className="title">Partner</p>
                        <p>hbhojwani@mun.ca</p>
                        <br/>
                        <p><button className="button">Contact</button></p>
                        <br/>
                    </div>
                </form>
                </div>
            </div>
            </div>

        </div>
    </div>
    
  );
}

export default Team;
